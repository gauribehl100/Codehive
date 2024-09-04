import "./App.css";
import {Route, Router, Routes, useNavigate } from "react-router-dom";
import Hero from "./Pages/Hero";
// import OpenRoute from "./components/core/Auth/OpenRoute"
  import Login from "./Pages/Login";
  import Template from "./Components/Core/Auth/Template";
// import Signup from "./Pages/Signup"
import { useDispatch, useSelector } from "react-redux";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Core/Common/Navbar";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Catalog from "./Pages/Catalog";
import Dashboard from "./Pages/Dashboard";
import MyProfile from "./Components/Core/Dashboard/MyProfile";
import Footer from "./Components/Core/Common/Footer";

function App() {
  return (
  
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="catalog" element={<Catalog/>}/>
    
     
    </Routes>
   

    </div>
  );
}

export default App;

