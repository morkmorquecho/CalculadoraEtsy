import React, { useState } from "react";
import "./Ganancia.css";


const Descuento = () => {
  const [price, setPrice] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [totalProfit, setTotalProfit] = useState("");
  const [marginPercentage, setMarginPercentage] = useState("5");

  const handleCalculate = () => {
    const numericPrice = parseFloat(price) || 0;
    const numericShippingCost = parseFloat(shippingCost) || 0;
    const roundToTwo = (num) => Math.round(num * 100) / 100;

    const descuento = roundToTwo(numericPrice * marginPercentage);

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

    const profit = roundToTwo(numericPrice - Tarifas - IVA - numericShippingCost - descuento);

    setTotalProfit(profit.toFixed(2));
  };

  return (
    <div className="form-container">
    <form>
    <h1>Calculadora de ganancia con descuento</h1>
    <label>
      Precio de la pieza:
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Ingresa el precio incluido el envio"
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
  
    <label>
      Porcentaje de descuento:
      <select
        value={marginPercentage}
        onChange={(e) => setMarginPercentage(e.target.value)}
      >
        <option value=".05">5%</option>
        <option value=".10">10%</option>
        <option value=".20">20%</option>
        <option value=".25">25%</option>
        <option value=".35">35%</option>
        <option value=".50">50%</option>
      </select>
    </label>
  
    <button type="button" onClick={handleCalculate}>
      Calcular Ganancia
    </button>
  </form>
      <div className="result-box">
        <p>Ganancia: ${totalProfit}</p>
      </div>
  </div>

  );
};

export default Descuento;
