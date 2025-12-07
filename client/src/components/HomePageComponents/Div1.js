import styled from "styled-components";
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

export const Div1Container = styled.div`
  width: 13.5%;
  .logo {
    width: 100%;
    height: 21%;
    background-color: rgba(11, 11, 11, 0.5);
  }
  .socialmedial-icons {
    height: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icons {
      height: 80%;
      width: 30%;
      margin-top: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      svg {
        color: white;
        transform: scale(150%);
      }
    }
  }
`;

const Div1 = () => {
  return (
    <Div1Container>
      <div className="logo"></div>
      <div className="socialmedial-icons">
        <div className="icons">
          <Facebook />
          <Whatsapp />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </Div1Container>
  );
};

export default Div1;
