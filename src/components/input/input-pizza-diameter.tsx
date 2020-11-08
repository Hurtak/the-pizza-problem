import * as React from "react";
import { model } from "../../app/app.model";
import { InputNumber } from "./input-number";

export const InputPizzaDiameter: React.FC<{
  value: number;
  name: string;
  error?: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = (props) => (
  <React.Fragment>
    <label htmlFor={props.name}>Diameter</label>

    <InputNumber
      //
      {...props}
      id={props.name}
      min={model.pizzaDiameter.min}
      max={model.pizzaDiameter.max}
      step={1}
    />
  </React.Fragment>
);
