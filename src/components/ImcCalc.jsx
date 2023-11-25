import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();

    setHeight("");
    setWeight("");
  };

  return (
    <div id="calcContainer">
      <h2>Calculadora de IMC</h2>
      <form id="imcForm">
        <div className="formInputs">
          <div className="formControl">
            <label htmlFor="height">Altura: </label>
            <input
            min={0}
              type="number"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <div className="formControl">
            <label htmlFor="weight">Peso: </label>
            <input
            min={0}
              type="number"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
        </div>
        <div className="actionControl">
          <Button
            id="calcBtn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clearBtn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
