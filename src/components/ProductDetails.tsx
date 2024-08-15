import React, { useState } from "react";

export default function ProductDetails() {
  const [itemCount, setItemCount] = useState<number>(0);

  const minusItem = () => {
    if (itemCount !== 0) {
      setItemCount(itemCount - 1);
    }
  };

  const plusItem = () => {
    setItemCount(itemCount + 1);
  };

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
          <div className="title fs-2 mb-2">Test</div>
          <div className="price fs-4 font-monospace mb-2">LKR250.99</div>
          <div className="Description text-break mb-2">Description</div>
          <div className="quantity-selector d-inline-flex w-25 justify-content-between mt-2 mb-2">
            <button
              className="btn btn-primary rounded-circle p-0"
              onClick={() => minusItem()}
              style={{ width: "35px", height: "35px" }}
            >
              -
            </button>
            <div className="count mt-1">{itemCount}</div>
            <button
              className="btn btn-primary rounded-circle p-0"
              onClick={() => plusItem()}
              style={{ width: "35px", height: "35px" }}
            >
              +
            </button>
          </div>
          <div className="w-100 mt-3">
            <button className="d-inline btn btn-warning w-25 me-3">
              Buy Now
            </button>
            <button className="btn btn-secondary w-25">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
