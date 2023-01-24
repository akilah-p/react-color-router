import React from 'react';
import { useParams } from 'react-router-dom';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <>
      <div className="main" style={{ height: '100vh', width:'100vw', background: `rgb(${red}, ${green}, ${blue})` }}>
        ({red}, {green}, {blue})
      </div>
    </>
  );
}
