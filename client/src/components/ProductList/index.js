import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import Slider from 'react-slick';

function ProductList() {
  const [state, dispatch] = useStoreContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  useEffect(() => {
    if (searchTerm) {
      const results = state.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, state.products]);


  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  const getSlidesToShow = (productCount) => {
    if (productCount <= 2) {
      return productCount;
    }
    return 3;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const searchSettings = {
    ...settings,
    slidesToShow: getSlidesToShow(filteredProducts.length),
  };

  return (
    <div className="my-2">
      <input
        className="search-input"
        type="text"
        placeholder="Search through our collection..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Display Search Results */}
      {filteredProducts.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <Slider {...searchSettings}>
            {filteredProducts.map(product => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </Slider>
        </div>
      )}
      <h2>Exclusive Product Range:</h2>
      {state.products.length ? (
        <Slider {...settings}>
          {filterProducts().map((product) => (
            <div key={product._id}>
              < ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )
      }
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div >
  );
}

export default ProductList;
