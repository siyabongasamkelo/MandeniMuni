import styled from "styled-components";

export const Button = styled.button`
  //------------------------Mobile Screen-----------------------------//
  @media only screen and (min-width: 360px) {
    height: 50px;
    width: 100%;
    border-radius: 40px;
    border: none;
    background-color: ${(props) => props.theme.color.primary};
    color: white;
  }

  //--------------------------Desktop-------------------------------//
  @media only screen and (min-width: 1014px) {
    height: 50px;
    width: 100%;
    border-radius: 40px;
    border: none;
    background-color: ${(props) => props.theme.color.primary};
    color: white;
  }

  @media only screen and (min-width: 1270px) {
    height: 60px;
    width: 100%;
  }

  @media only screen and (min-width: 1430px) {
    height: 70px;
    width: 100%;
  }

  @media only screen and (min-width: 1910px) {
    height: 80px;
    width: 100%;
  }

  @media only screen and (min-width: 3840px) {
    height: 100px;
    width: 70%;
  }

  @media only screen and (min-width: 3840px) {
    height: 100px;
    width: 40%;
  }
`;
