import { ReactNode } from "react";
import styled from "styled-components/macro";

import * as s from "../styles";

const StyledLink = styled.a({
  display: "inline-flex",
  color: s.colors.blue,
  ":hover": {
    color: s.colors.redDark,
    border: 0,
  },
});

export const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <StyledLink href={href}>{children}</StyledLink>
);
