import styled from "styled-components";
import { SmallText } from "../common/Texts.styled";
import mayor from "../../assets/img/mayor.jpeg";

export const MobileMayerTextContainer = styled.div`
  height: 100vh;
  width: 100%;
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
    .image {
      margin-top: 50%;
      height: 50%;
      img {
        height: 120%;
        margin-left: -30%;
      }
    }
  }
`;

const MobileMayerText = () => {
  return (
    <MobileMayerTextContainer>
      <div className="text">
        <div className="paragraph">
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
      <div className="image">
        <img src={mayor} alt="mayor" />
      </div>
    </MobileMayerTextContainer>
  );
};

export default MobileMayerText;
