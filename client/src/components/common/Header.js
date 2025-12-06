import React from "react";
import { Action, HeaderContainer, Links, Logo } from "./Header.styled";
import { LogoText } from "../Texts.styled";
import { Button } from "./Button.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoText>Mandeni</LogoText>
      </Logo>
      <Links>
        <LogoText>Menu</LogoText>
      </Links>
      <Action>
        <Button>Sign In</Button>
      </Action>
    </HeaderContainer>
  );
};

export default Header;
