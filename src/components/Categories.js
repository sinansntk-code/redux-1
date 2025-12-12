import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import { NavLink } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{  backgroundColor: "#FDEDED", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Products</h2>

      {/* CATEGORY FILTER */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 18px",
              cursor: "pointer",
              background: selectedCategory === cat ? "#000" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#000",
              border: "1px solid black",
              borderRadius: "25px",
              transition: "0.3s"
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          padding: "10px"
        }}
      >
        {filteredProducts.map(p => (
          <div
            key={p.id}
            style={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "15px",
              background: "white",
              borderRadius: "15px",
              transition: "0.3s",
              cursor: "pointer",
              textAlign: "center"
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <NavLink
              to={`/product/${p.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={p.thumbnail || p.images?.[0]}
                alt={p.title}
                style={{
                  width: "150px",
                  height: "170px",
                  objectFit: "contain",
                  marginBottom: "15px"
                }}
              />

              <h4
                style={{
                  fontSize: "16px",
                  height: "45px",
                  overflow: "hidden",
                  marginBottom: "10px"
                }}
              >
                {p.title}
              </h4>

              <p style={{ color: "#28A745", fontWeight: "bold", fontSize: "18px" }}>
                ${p.price}
              </p>
            </NavLink>

            <button
              onClick={() => dispatch(addToCart(p))}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "10px",
                background: "linear-gradient(45deg, #000, #444)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "0.3s"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
