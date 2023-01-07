import { ReactNode } from "react";
import styled from "styled-components/macro";

import { colors } from "../styles";

const StyledLink = styled.a({
  display: "inline-flex",
  color: colors.blue,
  ":hover": {
    color: colors.redDark,
    border: 0,
  },
});

export const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <StyledLink href={href}>{children}</StyledLink>
);
