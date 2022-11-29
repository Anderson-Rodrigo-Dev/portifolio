import styled from "styled-components";

export const CheckboxContainer = styled.label`
  cursor: pointer;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  display: block;
  height: 30px;
  position: absolute;
  right: 5%;
  top: 5%;
  width: 30px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
  position: relative;
`;

export const CheckedBall = styled.span`
  background-color: #2C2C2C;
  border-radius: 150px 0 0 150px;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  width: 15px;
  z-index: 999;

  transform: ${(props) =>
    props.checked ? "rotate(180deg) translate(-13px, 0%)" : ""};
`;
