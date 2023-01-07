import { InputHTMLAttributes } from "react";
import styled from "styled-components/macro";

import * as s from "../styles";

const StyledInput = styled.input((props: { error: boolean }) => ({
  width: "100%",
  ":focus": {
    border: `${s.size(1)} solid ${s.colors.blue}`,
  },

  ...(props.error && {
    border: `${s.size(1)} solid ${s.colors.red}`,
    boxShadow: `0 0 0 ${s.size(1)} ${s.colors.red}`,
    ":focus": {
      border: `${s.size(1)} solid ${s.colors.red}`,
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
