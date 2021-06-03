import * as React from "react";
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

const IconLink: React.FC<{ href: string; icon: React.ReactNode; children: string }> = ({ href, icon, children }) => (
  <Link href={href}>
    <TextWithIconStyled>
      {icon}
      <Spacer orientation="horizontal" size={0.25} />
      {children}
    </TextWithIconStyled>
  </Link>
);

const FooterText: React.FC = (props) => (
  <Text>
    <FooterTextLayoutStyled>{props.children}</FooterTextLayoutStyled>
  </Text>
);

export const Footer: React.FC = () => (
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
