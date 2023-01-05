import { InputHTMLAttributes } from "react";
import { model } from "../../app/app.model";
import { InputNumber } from "./input-number";

export const InputPizzaDiameter = (props: {
  value: number;
  name: string;
  error?: string;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}) => (
  <>
    <label htmlFor={props.name}>Diameter</label>

    <InputNumber
      //
      {...props}
      id={props.name}
      min={model.pizzaDiameter.min}
      max={model.pizzaDiameter.max}
      step={1}
    />
  </>
);
