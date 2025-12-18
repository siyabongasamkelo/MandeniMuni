import styled from "styled-components";

export const Button = styled.button`
  height: 80px;
  width: 100%;
  border-radius: 40px;
  border: none;
  background-color: ${(props) => props.theme.color.primary};
  color: white;
`;
