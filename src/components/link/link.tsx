import styled from "styled-components/macro";
import * as s from "../../styles";

export const Link = styled.a({
  display: "inline-flex",
  color: s.colors.blue1,
  ":hover": {
    color: s.colors.darkRed1,
    // TODO: will not be needed once sakura is gone
    border: 0,
  },
});
