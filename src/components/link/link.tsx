import styled from "styled-components/macro";
import * as s from "../../styles";

export const Link = styled.a({
  display: "inline-flex",
  color: s.colors.blue,
  ":hover": {
    color: s.colors.redDark,
    border: 0,
  },
});
