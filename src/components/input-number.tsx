import * as React from "react";

export const InputNumber: React.FC<{
  value: string;
  min: number;
  max: number;
  step: number;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ value, min, max, step, onChange }) => (
  <input
    //
    type="number"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={onChange}
  />
);
