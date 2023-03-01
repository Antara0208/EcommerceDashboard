import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8000/productlist");
    result = await result.json();
    setProducts(result);
  };

  const deleteData = async (_id) => {
    let result = await fetch(`http://localhost:8000/product/${_id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getProducts();
      alert("product deleted");
    }
  };

  const searchHandler = async (event)=>{
    let key = event.target.value;
    if(key){
      let result = await fetch(`http://localhost:8000/search/${key}`);
      result = await result.json();
      if(result){
        setProducts(result);
      }
    }else{
      getProducts();
    }
  }

  return (
    <div className="product_list">
      <h1>Product List</h1>
      <input type="text" className="SearchBox" onChange={searchHandler} placeholder="Search Product" />
      <ul className="product-ul">
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

{
      products.length > 0 ?
      products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button
              type="button"
              className="productButton"
              onClick={() => deleteData(item._id)}
            >
              Delete
            </button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>
      )) : 
      <h1>
        No Result Found
      </h1>
}
    </div>
  );
}

export default ProductList;
