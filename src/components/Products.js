import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, addToCart } from "../redux/actions";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"; 
import cc1 from '../image/c1.jpg'
import cc2 from '../image/c2.jpg'
import cc3 from '../image/c3.jpg'

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => dispatch(setProducts(data.products)));

  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#FDEDED" }}>

      {/* ✅ CAROUSEL SECTION  */}
      <Carousel style={{ width: "100%", maxHeight: "350px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cc1}
            alt="Slide 1"
            style={{ objectFit: "cover", height: "350px" }}
          />
        </Carousel.Item>

        <Carousel.Item>
         <img
           className="d-block w-100"
            src={cc2}
            alt="Slide 1"
            style={{ objectFit: "cover", height: "350px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cc3}
            alt="Slide 1"
            style={{ objectFit: "cover", height: "350px" }}
          />
        </Carousel.Item>
      </Carousel>

{/* PRODUCTS SECTION */}
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    padding: "30px",
  }}
>
  {products.slice(0, 4).map((p) => (
    <div
      key={p.id}
      style={{
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <NavLink to={`/product/${p.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img
          src={p.thumbnail || p.images?.[0]}
          alt={p.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
            marginBottom: "15px",
          }}
        />

        <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>
          {p.title.length > 40 ? p.title.substring(0, 40) + "..." : p.title}
        </h4>

        <p style={{ fontSize: "18px", fontWeight: "bold", color: "#E63946" }}>
          ${p.price}
        </p>
      </NavLink>

      <button
        onClick={() => dispatch(addToCart(p))}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#1D3557",
          color: "white",
          fontWeight: "600",
          fontSize: "15px",
          cursor: "pointer",
          transition: "0.3s ease",
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
