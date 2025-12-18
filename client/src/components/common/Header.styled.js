//this header is on the home component "from "../Home""
//it is floatin because position : absolute was used
import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media only screen and (min-width: 1910px) {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
  }
`;

export const HeaderCover = styled.div`
  @media only screen and (min-width: 1910px) {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logo = styled.div``;

export const Links = styled.div`
  @media only screen and (min-width: 1910px) {
    display: flex;
    justify-content: space-between;
    width: 30%;
    a {
      font-family: "League Spartan";
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const Action = styled.div`
  @media only screen and (min-width: 1910px) {
    .profile {
      height: 80px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: white;
    }
  }
`;
