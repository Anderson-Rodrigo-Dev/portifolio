import { useState } from "react";
import * as S from "./Styles";


const ThemeButton = () => {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange(e) {
    e.preventDefault()
    setChecked(!checked);
  }

  return (
    <S.CheckboxContainer onClick={handleCheckboxChange}>
      <S.HiddenCheckbox />
      <S.CheckedBall checked={checked}></S.CheckedBall>
    </S.CheckboxContainer>
  );
};

export default ThemeButton;
