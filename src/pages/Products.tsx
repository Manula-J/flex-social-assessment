import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../Product";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 29.99,
//     description: "Description product 1",
//     imageUrl:
//       "https://static-01.daraz.lk/p/2e9f7812fa123b2a2924282f77f5ab9f.jpg_300x0q75.webp",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 39.99,
//     description: "Description for product 2",
//     imageUrl: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Product 2",
//     price: 39.99,
//     description: "Description for product 2",
//     imageUrl: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     name: "Product 2",
//     price: 39.99,
//     description: "Description for product 2",
//     imageUrl: "https://via.placeholder.com/150",
//   },
// ];

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
