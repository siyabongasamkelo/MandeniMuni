import styled from "styled-components";

export const ImMandeniMobileContainer = styled.div`
  @media only screen and (min-width: 700px) {
    display: none;
  }

  @media only screen and (min-width: 1014px) {
    display: none;
  }
`;

export const ImMandeniMobileCover = styled.div`
  height: 100vh;
  height: auto;
  width: 100vw;
  background-color: black;
  overflow: hidden;
`;

export const ImMandeniMobileContent = styled.div`
  @media only screen and (min-width: 240px) {
    display: flex;
    flex-direction: column;
    .text {
      width: 80%;
      height: 15%;
      margin-top: 15%;
      margin-left: 9%;
      h3 {
        text-align: center;
      }
      .paragraph {
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        p {
          text-align: center;
        }
      }
    }
  }
`;
