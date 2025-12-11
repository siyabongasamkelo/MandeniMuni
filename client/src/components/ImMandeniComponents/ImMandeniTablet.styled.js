import styled from "styled-components";

export const ImMandeniTabletContainer = styled.div`
  background-color: black;
  overflow: hidden;
  @media only screen and (min-width: 240px) {
    display: none;
  }
  @media only screen and (min-width: 1014px) {
    display: none;
  }
`;

export const ImMandeniTabletCover = styled.div`
  height: 100vh;
  width: 100%;
`;

export const ImMandeniTabletContent = styled.div`
  @media only screen and (min-width: 700px) {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .text {
      width: 50%;
      height: 20%;
      margin-top: 12%;
      margin-left: 25%;
      h3 {
        text-align: center;
        font-size: 2rem;
      }
      .paragraph {
        width: 120%;
        margin-left: -10%;
        margin-top: 5%;
        background-color p {
          text-align: center;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
