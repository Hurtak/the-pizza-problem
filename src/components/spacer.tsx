import * as React from "react";
import styled from "styled-components/macro";
import * as s from "../styles";

type Orientation = "vertical" | "horizontal";

const SpacerStyled = styled.div<{
  spacerSize: number;
  orientation: Orientation;
}>(({ spacerSize, orientation }) => ({
  display: "block",
  width: orientation === "vertical" ? "100%" : s.grid(spacerSize),
  height: orientation === "vertical" ? s.grid(spacerSize) : "100%",
}));

export const Spacer: React.FC<{ size: number; orientation?: Orientation }> = ({ size, orientation = "vertical" }) => (
  <SpacerStyled spacerSize={size} orientation={orientation} />
);
