import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet, NavLink } from "react-router-dom";
import "../App.css"

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            <h2>
              <span>Ant</span>ara
            </h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page"style={{ textDecoration: 'none' ,paddingLeft: 20,color : "black"}} to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" style={{ textDecoration: 'none',paddingLeft: 20 ,color : "black"}} to="/About">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " style={{ textDecoration: 'none' ,paddingLeft: 20 ,color : "black"}} to="/Contact">
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " style={{ textDecoration: 'none',paddingLeft: 20,color : "black" }} to="/login">
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" style={{ textDecoration: 'none',paddingLeft: 20 ,color : "black"}} to="/Signup">
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

          <Outlet />
    </>
  );
}

export default Navbar;
