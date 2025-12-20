import styled from "styled-components";

export const MobileHomeContainer = styled.div`
  overflow-x: hidden;
  @media only screen and (min-width: 240px) {
    display: block;
  }
  @media only screen and (min-width: 1014px) {
    display: none;
  }
`;

export const MobileHomeCover = styled.div`
  @media only screen and (min-width: 240px) {
    height: 100vh;
    width: 100vw;
    background-color: black;
  }
`;

export const MobileHomeContent = styled.div`
  @media only screen and (min-width: 240px) {
    width: 90%;
    height: 100%;
    margin-left: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .blur {
        width: 70%;
        height: 40%;
        background-color: white;
        filter: blur(150px);
      }
      .image {
        /* position: absolute; */
        transform: scale(30%);
        filter: brightness(0.7);
        margin-top: 20%;
      }
      .text {
        position: absolute;
        margin-top: -50%;
        width: 78%;
      }
      .button {
        width: 80%;
        position: absolute;
        margin-top: 100%;
        button {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 414px) {
    width: 90%;
    height: 100%;
    margin-left: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      height: 90%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .blur {
        width: 70%;
        height: 40%;
        background-color: white;
        filter: blur(150px);
      }
      .image {
        margin-top: 0%;
        position: absolute;
        img {
          transform: scale(120%);
          filter: brightness(0.7);
          margin-left: -10%;
        }
      }
      .text {
        position: absolute;
        margin-top: -80%;
        width: 85%;
      }
      .button {
        width: 80%;
        position: absolute;
        margin-top: 110%;
        button {
          width: 100%;
          height: 60px;
        }
      }
    }
  }
`;
