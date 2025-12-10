import styled from "styled-components";
import power from "../../assets/img/power.png";
import discharge from "../../assets/img/discharge.png";
import law from "../../assets/img/law.png";
import boy from "../../assets/img/boy.png";
import secretary from "../../assets/img/secretary.png";
import { SmallText } from "../common/Texts.styled";

export const CategoryBoxesContainer = styled.div`
  @media only screen and (min-width: 1910px) {
    height: 20%;
    width: 100%;

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
