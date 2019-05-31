import React from "react";
import { InputNumber } from "./input-number";

export const InputPizzaDiameter: React.FC<{
  value: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ value, onChange }) => (
  <InputNumber min={10} max={100} step={1} value={value} onChange={onChange} />
);
