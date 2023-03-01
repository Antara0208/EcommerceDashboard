import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Signup() {

  const [userLogin, setUserLogin] = useState({
    email : "",
    password: ""
  });

  const loginHandler = async (e) =>{
    e.preventDefault();
    await fetch("http://localhost:8000/signin", {
      method: "POST",
      headers: { "Content-Type": "json"},
      body: JSON.stringify(userLogin),
    });
  };

  const loginOnchange = (e)=>{
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  


  return (
    <>
      <div className="body">
        <div className="center">
          <h1>Log In</h1>
          <form action="post">
            <div className="txt_field">
              <input
                type="text"
                name="email"
                id="email"
                value={userLogin.email}
                required
                autoComplete="off"
                onChange={loginOnchange}
              />
              <span></span>
              <label htmlFor="name">Email</label>
            </div>
            <div className="txt_field">
            <input
                type="text"
                name="password"
                id="password"
                value={userLogin.password}
                required
                autoComplete="off"
                onChange={loginOnchange}
              />
              <span></span>
              <label htmlFor="name">Password</label>
            </div>
            <button
              type="submit"
              value="login"
              name="login"
              onClick={loginHandler}
            >
              Login
            </button>
            <div className="signup">
              New registration?
              <a href="/signup">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
