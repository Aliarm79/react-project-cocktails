import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ item }) => {
  const { image, name, id, glass, price } = item;

  const { cart, setCart } = useGlobalContext();
  const [value, setValue] = useState(false);
  useEffect(() => {
    cart.forEach((element) => {
      if (cart.length !== 0) {
        if (element.id === id) setValue(true);
      }
    });
  });

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
            if (!value) setCart([...cart, item]);
          }}
          className="btn btn-primary btn-details"
        >
          {value ? "In Cart" : "Add to cart"}
        </button>
      </div>
    </article>
  );
};

export default Cocktail;
