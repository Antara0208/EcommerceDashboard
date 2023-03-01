import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const navigate = useNavigate();

useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/');
      }
})

const handleLogin =async (e)=>{
    e.preventDefault();
    let result = await fetch("http://localhost:8000/login",{
        method : "POST",
        body : JSON.stringify({email,password}),
        headers :  {
          "content-type" : "application/json"
        }
      });

    result = await result.json();

    if(result.name){
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/')
    }else{
        alert("Please enter correct details");
    }
}

  return (
    <div className='login'>
        <h1>LogIn</h1>
        <input className="inputBox" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input className="inputBox" type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password'/>
        <button className="appButton" onClick={handleLogin} type="button">
        Login
      </button>
    </div>
  )
}

export default Login