import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail || product.images?.[0]} width="200" alt={product.title} />
      <h3>${product.price}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}
