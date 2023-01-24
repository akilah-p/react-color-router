import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/rbg/255/0/0">Red</NavLink>
      <NavLink to="/rbg/0/255/0">Green</NavLink>
      <NavLink to="/rbg/0/0/255">Blue</NavLink>
    </div>
  );
}
