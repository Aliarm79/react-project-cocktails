import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { cart } = useGlobalContext();
  let amount = 0;
  cart.forEach((item) => {
    amount += item.amount;
    
  });
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="about">
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="cart">
              <div className="nav-container">
                <AiOutlineShoppingCart size={30} />
                {amount !== 0 && (
                  <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                  </div>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
