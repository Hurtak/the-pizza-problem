import { CSSProperties, ReactNode } from "react";
import styled from "styled-components/macro";

import { breakPoints, colors, size } from "../styles";

const sharedStyles = {
  margin: 0,
  fontWeight: 400,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
  color: colors.gray2,
};

const StyledTextHeading1 = styled.h1({
  ...sharedStyles,
  fontWeight: 700,
  fontSize: size(30),
  [breakPoints.tablet]: {
    fontSize: size(36),
  },
  [breakPoints.desktop]: {
    fontSize: size(48),
  },
});

const StyledTextHeading2 = styled.h2({
  ...sharedStyles,
  fontWeight: 700,
  fontSize: size(20),
  [breakPoints.tablet]: {
    fontSize: size(26),
  },
  [breakPoints.desktop]: {
    fontSize: size(32),
  },
});

const StyledTextHeading3 = styled.h3({
  ...sharedStyles,
  fontWeight: 700,
  fontSize: size(15),
  [breakPoints.tablet]: {
    fontSize: size(17),
  },
  [breakPoints.desktop]: {
    fontSize: size(20),
  },
});

const StyledText = styled.p({
  ...sharedStyles,
  fontSize: size(13),
  [breakPoints.tablet]: {
    fontSize: size(15),
  },
  [breakPoints.desktop]: {
    fontSize: size(18),
  },
});

type TextType = "heading1" | "heading2" | "heading3" | "text";

const textTypeToElement = (textType: TextType) => {
  switch (textType) {
    case "heading1":
      return StyledTextHeading1;
    case "heading2":
      return StyledTextHeading2;
    case "heading3":
      return StyledTextHeading3;
    case "text":
      return StyledText;
  }
};

export const Text = ({
  type = "text",
  style,
  as,
  children,
}: {
  type?: TextType;
  style?: CSSProperties;
  // Taken from Styled components `AsC` type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: string | React.ComponentType<any>;
  children: ReactNode;
}) => {
  const Component = textTypeToElement(type);

  return (
    <Component style={style} as={as}>
      {children}
    </Component>
  );
};
