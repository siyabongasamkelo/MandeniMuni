//This is where i will design and set all my texts in the app
import styled from "styled-components";

export const BigText = styled.h1`
  font-family: "Comforter", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 3.8rem;
  color: white;

  //Mobile

  @media only screen and (min-width: 230px) {
    text-align: center;
    font-size: 3rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 414px) {
    font-size: 3rem;
  }

  // Tablet

  @media only screen and (min-width: 700px) {
    font-size: 4rem;
  }

  //Desktop

  @media only screen and (min-width: 1014px) {
    font-size: 1.8rem;
    text-align: left;
  }

  @media only screen and (min-width: 1270px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1430px) {
    font-size: 3.4rem;
  }

  @media only screen and (min-width: 1910px) {
    font-size: 7rem;
    letter-spacing: 20px;
    text-align: center;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 3.8rem;
  }

  @media only screen and (min-width: 2038px) {
    font-size: 4rem;
  }
`;

export const MediumText = styled.h3`
  font-family: "Kablammo";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  /* font-variation-settings: "MORF" 0; */
  color: white;

  @media only screen and (min-width: 1910px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const SmallText = styled.p`
  font-family: "League Spartan";
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  color: white;

  //Mobile
  @media only screen and (min-width: 240px) {
    text-align: center;
    font-size: 1rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 380px) {
    font-size: 0.93rem;
  }

  @media only screen and (min-width: 404px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 480px) {
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 540px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.2rem;
  }
  //Desktop
  @media only screen and (min-width: 1014px) {
    font-size: 0.8rem;
    text-align: left;
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
  font-family: "Comforter", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: white;
`;
