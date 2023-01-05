import { ReactNode } from "react";
import styled from "styled-components/macro";
import { GoMarkGithub } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, Spacer, Text } from "..";
import * as s from "../../styles";

const FooterStyled = styled.footer({
  borderTop: `${s.size(2)} solid ${s.colors.gray1}`,
  marginTop: s.grid(6),
  paddingTop: s.grid(2),
});

const TextWithIconStyled = styled.span({
  display: "inline-flex",
  alignItems: "center",
});

const FooterTextLayoutStyled = styled.span({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
      By
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
