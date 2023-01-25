import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Header() {
  const { r, g, b } = useParams();
  return (
    
    <ul className="header" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <li className="purple"> <NavLink to="/rbg/255/255/0">YelloW{r}</NavLink></li>
      <li className=""> <NavLink to="/rbg/255/0/0">Red{g}</NavLink></li>
      <li className="blue"><NavLink to="/rbg/0/0/255">Blue{b}</NavLink></li>
    </ul>
  );
}
