import React from "react";
import { Product } from "../Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Rs.{product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
