import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <ul className="header">
     <li className="red"> <NavLink to="/rbg/255/0/0">Red</NavLink></li>
     <li className="green"> <NavLink to="/rbg/0/255/0">Green</NavLink></li>
      <li className="blue"><NavLink to="/rbg/0/0/255">Blue</NavLink></li>
    </ul>
  );
}
