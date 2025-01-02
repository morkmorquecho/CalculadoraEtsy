import React from "react";
import { useNavigate } from "react-router-dom";
import ".//App.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  

  return (
    <div className="app">
      <header className="header-container">
        <div className="logo-container">
          <img src="/asset/img/etsy.png" alt="Etsy Logo" className="logo" />
          <p className="site-description">
            Descubre herramientas para calcular ganancias, precios y descuentos, optimizando tus ventas en Etsy.
          </p>
        </div>
      </header>
      <main className="options-container">
      <div className="option-card" onClick={() => handleNavigate("pages/Ganancia")}>
          <img src="/asset/img/ganancia.png" alt="Calcular Ganancia" className="icon" />
          <p>Calcular ganancia</p>
        </div>
        <div className="option-card" onClick={() => handleNavigate("pages/Precio")}>
          <img src="/asset/img/presupuesto.png" alt="Precio adecuado" className="icon" />
          <p>Calcular Precio de Venta</p>
        </div>
        <div className="option-card" onClick={() => handleNavigate("pages/Descuento")}>
          <img src="../asset/img/descuento.png" alt="Ganancia con descuento" className="icon" />
          <p>Ganancia con descuento incluido</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
