import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, grandTotal, isLoggedIn } =
    useContext(AppContext);

  return (
    <div>
      <h2>Cart</h2>
      {!isLoggedIn && <p style={{ color: "red" }}>Login to manage your cart.</p>}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Actions</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => increaseQty(item.id)} disabled={!isLoggedIn}>+</button>
                  <button onClick={() => decreaseQty(item.id)} disabled={!isLoggedIn}>-</button>
                  <button onClick={() => removeFromCart(item.id)} disabled={!isLoggedIn}>Remove</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3 style={{ textAlign: "right" }}>Grand Total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;