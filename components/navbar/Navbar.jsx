import "./navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../components/inmuebles/img/logo.png";

import { LOGIN } from "../../routes/path";
import { Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export const Navbar = () => {
  // const {user,token} = useContext(AuthContext);
  let user;
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <img className="logo-foto" src={logo} />
        </div>

        <div className="links">
          <ul>
            <li >Alquilar</li>
            <li >Contacto</li>
            <li >Termino y condiciones</li>
            
            
         
          </ul>
        </div>
        <div className="icon">  
        <FaUserCircle className="Icon-login"/>

        <Link to={LOGIN} className="loginButon" style={{}}> Login / Register</Link>
        </div>
        {/* { user ? user.username : <div className="navItems">
            </div>
                    <Link to="/" style={{color:"inherit",textDecoration:"none"}}>    </Link>

            } */}
      </div>
    </div>
  );
};
