import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_HERO_IMAGE,
  UPDATE_CURRENT_QUOTE
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  const handleImageChange = (id) => {
    // Find the category using the provided ID
    const category = categories.find(cat => cat._id === id);
    if (category) {
      const selectedImage = category.image;
      const selectedQuote = category.quote;

      if (selectedImage) {
        dispatch({
          type: UPDATE_HERO_IMAGE,
          image: `../images/${selectedImage}`
        });
      }
      if (selectedQuote) {
        dispatch({
          type: UPDATE_CURRENT_QUOTE,
          quote: selectedQuote
        });
      }
    }
  };


  return (
    <div>
      <h2>Explore by Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
            handleImageChange(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
