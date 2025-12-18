import styled from "styled-components";

export const JoinNowContainer = styled.div`
  width: 25%;
  height: 80%;
  margin-top: 5%;
  border-radius: 20px;

  background-image: url(${(props) => props.pic});
  background-size: cover;
  background-position: center;
`;
