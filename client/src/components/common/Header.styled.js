//this header is on the home component "from "../Home""
//it is floatin because position : absolute was used
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 95%;
  height: 20%;
  max-width: 2048px;
  margin-left: 2.5%;
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    height: 10%;
  }

  //Mobile devices

  @media only screen and (min-width: 240px) {
    width: 90%;
    margin-left: 5%;
    position: relative;
  }

  //Desktops

  @media only screen and (min-width: 1014px) {
    position: absolute;
    width: 95%;
    margin-left: 2.5%;
  }

  @media only screen and (min-width: 3830px) {
    height: 10%;
    margin-left: 1.8%;
  }

  @media only screen and (min-width: 7670px) {
    height: 5%;
    margin-left: 0.8%;
  }
`;

export const Logo = styled.div`
  h3 {
    margin-left: 5%;
  }
  @media only screen and (min-width: 1014px) {
    h3 {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1270px) {
    h3 {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 1430px) {
    h3 {
      font-size: 1.6rem;
    }
  }

  @media only screen and (min-width: 1910px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 1920px) {
    h3 {
      font-size: 2rem;
    }
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

  //Mobile devices

  @media only screen and (min-width: 240px) {
    display: none;
  }

  //desktops
  @media only screen and (min-width: 1014px) {
    display: block;
    h3 {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1270px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 1430px) {
    h3 {
      font-size: 1.8rem;
    }
  }

  @media only screen and (min-width: 1910px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 1920px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 2038px) {
  }
`;

export const Action = styled.div`
  width: 10%;
  button {
    margin-left: 5%;
  }

  //Mobile devices

  @media only screen and (min-width: 240px) {
    width: 50%;
    button {
      width: 120px;
      height: 40px;
      margin-left: 20%;
      display: none;
    }

    svg {
      transform: scale(250%);
      fill: white;
      margin-left: 70%;
    }
  }

  //Desktop

  @media only screen and (min-width: 1014px) {
    width: 10%;
    button {
      display: block;
      height: 40px;
      width: 100%;
      margin-left: 5%;
    }
    svg {
      display: none;
    }
  }

  @media only screen and (min-width: 1270px) {
    button {
      height: 40px;
    }
  }

  @media only screen and (min-width: 1430px) {
    button {
      height: 50px;
    }
  }

  @media only screen and (min-width: 1910px) {
    button {
      height: 60px;
    }
  }

  @media only screen and (min-width: 1920px) {
    button {
      height: 60px;
    }
  }

  @media only screen and (min-width: 2038px) {
    button {
      width: 90%;
    }
  }

  @media only screen and (min-width: 2550px) {
    button {
      margin-left: -45%;
    }
  }
`;
