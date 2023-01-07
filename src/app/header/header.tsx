import styled from "styled-components/macro";

import { grid, size, Spacer, Text } from "../../components";
import icon from "./pizza.svg";

const imageSize = 150;

const StyledHeader = styled.header({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: grid(3),
});

const StyledImage = styled.img({
  margin: 0,
  display: "block",
  width: size(imageSize),
  height: size(imageSize),
});

export const Header = () => (
  <StyledHeader>
    <StyledImage src={icon} alt="The Pizza Problem" width={imageSize} height={imageSize} />
    <Text type="heading1">The Pizza Problem</Text>
    <Spacer size={1} />
    <Text>
      Finally, we have an answer to the problem that has bothered humanity since the beginning of time… should you buy
      the standard pizza or the big one?
    </Text>
  </StyledHeader>
);
