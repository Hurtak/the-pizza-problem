import * as React from "react";
import { model } from "../../app/app.model";
import { InputNumber } from "./input-number";

export const InputPizzaPrice: React.FC<{
  value: number;
  name: string;
  error?: string;

  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = (props) => (
  <label>
    Price{" "}
    <InputNumber
      //
      {...props}
      min={model.pizzaPrice.min}
      max={model.pizzaPrice.max}
      step={1}
    />
  </label>
);
