import React from "react";
import ProductList from "./components/ProductList";
import { Product } from "./Product";
import "./App.css";

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    description: "Description for product 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    description: "Description for product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
