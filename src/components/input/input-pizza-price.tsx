import * as React from "react";
import { model } from "../../app/app.model";
import { InputNumber } from "./input-number";

export const InputPizzaPrice: React.FC<{
  value: number;
  name: string;
  error?: string;

  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = (props) => (
  <React.Fragment>
    <label htmlFor={props.name}>Price</label>

    <InputNumber
      //
      {...props}
      id={props.name}
      min={model.pizzaPrice.min}
      max={model.pizzaPrice.max}
      step={1}
    />
  </React.Fragment>
);
