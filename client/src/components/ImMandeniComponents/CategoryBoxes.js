import styled from "styled-components";
import power from "../../assets/img/power.png";
import discharge from "../../assets/img/discharge.png";
import law from "../../assets/img/law.png";
import boy from "../../assets/img/boy.png";
import secretary from "../../assets/img/secretary.png";
import { SmallText } from "../common/Texts.styled";

export const CategoryBoxesContainer = styled.div`
  @media only screen and (min-width: 240px) {
    height: 160vh;
    width: 100%;
    margin-top: 2%;

    .cover {
      height: 100%;
      width: 90%;
      margin-left: 2.5%;

      display: flex;
      flex-direction: column;
      align-items: center;

      .box {
        height: 17.5%;
        width: 80%;
        margin-top: 8%;
        margin-left: 5%;

        background-color: #af47d2;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 50%;
          aspect-ratio: 1 / 1;
          margin-top: 15%;
        }
        p {
          margin-top: 10%;
        }
      }
    }
  }

  @media only screen and (min-width: 1014px) {
    height: 15%;
    width: 100%;
    margin-top: 2%;

    .cover {
      height: 100%;
      width: 55%;
      margin-left: 22.5%;
      margin-top: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .box {
        height: 80%;
        width: 18%;
        margin-top: 0%;
        background-color: #af47d2;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 45%;
          aspect-ratio: 1 / 1;
          margin-top: 0;
          margin-top: 10%;
        }
        p {
          margin-top: 10%;
        }
      }
    }
  }

  @media only screen and (min-width: 1680px) {
    height: 20%;
    width: 100%;
    margin-top: 4%;

    .cover {
      height: 100%;
      width: 55%;
      margin-left: 22.5%;
      display: block;
      display: flex;
      justify-content: space-between;

      .box {
        height: 80%;
        width: 18%;
        background-color: #af47d2;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 45%;
          aspect-ratio: 1 / 1;
          margin-top: 10%;
        }
        p {
          margin-top: 10%;
        }
      }
    }
  }

  @media only screen and (min-width: 1910px) {
    height: 20%;
    width: 100%;
    margin-top: 0;

    .cover {
      height: 100%;
      width: 55%;
      margin-left: 22.5%;
      display: flex;
      justify-content: space-between;

      .box {
        height: 80%;
        width: 18%;
        background-color: #af47d2;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 45%;
          aspect-ratio: 1 / 1;
          margin-top: 10%;
        }
        p {
          margin-top: 10%;
        }
      }
    }
  }
`;
const CategoryBoxes = () => {
  return (
    <CategoryBoxesContainer>
      <div className="cover">
        <div className="box">
          <img src={power} alt="electricity" />
          <SmallText>Buy Electricity</SmallText>
        </div>

        <div className="box" style={{ backgroundColor: "#26355D" }}>
          <img src={discharge} alt="electricity" />
          <SmallText>Buy Electricity</SmallText>
        </div>

        <div className="box" style={{ backgroundColor: "#DE1A58" }}>
          <img src={law} alt="electricity" />
          <SmallText>Buy Electricity</SmallText>
        </div>

        <div className="box" style={{ backgroundColor: "#57595B" }}>
          <img src={secretary} alt="electricity" />
          <SmallText>Buy Electricity</SmallText>
        </div>

        <div className="box" style={{ backgroundColor: "#FF8F00" }}>
          <img src={boy} alt="electricity" />
          <SmallText>Buy Electricity</SmallText>
        </div>
      </div>
    </CategoryBoxesContainer>
  );
};

export default CategoryBoxes;
