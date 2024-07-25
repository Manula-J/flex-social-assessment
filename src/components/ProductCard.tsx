import React from "react";
import { Product } from "../Product";
import "../styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card product-card">
      <img src={product.imageUrl} alt={product.name} className="card-img-top" />
      <div className="card-body product-card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Rs.{product.price.toFixed(2)}</p>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
