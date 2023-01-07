import { ReactNode } from "react";
import styled from "styled-components/macro";

import * as s from "../styles";

const breakPoints = {
  tablet: "@media (min-width: 382px)",
  desktop: "@media (min-width: 684px)",
};

const sharedStyles = {
  margin: 0,
  fontWeight: 400,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
  color: s.colors.gray2,
};

const StyledPageTitle = styled.h1({
  ...sharedStyles,
  fontWeight: 700,

  fontSize: s.size(32),
  [breakPoints.tablet]: {
    fontSize: s.size(36),
  },
  [breakPoints.desktop]: {
    fontSize: s.size(42),
  },
});

const StyledText = styled.p({
  ...sharedStyles,

  fontSize: s.size(13),
  [breakPoints.tablet]: {
    fontSize: s.size(15),
  },
  [breakPoints.desktop]: {
    fontSize: s.size(18),
  },
});

type TextType = "pageTitle" | "heading" | "headingSmall" | "text";

const textTypeToElement = (textType: TextType) => {
  switch (textType) {
    case "pageTitle":
      return StyledPageTitle;
    case "text":
    case "headingSmall":
    case "heading":
      return StyledText;
  }
};

export const Text = ({ type = "text", children }: { type?: TextType; children: ReactNode }) => {
  const Component = textTypeToElement(type);

  return <Component>{children}</Component>;
};
