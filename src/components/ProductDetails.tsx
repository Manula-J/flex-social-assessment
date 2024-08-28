import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { DocumentSnapshot, getDocs, doc, getDoc } from "firebase/firestore";
import { Product } from "../Product";
import { error } from "console";

type Params = {
  productDoc: string;
};

export default function ProductDetails() {
  const { productDoc } = useParams<Params>();

  const [product, setProduct] = useState<Product | null>(null);
  const [itemCount, setItemCount] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productDoc) {
        try {
          const docRef = doc(db, "products", productDoc);
          const docSnap = (await getDoc(docRef)) as DocumentSnapshot<Product>;
          if (docSnap.exists()) {
            const productData = docSnap.data();
            setProduct(productData);
          } else {
            console.log("Error while retrieving product details");
          }
        } catch (error) {
          console.error("Error fetching document:");
        }
      }
    };

    fetchProduct();
  }, [productDoc]);

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
              src={product?.imageUrl}
              alt="Product"
              className="w-100 h-100 object-fit-scale rounded"
            />
          </div>
        </div>
        <div className="col-8 p-4">
          <div className="title fs-2 mb-2">{product?.name}</div>
          <div className="price fs-4 font-monospace mb-2">
            LKR{product?.price}
          </div>
          <div className="Description text-break mb-2">
            {product?.description}
          </div>
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
