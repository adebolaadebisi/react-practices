import React, { useState } from "react";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Jollof Rice", price: 1500, quantity: 2 },
    { id: 2, name: "Plantain", price: 500, quantity: 1 },
    { id: 3, name: "Moi Moi", price: 800, quantity: 1 },
  ]);
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart-container">
      <h2> Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  {item.name} - ₦{item.price} x {item.quantity} = ₦
                  {item.price * item.quantity}
                </div>
                <div className="item-controls">
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₦{totalPrice}</h3>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};
export default ShoppingCart;