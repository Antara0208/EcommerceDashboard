import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const clearConsole = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQ0YIktARRYmNGeZgSAPELyhYtp5IEnBZwnGvOYkgxdbd59ky86eN5VGBiSCIByPQuk0&usqp=CAU" alt="logo" />
    {/* <img className="logo" src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="logo" /> */}
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
          <Link to="/signup" onClick={clearConsole}>
            LogOut <span>{JSON.parse(auth).name}</span>
          </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
