import styled from "styled-components";

export const ImMandeniDecorationsContainers = styled.div`
  height: 21%;
  width: 100%;
  .decorations {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .left {
      width: 50%;
      height: 100%;

      .up {
        height: 25%;
        width: 15%;
        margin-left: 40%;
        margin-top: 12%;
        background-color: rgba(38, 53, 93, 0.6);
      }
      .down {
        height: 50%;
        width: 40%;
        background-color: #26355d;
      }
    }

    .right {
      width: 50%;
      height: 100%;
      .up {
        height: 25%;
        width: 15%;
        margin-left: 40%;
        margin-top: 12%;
        background-color: rgba(222, 26, 88, 0.3);
      }
      .down {
        height: 50%;
        width: 40%;
        margin-left: 55%;
        background-color: #de1a58;
      }
    }
  }
`;
const ImMandeniDecorations = () => {
  return (
    <ImMandeniDecorationsContainers>
      <div className="decorations">
        <div className="left">
          <div className="up"></div>
          <div className="down"></div>
        </div>
        <div className="right">
          <div className="up"></div>
          <div className="down"></div>
        </div>
      </div>
    </ImMandeniDecorationsContainers>
  );
};

export default ImMandeniDecorations;
