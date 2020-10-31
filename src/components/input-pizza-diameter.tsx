import * as React from "react";
import { model } from "../app/model";
import { InputNumber } from "./input-number";

export const InputPizzaDiameter: React.FC<{
  value: number;
  name: string;
  error?: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = (props) => (
  <label>
    Diameter{" "}
    <InputNumber
      //
      {...props}
      min={model.pizzaDiameter.min}
      max={model.pizzaDiameter.max}
      step={1}
    />
  </label>
);
