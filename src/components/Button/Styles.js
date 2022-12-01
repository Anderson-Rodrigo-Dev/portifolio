import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #6c63ff;
  border-radius: 13px;
  cursor: ${(props) => (props.clicked ? "default" : "pointer")};
  font-size: 18px;
  font-weight: 400;
  height: 60px;
  width: 150px;
  color: #fefefe;
  transition: .3s;

  &:hover {
    background: ${(props) => (props.clicked ? "" : "#6C63FF")};
  }
`;
