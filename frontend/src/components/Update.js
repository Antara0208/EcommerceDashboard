import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:8000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const UpdateProduct = async () => {
    let result = await fetch(`http://localhost:8000/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    navigate("/");
  };

  return (
    <div className="universal">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />

      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />

      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
      />
      <button className="appButton" type="button" onClick={UpdateProduct}>
        Update Product
      </button>
    </div>
  );
}

export default Update;
