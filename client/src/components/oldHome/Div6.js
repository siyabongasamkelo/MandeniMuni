import React from "react";
import styled from "styled-components";

export const Div6Container = styled.div`
  width: 13.5%;
  .action-header {
    width: 100%;
    height: 36%;
    background-color: rgba(175, 71, 210, 0.2);
  }
`;
const Div6 = () => {
  return (
    <Div6Container>
      <div className="action-header"></div>
    </Div6Container>
  );
};

export default Div6;
