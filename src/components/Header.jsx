// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import '../components/Header.css';

const Header = ({ cart }) => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <FaUtensils className="food-icon" />
          JAZZ Akka Food
        </div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              <span className="cartCount">{cart.length}</span> View Cart
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Food Cart. All Rights Reserved.</p>
    </div>
  );
};

export default Header;
