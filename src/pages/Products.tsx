import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

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
        <h1>Product List</h1>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Products;
