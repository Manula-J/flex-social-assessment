import React from "react";
import ProductList from "../components/ProductList";
import { Product } from "../Product";
import Products from "./Products";
import ProductDetails from "../components/ProductDetails";

export default function productInfo() {
  return (
    <div className="container">
      <ProductDetails />
      {/* <ProductList products={Products} /> */}
    </div>
  );
}
