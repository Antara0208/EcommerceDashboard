import "./App.css";
import Nav from "./components/Nav";
// import Footer from './components/Footer';
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Update from "./components/Update.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/update/:id" element={<Update/>}></Route>
            <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
            <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
