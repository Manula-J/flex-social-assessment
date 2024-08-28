import React from "react";
import { Product } from "../Product";
import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = (docId: String) => {
    console.log("Navigating to product ID:", docId);
    navigate(`/products/product-details/${docId}`);
  };

  return (
    <div
      className="card product-card"
      onClick={() => handleProductClick(String(product.docId))}
    >
      <div className="image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card-img-top"
        />
      </div>
      <div className="card-body product-card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text description">{product.description}</p>
        <p className="card-text price">${product.price.toFixed(2)}</p>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
