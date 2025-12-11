import styled from "styled-components";

export const ImMandeniContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 240px) {
    display: none;
  }

  @media only screen and (min-width: 1014px) {
    display: block;
    display: flex;
    justify-content: center;
  }

  @media only screen and (min-width: 2038px) {
    height: auto;
  }
`;

export const ImMandeniCover = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 2048px;
  max-height: 1080px;
`;

export const ImMandeniContent = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 1910px) {
  }
`;

export const HeaderAndIntro = styled.div`
  @media only screen and (min-width: 1014px) {
    height: 25%;
    width: 100%;
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
          text-align: center;
          margin-top: 5%;
        }

        .para {
          width: 60%;
          margin-left: 20%;
          p {
            text-align: center;
            margin-top: 5%;
            font-size: 0.8rem;
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

  @media only screen and (min-width: 1270px) {
    height: 25%;
    width: 100%;
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
          text-align: center;
          margin-top: 5%;
        }

        .para {
          width: 60%;
          margin-left: 20%;
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

  @media only screen and (min-width: 1680px) {
    height: 20%;
    width: 100%;
    .intro-header {
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: space-between;
      .left {
        width: 30%;
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
        width: 40%;
        height: 100%;
        h3 {
          text-align: center;
          margin-top: 5%;
          font-size: 2.2rem;
        }

        .para {
          width: 60%;
          margin-left: 20%;
          p {
            text-align: center;
            margin-top: 5%;
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
      .right {
        width: 30%;
        height: 100%;
      }
    }
  }

  @media only screen and (min-width: 1910px) {
    height: 25%;
    width: 100%;
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
