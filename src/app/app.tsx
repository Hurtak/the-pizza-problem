import React, { useReducer } from "react";
import { stateReducer, initialState } from "../state/state";
import { InputPizzaDiameter, InputPizzaPrice } from "../components";

const getPricePer1Money = (diameter: number, price: number) => (Math.PI * (diameter / 2) ** 2) / price;

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const pricePer1MoneyPizza1 = getPricePer1Money(Number(state.pizza1Diameter), Number(state.pizza1Price));
  const pricePer1MoneyPizza2 = getPricePer1Money(Number(state.pizza2Diameter), Number(state.pizza2Price));

  const percentage = (1 - pricePer1MoneyPizza1 / pricePer1MoneyPizza2) * 100;

  return (
    <>
      <h1>Pizza man</h1>
      <p>Pizza pizza pizza pizza</p>

      <hr />

      <h2>Pizza smaller</h2>
      <InputPizzaDiameter
        value={state.pizza1Diameter}
        onChange={(e) =>
          dispatch({
            type: "SET_PIZZA_1_DIAMETER",
            data: e.target.value,
          })
        }
      />
      <InputPizzaPrice
        value={state.pizza1Price}
        onChange={(e) =>
          dispatch({
            type: "SET_PIZZA_1_PRICE",
            data: e.target.value,
          })
        }
      />
      <span style={{ color: percentage < 0 ? "green" : "red" }}>
        {Math.abs(percentage).toFixed(2)}% {percentage < 0 ? <>less expensive</> : <>more expensive</>} per cm
        <sup>2</sup> of pizza
      </span>

      <h2>Pizza bigger</h2>
      <InputPizzaDiameter
        value={state.pizza2Diameter}
        onChange={(e) =>
          dispatch({
            type: "SET_PIZZA_2_DIAMETER",
            data: e.target.value,
          })
        }
      />
      <InputPizzaPrice
        value={state.pizza2Price}
        onChange={(e) =>
          dispatch({
            type: "SET_PIZZA_2_PRICE",
            data: e.target.value,
          })
        }
      />
      <span style={{ color: percentage > 0 ? "green" : "red" }}>
        {Math.abs(percentage).toFixed(2)}% {percentage > 0 ? <>less expensive</> : <>more expensive</>} per cm
        <sup>2</sup> of pizza
      </span>

      <h2>Extras (box, delivery...)</h2>
      <InputPizzaPrice value={state.pizza2Price} onChange={(e) => {}} />
      <hr />

      <p>made by @hurtak github twitter</p>
    </>
  );
};
