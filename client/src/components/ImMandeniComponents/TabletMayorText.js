import styled from "styled-components";
import power from "../../assets/img/power.png";
import discharge from "../../assets/img/discharge.png";
import law from "../../assets/img/law.png";
import boy from "../../assets/img/boy.png";
import secretary from "../../assets/img/secretary.png";
import { SmallText } from "../common/Texts.styled";

export const TableMayorTextContainer = styled.div`
  height: 50%;
  width: 100%;
  .cover {
    width: 50%;
    height: 100%;
    margin-left: 25%;
    .electricity,
    .tenderAndYouth,
    .jobs {
      height: 25%;
      display: flex;
      justify-content: space-between;
      margin-top: 5%;
      div {
        height: 100%;
        width: 47%;
        margin-top: 8%;
        background-color: #af47d2;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 40%;
          aspect-ratio: 1 / 1;
          margin-top: 10%;
        }
        p {
          margin-top: 8%;
        }
      }
    }
    .jobs {
      width: 100%;
      justify-content: center;
    }
  }
`;

const TabletMayorText = () => {
  return (
    <TableMayorTextContainer>
      <div className="cover">
        <div className="electricity">
          <div>
            <img src={power} alt="electricity" />
            <SmallText>Buy Electricity</SmallText>
          </div>
          <div style={{ backgroundColor: "#26355D" }}>
            <img src={discharge} alt="electricity" />
            <SmallText>Buy Electricity</SmallText>
          </div>
        </div>
        <div className="tenderAndYouth">
          <div style={{ backgroundColor: "#DE1A58" }}>
            <img src={law} alt="electricity" />
            <SmallText>Buy Electricity</SmallText>
          </div>
          <div style={{ backgroundColor: "#57595B" }}>
            <img src={secretary} alt="electricity" />
            <SmallText>Buy Electricity</SmallText>
          </div>
        </div>
        <div className="jobs">
          <div style={{ backgroundColor: "#FF8F00" }}>
            <img src={boy} alt="electricity" />
            <SmallText>Buy Electricity</SmallText>
          </div>
        </div>
      </div>
    </TableMayorTextContainer>
  );
};

export default TabletMayorText;
