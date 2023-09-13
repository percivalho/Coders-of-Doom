import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { useStoreContext } from '../utils/GlobalState';

const Home = () => {
  const heroImage = '/images/HomeScreen6.jpg';
  const [state,] = useStoreContext();
  const { currentHeroImage } = state;
  const [selectedImage, setSelectedImage] = useState(currentHeroImage || heroImage);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (currentHeroImage) {
      setTimeout(() => {
        setIsFading(false);
      }, 500);
    }
  }, [currentHeroImage]);
  return (<>
    <div className={`hero-image ${isFading ? 'fade-out' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentHeroImage || heroImage})` }}>
      <div class="hero-text">
        <h1>Welcome</h1>
        <p></p>
      </div>
    </div>
    <div className="container">
      <CategoryMenu onSelectCategory={setSelectedImage} />
      <ProductList />
      <Cart />
    </div>
  </>
  );
}

export default Home;
