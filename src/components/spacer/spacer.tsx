import styled from "styled-components/macro";

import { grid } from "../styles";

type Orientation = "vertical" | "horizontal";

const StyledSpacer = styled.span<{
  spacerSize: number;
  orientation: Orientation;
}>(({ spacerSize, orientation }) => ({
  display: "block",
  width: orientation === "vertical" ? "100%" : grid(spacerSize),
  height: orientation === "vertical" ? grid(spacerSize) : "100%",
}));

export const Spacer = ({ size, orientation = "vertical" }: { size: number; orientation?: Orientation }) => (
  <StyledSpacer spacerSize={size} orientation={orientation} />
);
