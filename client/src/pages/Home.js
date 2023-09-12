import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (<>
    <div class="hero-image">
    <div class="hero-text">
      <h1>Welcome</h1>
      <p></p>
    </div>
  </div>
    <div className="container">
      <CategoryMenu />
  
      <ProductList />
      <Cart />
    </div>
    </>
  );
}

export default Home;
