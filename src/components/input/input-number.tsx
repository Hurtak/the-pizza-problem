import * as React from "react";

export const InputNumber: React.FC<{
  value: number;
  name: string;
  error?: string;
  min: number;
  max: number;
  step: number;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ error, ...restProps }) => (
  <input
    //
    type="number"
    className={error && "input-error"}
    {...restProps}
  />
);