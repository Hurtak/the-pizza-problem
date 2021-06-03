import styled from "styled-components/macro";
import * as s from "../../styles";

export const Link = styled.a({
  display: "inline-flex",
  color: s.colors.blue1,
  ":hover": {
    color: s.colors.darkRed1,
    border: 0,
  },
});
