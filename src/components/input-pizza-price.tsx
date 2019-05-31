import React from "react";
import { InputNumber } from "./input-number";

export const InputPizzaPrice: React.FC<{
  value: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ value, onChange }) => (
  <InputNumber
    min={1}
    max={1000000}
    step={1}
    value={value}
    onChange={onChange}
  />
);
