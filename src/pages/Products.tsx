import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "../styles/Products.css";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList: Product[] = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Product),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="Products">
        <h1 className="d-flex justify-content-center">Product List</h1>
        <ProductList products={products} />
        <button type="button" className="btn btn-primary btn-add-product">
          <a className="nav-link" href="/add-product">
            +
          </a>
        </button>
      </div>
    </>
  );
};

export default Products;
