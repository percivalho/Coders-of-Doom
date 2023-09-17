import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { UPDATE_PRODUCT } from '../utils/mutations';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        // Decrease the quantity of each product in the order
        for (let item of cart) {
          try {
            const response = await updateProduct({
              variables: { _id: item._id, quantity: item.purchaseQuantity }
            });
          } catch (error) {
            console.error(`Failed to update product with ID ${item._id}:`, error.message);
            alert(error.message);
          }
        }


        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder, updateProduct]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
