import React, { useReducer } from "react";
import "./styles.css";

type Actions =
  | {
      type: "SET_PIZZA_1_DIAMETER";
      data: string;
    }
  | {
      type: "SET_PIZZA_2_DIAMETER";
      data: string;
    }
  | {
      type: "SET_PIZZA_1_PRICE";
      data: string;
    }
  | {
      type: "SET_PIZZA_2_PRICE";
      data: string;
    };

type State = {
  pizza1Diameter: string;
  pizza2Diameter: string;

  pizza1Price: string;
  pizza2Price: string;
};

const initialState: State = {
  pizza1Diameter: "32",
  pizza2Diameter: "45",

  pizza1Price: "149",
  pizza2Price: "239"
};

function stateReducer(state: State, action: Actions): State {
  switch (action.type) {
    case "SET_PIZZA_1_DIAMETER":
      return {
        ...state,
        pizza1Diameter: action.data
      };

    case "SET_PIZZA_2_DIAMETER":
      return {
        ...state,
        pizza2Diameter: action.data
      };

    case "SET_PIZZA_1_PRICE":
      return {
        ...state,
        pizza1Price: action.data
      };

    case "SET_PIZZA_2_PRICE":
      return {
        ...state,
        pizza2Price: action.data
      };

    default:
      throw new Error("Unknown action");
  }
}

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
      <h1>Pizza man</h1>
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
            <input
              type="number"
              step={1}
              min={10}
              max={100}
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
            <input
              type="number"
              step={1}
              min={1}
              max={100000}
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
            <input
              type="number"
              step={1}
              min={10}
              max={100}
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
            <input
              type="number"
              step={1}
              min={10}
              max={100000}
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
