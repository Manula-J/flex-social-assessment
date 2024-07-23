import React from "react";
import { Product } from "../Product";
import ProductCard from "./ProductCard";

interface ProductCardProps {
  products: Product[];
}

const ProductList: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
