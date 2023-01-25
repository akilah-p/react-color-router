import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Header() {
  const { yellow, red, blue } = useParams();
  return (
    
    <ul className="header">
      <li className="yellow"> <NavLink to="/rgb/255/255/0">Yellow{yellow}</NavLink></li>
      <li className="red"> <NavLink to="/rgb/255/0/0">Red{red}</NavLink></li>
      <li className="blue"><NavLink to="/rgb/0/0/255">Blue{blue}</NavLink></li>
    </ul>
  );
}
