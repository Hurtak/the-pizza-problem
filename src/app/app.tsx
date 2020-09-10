import React, { useReducer } from "react";
import { stateReducer, initialState } from "../state/state";
import { InputPizzaDiameter, InputPizzaPrice, Layout, Text, Spacer, Table, TableRow, TableCell } from "../components";

const getPricePer1Money = (diameter: number, price: number) => (Math.PI * (diameter / 2) ** 2) / price;

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const pricePer1MoneyPizza1 = getPricePer1Money(Number(state.pizza1Diameter), Number(state.pizza1Price));
  const pricePer1MoneyPizza2 = getPricePer1Money(Number(state.pizza2Diameter), Number(state.pizza2Price));

  const percentage = (1 - pricePer1MoneyPizza1 / pricePer1MoneyPizza2) * 100;

  return (
    <Layout>
      <Text type="title">Pizza man</Text>
      <Spacer size={2} />
      <Text type="paragraph">Pizza pizza pizza pizza</Text>

      <Table headColumnsText={["Diameter", "Price", "%"]}>
        <TableRow>
          <TableCell>
            <InputPizzaDiameter
              value={state.pizza1Diameter}
              onChange={(e) =>
                dispatch({
                  type: "SET_PIZZA_1_DIAMETER",
                  data: e.target.value,
                })
              }
            />{" "}
            cm
          </TableCell>
          <TableCell>
            <InputPizzaPrice
              value={state.pizza1Price}
              onChange={(e) =>
                dispatch({
                  type: "SET_PIZZA_1_PRICE",
                  data: e.target.value,
                })
              }
            />{" "}
            moneyz
          </TableCell>
          <TableCell>
            <span style={{ color: percentage < 0 ? "green" : "red" }}>
              {Math.abs(percentage).toFixed(2)}% {percentage < 0 ? <>less expensive</> : <>more expensive</>} per cm
              <sup>2</sup> of pizza
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <InputPizzaDiameter
              value={state.pizza2Diameter}
              onChange={(e) =>
                dispatch({
                  type: "SET_PIZZA_2_DIAMETER",
                  data: e.target.value,
                })
              }
            />{" "}
            cm
          </TableCell>
          <TableCell>
            <InputPizzaPrice
              value={state.pizza2Price}
              onChange={(e) =>
                dispatch({
                  type: "SET_PIZZA_2_PRICE",
                  data: e.target.value,
                })
              }
            />{" "}
            moneyz
          </TableCell>
          <TableCell>
            <span style={{ color: percentage > 0 ? "green" : "red" }}>
              {Math.abs(percentage).toFixed(2)}% {percentage > 0 ? <>less expensive</> : <>more expensive</>} per cm
              <sup>2</sup> of pizza
            </span>
          </TableCell>
        </TableRow>
      </Table>
    </Layout>
  );
};
