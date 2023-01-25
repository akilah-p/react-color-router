import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { r, g, b } = useParams();
  return (
    <>
      <div className="main" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
        <span className="rgb"><p>RGB</p>({r}, {g}, {b})</span>
      </div>
    </>
  );
}
