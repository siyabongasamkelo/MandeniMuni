import React from "react";
import styled from "styled-components";

export const Div4Container = styled.div`
  width: 8%;
  .deco {
    height: 15%;
    width: 100%;
    margin-top: 133%;
    background-color: rgba(38, 53, 93, 0.6);
  }

  @media only screen and (min-width: 1014px) {
    .deco {
      margin-top: 159.5%;
    }
  }

  @media only screen and (min-width: 1270px) {
    .deco {
      margin-top: 165%;
    }
  }

  @media only screen and (min-width: 1910px) {
    .deco {
      margin-top: 133%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .deco {
      margin-top: 150%;
    }
  }

  @media only screen and (min-width: 2038px) {
    .deco {
      margin-top: 140%;
    }
  }
`;
const Div4 = () => {
  return (
    <Div4Container>
      <div className="deco"></div>
    </Div4Container>
  );
};

export default Div4;
