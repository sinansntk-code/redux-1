import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/actions";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Total price calculation
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}> Your Cart is Empty</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Your Shopping Cart</h2>

      <button
        onClick={() => dispatch(clearCart())}
        style={{
          backgroundColor: "#F875AA",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Clear Cart
      </button>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={item.thumbnail || item.images?.[0]}
            alt={item.title}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              borderRadius: "8px",
              background: "#f1f1f1",
              padding: "5px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>${item.price}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                style={{
                  width: "35px",
                  height: "35px",
                  fontSize: "20px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                -
              </button>

              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                style={{
                  width: "35px",
                  height: "35px",
                  fontSize: "20px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL PRICE */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Total: <span style={{ color: "#28a745" }}>${totalPrice.toFixed(2)}</span>
        </h2>

        <button
          style={{
            width: "100%",
            backgroundColor: "#28a745",
            color: "white",
            padding: "15px",
            marginTop: "10px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
