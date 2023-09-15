import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY, UPDATE_HERO_IMAGE, UPDATE_CURRENT_QUOTE } from '../../utils/actions';

function Nav() {

  const [state, dispatch] = useStoreContext();

  const handleShopLinkClick = () => {
    // Reset the current category
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: ''
    });
    // Reset the hero image
    dispatch({
      type: UPDATE_HERO_IMAGE,
      image: "/images/HomeScreen6.jpg"
    });
    dispatch({
      type: UPDATE_CURRENT_QUOTE,
      quote: ''
    });
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/" onClick={handleShopLinkClick}>
          <img src="/images/Logo.png" alt="Logo" width="200" height="auto" />
        </Link>
      </h1>
      <nav>
        {showNavigation()}
      </nav>
      <div className="contact">Contact Us:
        <p> Tel: 0123456789</p>
      </div>
    </header>
  );
}

export default Nav;
