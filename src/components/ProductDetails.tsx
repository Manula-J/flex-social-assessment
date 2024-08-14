import React from "react";

export default function ProductDetails() {
  return (
    <div className="container bg-white">
      <div className="row">
        <div className="col-4">
          <div className="container-sm">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flex-social-assessment.appspot.com/o/61Ulnab4eEL._AC_UY218_.jpg?alt=media&token=670e9c7f-fb0f-4fc7-bf45-8b0d45dbdbcf"
              alt="Product"
              className="w-100 h-100 object-fit-scale rounded"
            />
          </div>
        </div>
        <div className="col-8 p-4">
          <h2 className="title">Test</h2>
          <div>Price</div>
          <div>Description</div>
          <div className="quantity-selector d-inline-flex">
            <button>-</button>
            <div> 0 </div>
            <button>+</button>
          </div>
          <div>
            <button d-inline>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
