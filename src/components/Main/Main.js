import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <>
      <div className="main" style={{ background: `rgb(${red}, ${green}, ${blue})` }}>
        <span className="rgb"><p>RGB</p>({red}, {green}, {blue})</span>
      </div>
    </>
  );
}
