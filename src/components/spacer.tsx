import * as React from "react";
import styled from "styled-components/macro";

const SpacerStyled = styled.div<{
  spacerSize: number;
}>(({ spacerSize }) => ({
  display: "block",
  width: "100%",
  height: spacerSize * 8 + "px",
}));

export const Spacer: React.FC<{ size: number }> = ({ size }) => <SpacerStyled spacerSize={size} />;
