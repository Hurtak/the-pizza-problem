import styled from "styled-components/macro";

import * as s from "../../styles";

type Orientation = "vertical" | "horizontal";

const SpacerStyled = styled.span<{
  spacerSize: number;
  orientation: Orientation;
}>(({ spacerSize, orientation }) => ({
  display: "block",
  width: orientation === "vertical" ? "100%" : s.grid(spacerSize),
  height: orientation === "vertical" ? s.grid(spacerSize) : "100%",
}));

export const Spacer = ({ size, orientation = "vertical" }: { size: number; orientation?: Orientation }) => (
  <SpacerStyled spacerSize={size} orientation={orientation} />
);
