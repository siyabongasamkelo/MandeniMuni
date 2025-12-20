import React from "react";
import {
  Action,
  HeaderContainer,
  HeaderCover,
  Links,
  Logo,
} from "./Header.styled";
import { LogoText } from "./Texts.styled";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderCover>
        <Logo>
          <LogoText>Mandeni</LogoText>
        </Logo>
        <Links>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Youth Employment</Link>
          <Link>Contact Us</Link>
        </Links>
        <Action>
          <div className="profile"></div>
          <List />
        </Action>
      </HeaderCover>
    </HeaderContainer>
  );
};

export default Header;
