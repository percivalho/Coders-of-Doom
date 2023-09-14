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

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

let inactivityTimer; // for abondoned Cart

function handleAbandonedCart(state, emailSentRef) {
  if (state.cart.length > 0) {
    if (Auth.loggedIn()) {
      console.log("abandoned Cart for 10s");
      const decoded = Auth.decode(Auth.getToken());
      //console.log(decoded);
      const emailHTML = generateEmailTemplate(decoded.data.firstName);

      // EmailJS configurations
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const apikey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Parameters for the template
      const templateParams = {
        from_name: 'Fitness Direct',
        to_name: decoded.data.firstName,
        to_email: decoded.data.email,
        firstName: decoded.data.firstName,
      };
      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: apikey,
        template_params: templateParams
      };
      //console.log(data);
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return true;
    }
  }
}

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

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
      }, 10000);
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
          <img src="/images/Basket.png"></img>
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Basket</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: £{calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          You haven't added anything to your basket yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
