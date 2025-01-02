import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Home from ".//Home";
import Ganancia from "./pages/Ganancia";
import Precio from "./pages/Precio";
import Descuento from "./pages/Descuento";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Ganancia" element={<Ganancia />} />
        <Route path="/pages/Precio" element={<Precio />} />
        <Route path="/pages/Descuento" element={<Descuento />} />


      </Routes>
    </Router>
  );
};

export default App;
