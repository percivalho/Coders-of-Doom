import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { generateEmailTemplate } from '../../utils/emailTemplate';

const apiKey = process.env.REACT_APP_API_KEY;

// TODO: Add a comment describing the functionality of loadStripe
// Your comment here
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

let inactivityTimer; // for abondoned Cart

function handleAbandonedCart(state, emailSentRef) {
  console.log("abandoned Cart for 6s")
  if (state.cart.length > 0) {
    if (Auth.loggedIn()) {
      //const token = Auth.getToken();
      const decoded = Auth.decode(Auth.getToken());
      console.log(decoded);
      const emailHTML = generateEmailTemplate(decoded.data.firstName);

      const apiKey = process.env.REACT_APP_API_KEY
      const domain = process.env.REACT_APP_DOMAIN
      //console.log(apiKey);
      //console.log(domain);
      //console.log('API Key:', process.env.REACT_APP_API_KEY);
      //console.log('Domain:', process.env.REACT_APP_DOMAIN);
      //fetch(`https://api.mailgun.net/v3/sandboxf08194b8b1ba46a790cf9321784eaf62.mailgun.org/messages`, {
      fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('api:' + apiKey),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          from: 'jl83950189@gmail.com',
          //to: 'jl83950189@gmail.com',
          to: decoded.data.email,
          subject: "🛒 Oops! Did you forget something in your cart?",
          html: emailHTML
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));


      // Set the flag to true
      return true;
    }
  }
}


const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [emailSent, setEmailSent] = useState(false);

  // TODO: Add a comment describing the functionality of the useEffect hook in this instance
  // Your comment here
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // TODO: Add a comment describing what data we are watching and what work should be preformed if that data changes
  // Your comment here
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    // Start/reset the inactivity timer whenever the cart changes
    clearTimeout(inactivityTimer);
    if (!emailSent) { // Only set up the timer if email hasn't been sent
      inactivityTimer = setTimeout(() => {
        const flag = handleAbandonedCart(state, emailSent)
        if (flag == true) {
          setEmailSent(true);
        }
      }, 6000);
    }
    return () => clearTimeout(inactivityTimer);
  }, [state.cart]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // TODO: Add a comment describing the functionality of our submitCheckout function.
  // Your comment here
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
