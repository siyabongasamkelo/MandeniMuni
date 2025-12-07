import React from "react";
import styled from "styled-components";
import NoticeCard from "./NoticeCard";

export const Div5Container = styled.div`
  width: 20%;
  .alert-div {
    width: 100%;
    height: 45%;
    margin-top: 91.5%;
    background-color: rgba(11, 11, 11, 0.8);
  }

  @media only screen and (min-width: 1014px) {
    .alert-div {
      margin-top: 108%;
    }
  }

  @media only screen and (min-width: 1270px) {
    .alert-div {
      margin-top: 113%;
    }
  }

  @media only screen and (min-width: 1910px) {
    .alert-div {
      margin-top: 91.5%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .alert-div {
      margin-top: 102%;
    }
  }

  @media only screen and (min-width: 2038px) {
    .alert-div {
      margin-top: 96%;
    }
  }
`;
const Div5 = () => {
  return (
    <Div5Container>
      <div className="alert-div">
        <NoticeCard />
      </div>
    </Div5Container>
  );
};

export default Div5;
