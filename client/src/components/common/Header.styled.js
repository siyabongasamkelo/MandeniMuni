//this header is on the home component "from "../Home""
//it is floatin because position : absolute was used
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 95%;
  height: 20%;
  margin-left: 2.5%;
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    height: 10%;
  }
  background-color: rgba(0, 0, 0, 0);
`;

export const Logo = styled.div`
  h3 {
    margin-left: 5%;
  }
`;

export const Links = styled.div`
  margin-right: 7%;
  h3 {
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  h3:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Action = styled.div`
  width: 10%;
  button {
    margin-left: 5%;
  }
`;
