import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })

  const collectData= async (e)=>{
    e.preventDefault();
    let result = await fetch("http://localhost:8000/register",{
      method : "POST",
      body : JSON.stringify({name,email,password}),
      headers :  {
        "content-type" : "application/json"
      }
    });

    result = await result.json();

    localStorage.setItem("user",JSON.stringify(result))

    navigate('/');
  }

  return (
    <div className="signItems">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="appButton" type="button" onClick={collectData}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
