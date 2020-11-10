import * as React from "react";
import styled from "styled-components";

const sharedStyles = {
  margin: 0,
  fontWeight: 400,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
};

const PageTitleStyled = styled.h1({
  ...sharedStyles,
  fontWeight: 700,
});

const TextStyled = styled.p({
  ...sharedStyles,
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
  type: TextType;
}> = ({ type = "text", children }) => {
  const Component = textTypeToElement(type);

  return <Component>{children}</Component>;
};
