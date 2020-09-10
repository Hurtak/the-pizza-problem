import * as React from "react";
import styled from "styled-components/macro";
import * as s from "../styles";

const SpacerComponent = styled.div(({ size, horizontal }: { size: number; horizontal: boolean }) => ({
  display: horizontal ? "inline-block" : "block",
  ...(horizontal === true && { width: s.grid(size) }),
  ...(horizontal === false && { height: s.grid(size) }),
}));

export const Spacer: React.FC<{
  size?: number;
  horizontal?: boolean;
}> = ({ size = 1, horizontal = false }) => {
  return <SpacerComponent size={size} horizontal={horizontal} />;
};
