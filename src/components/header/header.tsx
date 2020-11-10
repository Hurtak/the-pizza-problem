import * as React from "react";
import styled from "styled-components/macro";
import icon from "./pizza.svg";
import { Text, Spacer } from "../index";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const imageSize = 150;
const Image = styled.img`
  margin: 0;
  display: block;
  width: ${imageSize}px;
  height: ${imageSize}px;
`;

export const Header: React.FC = () => (
  <HeaderStyled>
    <Image src={icon} alt="The Pizza Problem" width={imageSize} height={imageSize} />
    <Text type="pageTitle">The Pizza Problem</Text>
    <Spacer size={1} />
    <p>
      Finally, we have an answer to the problem that has bothered humanity since the beginning of time… should you buy
      the standard pizza or the big one?
    </p>
  </HeaderStyled>
);
