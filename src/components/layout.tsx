import styled from "styled-components/macro";
import * as s from "../styles";

export const Layout = styled.main({
  display: "flex",
  flexDirection: "column",
  padding: `${s.grid(6)} ${s.grid(2)} ${s.grid(4)}`,
  margin: "auto",
  maxWidth: s.size(700),
});
