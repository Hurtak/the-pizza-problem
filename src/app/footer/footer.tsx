import { ReactNode } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import styled from "styled-components/macro";

import { breakPoints, colors, grid, Link, size, Spacer, Text } from "../../components";

const FooterStyled = styled.footer({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderTop: `${size(2)} solid ${colors.gray1}`,
  marginTop: grid(3),
  paddingTop: grid(2),

  [breakPoints.tablet]: {
    marginTop: grid(6),
  },
});

const TextWithIconStyled = styled.span({
  display: "inline-flex",
  alignItems: "center",
});

const FooterTextLayoutStyled = styled.span({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
});

const IconLink = ({ href, icon, children }: { href: string; icon: ReactNode; children: string }) => (
  <Link href={href}>
    <TextWithIconStyled>
      {icon}
      <Spacer orientation="horizontal" size={0.25} />
      {children}
    </TextWithIconStyled>
  </Link>
);

const FooterText = (props: { children: ReactNode }) => (
  <Text>
    <FooterTextLayoutStyled>{props.children}</FooterTextLayoutStyled>
  </Text>
);

export const Footer = () => (
  <FooterStyled>
    <FooterText>
      From
      <Spacer orientation="horizontal" size={0.5} />
      <IconLink href="https://twitter.com/PetrHurtak" icon={<AiFillTwitterCircle size={18} />}>
        PetrHurtak
      </IconLink>
    </FooterText>
    <Spacer size={0.5} />
    <FooterText>
      Code on
      <Spacer orientation="horizontal" size={0.5} />
      <IconLink href="https://github.com/hurtak/the-pizza-problem" icon={<GoMarkGithub size={16} />}>
        GitHub
      </IconLink>
    </FooterText>
  </FooterStyled>
);
