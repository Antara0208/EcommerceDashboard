import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const submitHandle = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "json" },
      body: JSON.stringify(user),
    });
  };

  const inputData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="body">
        <div className="center">
          <h1>Signp</h1>
          <form method="post">
            <div className="txt_field">
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                required
                autoComplete="off"
                onChange={inputData}
              />
              <span></span>
              <label htmlFor="name">Username</label>
            </div>
            <div className="txt_field">
              <input
                type="text"
                name="email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={inputData}
              />
              <span></span>
              <label htmlFor="name">Email</label>
            </div>
            <div className="txt_field">
              <input
                type="number"
                name="phone"
                id="phone"
                value={user.phone}
                required
                autoComplete="off"
                onChange={inputData}
              />
              <span></span>
              <label htmlFor="name">Phone</label>
            </div>
            <div className="txt_field">
              <input
                type="text"
                name="work"
                id="work"
                value={user.work}
                required
                autoComplete="off"
                onChange={inputData}
              />
              <span></span>
              <label htmlFor="name">Profession</label>
            </div>
            <div className="txt_field">
              <input
                type="text"
                name="password"
                id="password"
                value={user.password}
                required
                autoComplete="off"
                onChange={inputData}
              />
              <span></span>
              <label htmlFor="name">Password</label>
            </div>
            <div className="txt_field">
              <input
                type="text"
                name="cpassword"
                id="cpasssword"
                value={user.cpassword}
                required
                autoComplete="off"
                onChange={inputData}
              />
              <span></span>
              <label htmlFor="name">Confirm Password</label>
            </div>
            <button
              type="submit"
              value="signup"
              name="signup"
              onClick={submitHandle}
            >
              SignUp
            </button>
            <div className="login">
              Already registered?
              <a href="/login">login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

// value attribute missing
