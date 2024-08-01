import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/AddProduct.css";

const AddProduct: React.FC = () => {
  const [id, setId] = useState<number | string>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>();
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      id === null ||
      name === "" ||
      price === null ||
      description === "" ||
      imageUrl === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl,
      });
      setId("");
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <form className="form-container">
        <h2 className="mb-4">Add an Item</h2>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Id Number of the Item
          </label>
          <input
            type="number"
            className="form-control"
            id="productId"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Name of the Item
          </label>
          <input
            type="email"
            className="form-control"
            id="productName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price of the Item
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImageUrl" className="form-label">
            Image Link
          </label>
          <input
            type="text"
            className="form-control"
            id="productImageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <input
          className="btn btn-primary btn-submit"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};

export default AddProduct;
