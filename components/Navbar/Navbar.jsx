import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from "./assets/logo.png"
const  Navbar = () => {
    return(
    <div id="Navbar">
          <ul className="nav-left">
            <li id="navLogo">
                 <Link to={"/"} className="nav-link" id="nav-logo-link">
                 <div className="logo-container">
              <img src={Logo} width="22px" alt="Logo" />
              <span className="logo-text"> &nbsp;LeetCode</span>
            </div>
                </Link> 
            </li>
            <li id="navExplore">
                 <Link to={"/"} className="nav-link" id="explore-link">
                     <p>Home</p>
                </Link> 
            </li>
            <li id="navExplore">
                 <Link to={"/problems"} className="nav-link" id="problems-link">
                     <p>Problems</p>
                </Link> 
            </li>
         </ul> 

         <ul className="nav-right">
         <li id="navPremium">
            <Link to={"/"} className="nav-link" id="premium-link">
             <p>Premium</p>
            </Link>
         </li>
         <li id="navSignup">
            <Link to={"/Signup"} className="nav-link" id="Signup-link">
             <p>SignUP</p>
            </Link>
         </li> 
          <li id="navSignin">
            <Link to={"/Signin"}className="nav-link" id="Signin-link">
             <p>SignIN</p>
            </Link>
          </li>
         </ul>
    </div>
    );
}
export default Navbar;