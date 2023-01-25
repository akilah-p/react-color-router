import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';
import Header from '../Header/Header';

export default function Main() {
  const { r, g, b } = useParams();
  return (
    <>
      <Header />
      <div className="main" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
        <h2>
          RGB({r}, {g}, {b})
        </h2>
      </div>
    </>
  );
}
