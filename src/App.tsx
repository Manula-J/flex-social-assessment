import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { Product } from "./Product";
import ProductList from "./components/ProductList";
import "./App.css";

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    description: "Description product 1",
    imageUrl:
      "https://static-01.daraz.lk/p/2e9f7812fa123b2a2924282f77f5ab9f.jpg_300x0q75.webp",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    description: "Description for product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 2",
    price: 39.99,
    description: "Description for product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 2",
    price: 39.99,
    description: "Description for product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    //Subscribe to Firestore collection
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsData: Product[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const product: Product = {
          id: data.id,
          name: data.name,
          price: data.price,
          description: data.description,
          imageUrl: data.imageUrl,
        };
        productsData.push(product);
      });
      setProducts(productsData);
    });

    //Cleanup subscription on unmount
    return () => unsubscribe();
  });

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
