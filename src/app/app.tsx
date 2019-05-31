import React, { useReducer } from "react";
import { stateReducer, initialState } from "../state/state";
import { Title, InputPizzaDiameter, InputPizzaPrice } from "../components";
import "./app.css";

function getPricePer1Money(diameter: number, price: number) {
  return (Math.PI * (diameter / 2) ** 2) / price;
}

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const pricePer1MoneyPizza1 = getPricePer1Money(
    Number(state.pizza1Diameter),
    Number(state.pizza1Price)
  );
  const pricePer1MoneyPizza2 = getPricePer1Money(
    Number(state.pizza2Diameter),
    Number(state.pizza2Price)
  );

  const percentage = (1 - pricePer1MoneyPizza1 / pricePer1MoneyPizza2) * 100;

  return (
    <div className="App">
      <Title>Pizza man</Title>
      <p>Pizza pizza pizza man</p>

      <table>
        <tr>
          <td>Diameter</td>
          <td>Price</td>
          <td>Price cm2</td>
          <td>%</td>
        </tr>
        <tr>
          <td>
            <InputPizzaDiameter
              value={state.pizza1Diameter}
              onChange={e =>
                dispatch({
                  type: "SET_PIZZA_1_DIAMETER",
                  data: e.target.value
                })
              }
            />
            cm
          </td>
          <td>
            <InputPizzaPrice
              value={state.pizza1Price}
              onChange={e =>
                dispatch({
                  type: "SET_PIZZA_1_PRICE",
                  data: e.target.value
                })
              }
            />
            moneyz
          </td>
          <td>1 moneyz for {pricePer1MoneyPizza1.toFixed(2)} cm2</td>
          <td
            style={{
              color: percentage < 0 ? "green" : "red"
            }}
          >
            {Math.abs(percentage).toFixed(2)}%{" "}
            {percentage < 0 ? <>less expensive</> : <>more expensive</>}
          </td>
        </tr>
        <tr>
          <td>
            <InputPizzaDiameter
              value={state.pizza2Diameter}
              onChange={e =>
                dispatch({
                  type: "SET_PIZZA_2_DIAMETER",
                  data: e.target.value
                })
              }
            />
            cm
          </td>
          <td>
            <InputPizzaPrice
              value={state.pizza2Price}
              onChange={e =>
                dispatch({
                  type: "SET_PIZZA_2_PRICE",
                  data: e.target.value
                })
              }
            />
            moneyz
          </td>
          <td>1 moneyz for {pricePer1MoneyPizza2.toFixed(2)} cm2</td>
          <td
            style={{
              color: percentage > 0 ? "green" : "red"
            }}
          >
            {Math.abs(percentage).toFixed(2)}%{" "}
            {percentage > 0 ? <>less expensive</> : <>more expensive</>}
          </td>
        </tr>
      </table>
    </div>
  );
};
