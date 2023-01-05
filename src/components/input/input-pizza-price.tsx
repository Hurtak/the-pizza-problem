import { InputHTMLAttributes } from "react";
import { model } from "../../app/app.model";
import { InputNumber } from "./input-number";

export const InputPizzaPrice = (props: {
  value: number;
  name: string;
  error?: string;

  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}) => (
  <>
    <label htmlFor={props.name}>Price</label>

    <InputNumber
      //
      {...props}
      id={props.name}
      min={model.pizzaPrice.min}
      max={model.pizzaPrice.max}
      step={1}
    />
  </>
);
