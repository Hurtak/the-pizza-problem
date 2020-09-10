import * as React from "react";
import styled from "styled-components/macro";

const Input = styled.input({
  padding: "0.5em",
});

export const InputNumber: React.FC<{
  value: string;
  min: number;
  max: number;
  step: number;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ value, min, max, step, onChange }) => (
  <Input
    //
    type="number"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={onChange}
  />
);
