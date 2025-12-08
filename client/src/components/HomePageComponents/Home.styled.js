import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);

  @media only screen and (min-width: 240px) {
    display: none;
  }
  @media only screen and (min-width: 1014px) {
    display: block;
  }
`;

export const HomeCover = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 2048px;
  max-height: 1080px;

  display: flex;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.image});
  background-size: 100%;
  background-position: center;
`;

//This is the part that responsible for all the colorful divs on the background
export const DecorationsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
