import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Edit from './components/pages/Edit';

function App() {
  return (
    <div 
      style={{
        minHeight: "100vh", // Ensure the gradient covers the full viewport height
        background: "linear-gradient(to right, #6a11cb, #2575fc)", // Attractive gradient color
        color: "#fff", // Adjust text color to ensure visibility
        padding: "20px"
      }}
      className="container"
    >
      <h1 style={{
        textAlign: "center", 
        marginTop: "40px", 
        marginBottom: "30px",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Add shadow for enhanced text visibility
      }}>
        Meme Generator
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
