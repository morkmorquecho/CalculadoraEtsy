import React, { useState } from "react";
import "./Ganancia.css";


const Ganancia = () => {
  const [price, setPrice] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [totalProfit, setTotalProfit] = useState("");

  const handleCalculate = () => {
    const numericPrice = parseFloat(price) || 0;
    const numericShippingCost = parseFloat(shippingCost) || 0;
    const roundToTwo = (num) => Math.round(num * 100) / 100;


    const Tarifa_por_transaccion =roundToTwo( numericPrice * 0.065);
    const Tarifa_por_procesamiento =roundToTwo(numericPrice * 0.045);
    const Tarifa_por_IVA = roundToTwo(numericPrice * 0.01);

    const Tarifa_por_Fija_transaccion = 10;
    const Tarifa_por_publicacion      = 40;
    const Tarifa_por_deposito         = 40;

    const Tarifas =roundToTwo(
      Tarifa_por_deposito +
      Tarifa_por_procesamiento +
      Tarifa_por_transaccion +
      Tarifa_por_IVA +
      Tarifa_por_Fija_transaccion+
      Tarifa_por_publicacion);

    const IVA = roundToTwo(Tarifas * 0.16);

    const profit = roundToTwo(numericPrice - Tarifas - IVA - numericShippingCost);
    
    setTotalProfit(profit.toFixed(2));
  };

  return (
    <div className="form-container">
      <h1>Calculadora de Ganancia</h1>
      <form>
        <label>
          Precio de la pieza:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ingresa el precio"
            required
          />
        </label>

        <label>
          Costo de envío:
          <input
            type="number"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
            placeholder="Ingresa el costo de envío"
            required
          />
        </label>

        <button type="button" onClick={handleCalculate}>
          Calcular Ganancia
        </button>
      </form>
      <div className="result-box">
        <p>Ganancia Total: ${totalProfit}</p>
      </div>
    </div>
  );
};

export default Ganancia;
