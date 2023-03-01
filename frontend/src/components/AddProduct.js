import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError] = useState(false);

  const AddHandler = async () => {

    if (!name || !price ||!company ||!category){
      setError(true);
      return false;
    }else{
          const userId = JSON.parse(localStorage.getItem("user"))._id;
      
          let result = await fetch("http://localhost:8000/add-product", {
            method: "POST",
            body: JSON.stringify({ name, price, category, userId, company }),
            headers: {
              "content-type": "application/json",
            },
          });
      
          result = await result.json();
    }
  };

  return (
    <div className="universal">
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      {error && !name && <span className="invalid-input">Enter Valid Name</span>}
      <input
        className="inputBox"
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      {error && !price && <span className="invalid-input">Enter Valid Price</span>}
      <input
        className="inputBox"
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
        {error && !category && <span className="invalid-input">Enter Valid Category</span>}
      <input
        className="inputBox"
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
      />
        {error && !company && <span className="invalid-input">Enter Valid Company</span>}
      <button className="appButton" type="button" onClick={AddHandler}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
