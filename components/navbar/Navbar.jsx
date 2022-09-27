import "./navbar.css";
import {Link} from "react-router-dom";
import React from 'react';
import logo from '../../components/inmuebles/img/logo.png'

export const Navbar = () => {
 // const {user,token} = useContext(AuthContext);
 let user ;
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <img src={logo}/>
          </Link>
            <div className="links">
                <ul>
                    <li className="fListItem">Alquilar</li>
                    <li className="fListItem">Contacto</li>
                    <li className="fListItem">Termino y condiciones</li>
                </ul>
            </div>
           { user ? user.username : <div className="navItems">
                <button className="navButton">Login</button>
            </div>
            }
        </div>
    </div>
  )
}
