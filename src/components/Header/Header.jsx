import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {

  return (
    <header className='header'>
      
        <NavLink to={"/"}> <img src="f1Logo.png" width='100px' alt="" /> </NavLink> 
        <ul>
          <NavLink to={"/"}> <li>  Home  </li> </NavLink>
          <NavLink to={"/pilotos"}> <li>  Pilotos  </li> </NavLink>
          <NavLink to={"/equipes"}> <li>  Construtores  </li> </NavLink>
          <NavLink to={"/calendario"}> <li>  Calendario  </li> </NavLink>
        </ul>
    </header>
  );
}

export default Header;
