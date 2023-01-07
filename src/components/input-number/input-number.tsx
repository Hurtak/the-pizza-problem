import { InputHTMLAttributes } from "react";
import styled from "styled-components/macro";

import { colors, size } from "../styles";

const StyledInput = styled.input((props: { error: boolean }) => ({
  width: "100%",
  ":focus": {
    border: `${size(1)} solid ${colors.blue}`,
  },

  ...(props.error && {
    border: `${size(1)} solid ${colors.red}`,
    boxShadow: `0 0 0 ${size(1)} ${colors.red}`,
    ":focus": {
      border: `${size(1)} solid ${colors.red}`,
    },
  }),
}));

export const InputNumber = ({
  error,
  ...restProps
}: {
  id?: string;
  value: number;
  name: string;
  error?: string;
  min: number;
  max: number;
  step: number;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}) => (
  <StyledInput
    //
    type="number"
    error={Boolean(error)}
    {...restProps}
  />
);
