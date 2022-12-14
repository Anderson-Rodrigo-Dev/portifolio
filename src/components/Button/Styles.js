import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #6c63ff;
  border-radius: 13px;
  cursor:  pointer;
  font-size: 18px;
  height: 60px;
  width: 150px;
  color: #fefefe;
  transition: 0.3s;

  &:hover {
    background: ${(props) => (props.clicked ? "" : "#6C63FF")};
  }
`;
