import styled from "styled-components";

export const TabletHomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  @media only screen and (min-width: 240px) {
    display: none;
  }

  @media only screen and (min-width: 650px) {
    display: block;
  }

  @media only screen and (min-width: 1014px) {
    display: none;
  }
`;

export const TabletHomeCover = styled.div`
  height: 100%;
  width: 100%;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const TabletContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const UpperContainer = styled.div`
  height: 10%;
  width: 100%;

  .col1 {
    height: 30%;
    div {
      height: 100%;
      width: 10%;
      background: rgba(222, 26, 88, 0.3);
      margin-left: 65%;
    }
  }
  .col2 {
    height: 60%;
    width: 100%;
    div {
      background-color: #d9d9d9;
      height: 100%;
      width: 15%;
      margin-left: 75%;
    }
  }
`;

export const HeroContainer = styled.div`
  height: 60%;
  width: 100%;

  .hero-cover {
    width: 80%;
    height: 100%;
    margin-left: 10%;

    .paragraph {
      height: 35%;
      width: 100%;
      margin-top: 5%;
      background-color: rgba(87, 89, 91, 0.5);

      display: flex;
      justify-content: center;
      align-items: center;

      div {
        height: 80%;
        width: 90%;
      }
    }
    button {
      width: 50%;
      margin-left: 25%;
      margin-top: 10%;
      height: 60px;
      font-size: 1.5rem;
    }
    .socialmedia-icons {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin-top: 10%;
      svg {
        transform: scale(250%);
        fill: white;
      }
    }
  }
`;

export const LowerContainer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .left {
    width: 50%;
    height: 100%;
    .up {
      height: 30%;
      width: 100%;
      div {
        height: 100%;
        width: 20%;
        background-color: rgba(175, 71, 210, 0.2);
        margin-left: 40%;
      }
    }
    .down {
      height: 70%;
      width: 100%;
      div {
        height: 100%;
        width: 40%;
        background-color: rgba(38, 53, 93, 0.6);
      }
    }
  }

  .right {
    width: 50%;
    height: 100%;
    .up {
      height: 70%;
      width: 100%;
      div {
        height: 100%;
        width: 40%;
        margin-left: 40%;
        background-color: rgba(11, 11, 11, 0.8);
      }
    }
    .down {
      height: 30%;
      width: 100%;
      div {
        width: 20%;
        height: 100%;
        margin-left: 80%;
        background-color: rgba(175, 71, 210, 0.5);
      }
    }
  }
`;
