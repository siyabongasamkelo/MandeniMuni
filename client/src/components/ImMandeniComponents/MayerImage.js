import styled from "styled-components";
import mayor from "../../assets/img/mayor.jpeg";

export const MayerImageContainer = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .left {
    height: 100%;
    width: 30%;
  }
  .center {
    height: 100%;
    width: 40%;
    img {
      width: 100%;
    }
  }
  .right {
    height: 100%;
    width: 30%;
    .up {
      height: 15%;
      margin-top: 32%;
      margin-left: 61.5%;
      aspect-ratio: 1 / 1;
      background-color: rgba(38, 53, 93, 0.6);
    }
    .down {
      height: 30%;
      width: 30%;
      margin-left: 70%;
      background-color: #26355d;
    }
  }
`;
const MayerImage = () => {
  return (
    <MayerImageContainer>
      <div className="left"></div>
      <div className="center">
        <img src={mayor} alt="mayer" />
      </div>
      <div className="right">
        <div className="up"></div>
        <div className="down"></div>
      </div>
    </MayerImageContainer>
  );
};

export default MayerImage;
