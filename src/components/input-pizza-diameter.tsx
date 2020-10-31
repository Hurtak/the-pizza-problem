import * as React from "react";
import { InputNumber } from "./input-number";

export const InputPizzaDiameter: React.FC<{
  value: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ value, onChange }) => (
  <label>
    Diameter{" "}
    <InputNumber
      //
      min={10}
      max={100}
      step={1}
      value={value}
      onChange={onChange}
    />
  </label>
);
