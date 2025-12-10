import styled from "styled-components";

export const ImMandeniContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: hidden;
`;

export const ImMandeniCover = styled.div`
  height: 100%;
  width: 100%;
`;

export const ImMandeniContent = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 1910px) {
  }
`;

export const HeaderAndIntro = styled.div`
  height: 25%;
  width: 100%;
  @media only screen and (min-width: 1910px) {
    .intro-header {
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: space-between;

      .left {
        width: 20%;
        height: 100%;
        .up {
          height: 50%;
          width: 40%;
          background-color: #de1a58;
        }
        .down {
          height: 20%;
          margin-left: 40%;
          background-color: rgba(222, 26, 88, 0.3);
          aspect-ratio: 1 / 1;
        }
      }
      .center {
        width: 60%;
        height: 100%;

        h3 {
          margin-top: 5%;
        }

        .para {
          width: 35%;
          margin-left: 32.5%;
          p {
            text-align: center;
            margin-top: 5%;
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      .right {
        width: 20%;
        height: 100%;
      }
    }
  }
`;
