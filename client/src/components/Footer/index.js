import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer(props) {
  return (
    <footer className="footer">
      <p>&copy; 2023 Fitness Direct</p>
    </footer>
  );
}

export default Footer;
