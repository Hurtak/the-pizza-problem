import React from "react";
import styled from "styled-components/macro";

export const Title: React.FC<{
  children: string;
}> = ({ children }) => <TitleStyled>{children}</TitleStyled>;

const TitleStyled = styled.h1({});
