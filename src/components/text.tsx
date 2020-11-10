import * as React from "react";
import styled from "styled-components/macro";

const breakPoints = {
  tablet: "@media (min-width: 382px)",
  desktop: "@media (min-width: 684px)",
};

const sharedStyles = {
  margin: 0,
  fontWeight: 400,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
};

const PageTitleStyled = styled.h1({
  ...sharedStyles,
  fontWeight: 700,

  fontSize: 32,
  [breakPoints.tablet]: {
    fontSize: 36,
  },
  [breakPoints.desktop]: {
    fontSize: 42,
  },
});

const TextStyled = styled.p({
  ...sharedStyles,

  fontSize: 13,
  [breakPoints.tablet]: {
    fontSize: 15,
  },
  [breakPoints.desktop]: {
    fontSize: 18,
  },
});

type TextType = "pageTitle" | "heading" | "headingSmall" | "text";

const textTypeToElement = (textType: TextType) => {
  switch (textType) {
    case "pageTitle":
      return PageTitleStyled;
    case "text":
    default:
      return TextStyled;
  }
};

export const Text: React.FC<{
  type?: TextType;
}> = ({ type = "text", children }) => {
  const Component = textTypeToElement(type);

  return <Component>{children}</Component>;
};
