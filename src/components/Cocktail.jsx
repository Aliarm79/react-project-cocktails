import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ item }) => {
  const { image, name, id, glass, price } = item;

  const { cart, setCart } = useGlobalContext();
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>${price}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
        <button
          onClick={() => {
            if (!cart.includes(item)) setCart([...cart, item]);
          }}
          className="btn btn-primary btn-details"
        >
          {cart.includes(item) ? "In Cart" : "Add to cart"}
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
