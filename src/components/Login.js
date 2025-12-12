import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  return (
    <div 
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8CDE0"
      }}
    >
      <div 
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>

        <input
          placeholder="Email"
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "15px"
          }}
        />

        <input
          placeholder="Password"
          type="password"
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#F875AA",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
