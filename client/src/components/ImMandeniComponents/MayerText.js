import styled from "styled-components";
import { SmallText } from "../common/Texts.styled";

export const MayerContainers = styled.div`
  @media only screen and (min-width: 1014px) {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 2%;

    .left {
      width: 27.5%;
      height: 100%;
      .up {
        height: 30%;
        width: 20%;
        margin-left: 40%;
        background-color: #af47d2;
      }
      .down {
        height: 30%;
        width: 20%;
        margin-left: 60%;
        background-color: rgba(175, 71, 210, 0.5);
      }
    }
    .center {
      width: 45%;
      height: 100%;
      p {
        text-align: center;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .right {
      width: 27.5%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1270px) {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 2%;

    .left {
      width: 27.5%;
      height: 100%;
      .up {
        height: 30%;
        width: 20%;
        margin-left: 40%;
        background-color: #af47d2;
      }
      .down {
        height: 30%;
        width: 20%;
        margin-left: 60%;
        background-color: rgba(175, 71, 210, 0.5);
      }
    }
    .center {
      width: 45%;
      height: 100%;
      p {
        text-align: center;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .right {
      width: 27.5%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1680px) {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 30%;
      height: 100%;
      .up {
        height: 30%;
        width: 20%;
        margin-left: 40%;
        background-color: #af47d2;
      }
      .down {
        height: 30%;
        width: 20%;
        margin-left: 60%;
        background-color: rgba(175, 71, 210, 0.5);
      }
    }
    .center {
      width: 40%;
      height: 100%;
      p {
        text-align: center;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .right {
      width: 30%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 1910px) {
    margin-top: 0;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      width: 20%;
      height: 100%;
      .up {
        height: 30%;
        width: 20%;
        margin-left: 40%;
        background-color: #af47d2;
      }
      .down {
        height: 30%;
        width: 20%;
        margin-left: 60%;
        background-color: rgba(175, 71, 210, 0.5);
      }
    }
    .center {
      width: 30%;
      height: 100%;
      p {
        text-align: center;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .right {
      width: 20%;
      height: 100%;
    }
  }
`;

const MayerText = () => {
  return (
    <MayerContainers>
      <div className="left">
        <div className="up"></div>
        <div className="down"></div>
      </div>
      <div className="center">
        <div>
          <SmallText>
            “2024 is a year of creating synergy in working relations with
            various sector departments and delivering services that deals
            directly with the plights of our people”. Mandeni Municipality has
            committed 2024 to a robust community engagement and economic
            development for our residents. It is a pleasure to once again share
            with you the progress of our Municipality, as well as the future
            projects that we wish to implement this year.
          </SmallText>
        </div>
      </div>
      <div className="right"></div>
    </MayerContainers>
  );
};

export default MayerText;
