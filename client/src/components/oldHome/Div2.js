import React from "react";
import styled from "styled-components";
import { BigText, SmallText } from "../common/Texts.styled";
import { Button } from "../common/Button.styled";
import { JoinNowContainer } from "./JoinNow.styled";
import face from "../../assets/img/face.jpg";
import { ArrowRight } from "react-bootstrap-icons";

export const Div2Container = styled.div`
  width: 38%;

  .hero-section {
    width: 100%;
    height: 48%;
    margin-top: 28%;
    background-color: rgba(87, 89, 91, 0.5);
    h1 {
      padding-left: 10%;
      padding-top: 5%;
    }

    div {
      width: 80%;
      height: auto;
      margin-left: 10%;
      margin-top: 3%;
    }

    button {
      width: 25%;
      margin-top: 2.5%;
      margin-left: 10%;
    }
  }

  .ourteam {
    width: 60%;
    height: 18%;
    margin-top: 7%;
    margin-left: 40%;
    background-color: #0b0b0b;

    display: flex;
    justify-content: space-evenly;

    .join-button {
      width: 25%;
      height: 80%;
      margin-top: 5%;
      border-radius: 20px;
    }
  }

  @media only screen and (min-width: 1014px) {
    .hero-section {
      margin-top: 32.5%;
      h1 {
        padding-left: 10%;
        padding-top: 5%;
      }

      button {
        width: 30%;
        height: 40px;
      }
    }

    .join-button {
      button {
        height: 30px;
      }
    }
  }

  @media only screen and (min-width: 1270px) {
    .hero-section {
      margin-top: 34.5%;
      h1 {
        padding-left: 10%;
        padding-top: 5%;
      }
    }
  }

  @media only screen and (min-width: 1430px) {
    .hero-section {
      button {
        height: 50px;
      }
    }
  }

  @media only screen and (min-width: 1910px) {
    .hero-section {
      margin-top: 28%;
      h1 {
        padding-top: 6%;
      }
      button {
        height: 60px;
      }
    }
  }

  .ourteam {
    .join-button {
      button {
        height: 60px;
      }
    }
  }

  @media only screen and (min-width: 2038px) {
    .hero-section {
      margin-top: 29.5%;
    }
  }
`;

const Div2 = () => {
  return (
    <Div2Container>
      <div className="hero-section">
        <BigText>Mandeni Municipality</BigText>
        <div>
          <SmallText>
            Mandeni is a community built on strength, resilience, and unity.
            Every day, our people rise with purpose — working hard, supporting
            one another, and shaping a future filled with opportunity. From our
            townships to our factories and farmlands, Mandeni stands as a place
            of courage, dignity, and hope.
          </SmallText>
        </div>
        <Button>Contact Us</Button>
      </div>
      <div className="ourteam">
        <JoinNowContainer pic={face} />
        <JoinNowContainer pic={face} />
        <div className="join-button">
          <SmallText>
            Be a <br></br>Member
          </SmallText>
          <Button>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Div2Container>
  );
};

export default Div2;
