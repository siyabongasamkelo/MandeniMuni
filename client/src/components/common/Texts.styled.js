//This is where i will design and set all my texts in the app
import styled from "styled-components";

export const BigText = styled.h1`
  font-family: "Kablammo";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  /* font-variation-settings: "MORF" 0; */
  font-size: 3.8rem;
  color: white;

  @media only screen and (min-width: 1014px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1270px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1430px) {
    font-size: 3.4rem;
  }

  @media only screen and (min-width: 1910px) {
    font-size: 3.8rem;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 3.8rem;
  }

  @media only screen and (min-width: 2038px) {
    font-size: 4rem;
  }
`;

export const SmallText = styled.p`
  font-family: "League Spartan";
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  color: white;

  @media only screen and (min-width: 1014px) {
    font-size: 13px;
  }

  @media only screen and (min-width: 1270px) {
    font-size: 15px;
  }

  @media only screen and (min-width: 1430px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1910px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 2038px) {
    font-size: 20px;
  }
`;

export const LogoText = styled.h3`
  font-family: "Kablammo";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  /* font-variation-settings: "MORF" 0; */
  font-size: 30px;
  color: white;
`;
