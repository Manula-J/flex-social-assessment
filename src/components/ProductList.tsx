import React from "react";
import { Product } from "../Product";
import ProductCard from "./ProductCard";

interface ProductCardProps {
  products: Product[];
}

const ProductList: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mb-3 px-4">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
