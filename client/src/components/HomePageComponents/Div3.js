import React from "react";
import styled from "styled-components";

export const Div3Container = styled.div`
  width: 8%;
  .deco {
    height: 15%;
    width: 100%;
    margin-top: 38%;
    background-color: rgba(175, 71, 210, 0.1);
  }
  .deco2 {
    height: 5%;
    width: 40%;
    margin-top: 306%;
    background-color: rgba(222, 26, 88, 0.3);
  }
  @media only screen and (min-width: 1014px) {
    .deco {
      margin-top: 46%;
    }
    .deco2 {
      margin-top: 352%;
    }
  }

  @media only screen and (min-width: 1270px) {
    .deco {
      margin-top: 45%;
    }
    .deco2 {
      margin-top: 379%;
    }
  }

  @media only screen and (min-width: 1910px) {
    .deco {
      margin-top: 38%;
    }
    .deco2 {
      margin-top: 306%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .deco2 {
      margin-top: 340%;
    }
  }

  @media only screen and (min-width: 2038px) {
    .deco2 {
      margin-top: 322%;
    }
  }
`;

const Div3 = () => {
  return (
    <Div3Container>
      <div className="deco"></div>
      <div className="deco2"></div>
    </Div3Container>
  );
};

export default Div3;
