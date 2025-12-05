import styled from "styled-components";

export const HomeContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.image});
  background-size: 100%;
  background-position: center;

  height: 100vh;
  width: 100%;
  max-width: 1920px !important;
`;

//This is the part that responsible for all the colorful divs on the background
export const DecorationsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  div {
    height: 100%;
  }
  .div1 {
    width: 13.5%;
    .logo {
      width: 100%;
      height: 21%;
      background-color: rgba(11, 11, 11, 0.5);
    }
  }
  .div2 {
    width: 38%;

    .hero-section {
      width: 100%;
      height: 48%;
      margin-top: 28%;
      background-color: rgba(87, 89, 91, 0.5);
    }

    .ourteam {
      width: 50%;
      height: 8%;
      margin-top: 6.5%;
      margin-left: 50%;
      background-color: blue;
    }
  }
  .div3 {
    width: 8%;
    .deco {
      height: 15%;
      width: 100%;
      margin-top: 38%;
      background-color: rgba(175, 71, 210, 0.1);
    }
    .deco2 {
      height: 5%;
      width: 40%;
      margin-top: 306%;
      background-color: rgba(222, 26, 88, 0.3);
    }
  }
  .div4 {
    width: 8%;
    .deco {
      height: 15%;
      width: 100%;
      margin-top: 133%;
      background-color: rgba(38, 53, 93, 0.6);
    }
  }
  .div5 {
    width: 20%;
    .alert-div {
      width: 100%;
      height: 45%;
      margin-top: 91.5%;
      background-color: rgba(11, 11, 11, 0.8);
    }
  }
  .div6 {
    width: 13.5%;
    .action-header {
      width: 100%;
      height: 36%;
      background-color: rgba(175, 71, 210, 0.2);
    }
  }
`;
