import styled from "styled-components";

export const NoticeCardContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeCardCover = styled.div`
  height: 90%;
  width: 80%;
`;

export const ArrowDiv = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  div {
    height: 60px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.color.primary};
    }
    svg {
      fill: black;
    }
  }
  @media only screen and (min-width: 1014px) {
    height: 25%;
    div {
      height: 30px;
    }
  }

  @media only screen and (min-width: 1430px) {
    height: 20%;
    div {
      height: 60px;
    }
  }

  @media only screen and (min-width: 1910px) {
    height: 20%;
    div {
      height: 60px;
    }
  }

  @media only screen and (min-width: 1920px) {
    height: 20%;
    div {
      height: 60px;
    }
  }

  @media only screen and (min-width: 2038px) {
    height: 20%;
    div {
      height: 80px;
    }
  }
`;

export const MessageDiv = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  p {
    text-align: center;
  }
`;
