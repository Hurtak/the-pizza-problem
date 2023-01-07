import { InputHTMLAttributes } from "react";

import { InputNumber } from "../../../components";

export const InputPizzaPrice = (props: {
  value: number;
  name: string;
  min: number;
  max: number;
  error?: string;

  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}) => (
  <>
    <label htmlFor={props.name}>Price</label>

    <InputNumber
      //
      {...props}
      id={props.name}
      min={props.min}
      max={props.max}
      step={1}
    />
  </>
);
