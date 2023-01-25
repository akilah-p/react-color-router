import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Header() {
  const { red, green, blue } = useParams();
  return (
    
    <ul className="header" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      <li className="red"> <NavLink to="/rbg/255/0/0">Red{red}</NavLink></li>
      <li className="green"> <NavLink to="/rbg/0/255/0">Green{green}</NavLink></li>
      <li className="blue"><NavLink to="/rbg/0/0/255">Blue{blue}</NavLink></li>
    </ul>
  );
}
