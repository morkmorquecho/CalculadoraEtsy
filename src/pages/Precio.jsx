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

    const total = roundToTwo(numericPrice + numericShippingCost);

    const Tarifa_por_procesamiento = roundToTwo((total / (1 - 0.045)) - total);
    const Tarifa_por_IVA = roundToTwo((total / (1 - 0.01)) - total);
    const Tarifa_por_transaccion = roundToTwo((total / (1 - 0.065)) - total);

    const Tarifa_por_Fija_transaccion = 10; // Valor fijo, no necesita redondeo
    const Tarifa_por_publicacion = 40;      // Valor fijo, no necesita redondeo
    const Tarifa_por_deposito = 40;         // Valor fijo, no necesita redondeo

    const Tarifas = roundToTwo(
      Tarifa_por_procesamiento +
      Tarifa_por_IVA + 
      Tarifa_por_transaccion +
      Tarifa_por_Fija_transaccion +
      Tarifa_por_publicacion +
      Tarifa_por_deposito
    );

    const IVA = roundToTwo((Tarifas / (1 - 0.16)) - Tarifas);

    const profit = roundToTwo(total + Tarifas + IVA);
    const Newprofit = (profit * .009542) + profit;

    setTotalProfit(Newprofit.toFixed(2));
  };

  return (
    <div className="form-container">
      <h1>Calculadora de Precio de venta</h1>
      <form>
        <label>
          Ganancia neta:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Ingresa la ganancia que consideras adecuada"
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
        <p>Precio de venta: ${totalProfit}</p>
      </div>
    </div>
  );
};

export default Ganancia;
