import React from "react";
import ProductDetails from "../components/ProductDetails";

export default function productInfo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <ProductDetails />
        </div>
        <div className="col-3">test2</div>
        {/* <ProductList products={Products} /> */}
      </div>
    </div>
  );
}
