import { useGlobalContext } from "../context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, clearItems } = useGlobalContext();
  let total = 0;
  cart.map((item) => {
    total += parseInt(item.price) * item.amount;
    
    return <></>;
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            clearItems();
          }}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default Cart;
