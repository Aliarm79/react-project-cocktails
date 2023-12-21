import React, { useState, useContext, useEffect, createContext } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await (await fetch(`${url}${searchTerm}`)).json();
        const { drinks } = response;
        if (drinks) {
          const newDrinks = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;
            const price = idDrink.toString().substring(0, 2);
            return {
              amount: 1,
              price: price,
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newDrinks);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);
  const clearItems = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const increaseItem = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.amount += 1;
      }
      return item;
    });
    setCart(newCart);
  };
  const decreaseItem = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.amount > 0) {
        item.amount -= 1;
      }
      return item;
    });
    setCart(
      newCart.filter((item) => {
        return item.amount !== 0;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        cocktails,
        loading,
        setSearchTerm,
        cart,
        setCart,
        clearItems,
        amount,
        setAmount,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
