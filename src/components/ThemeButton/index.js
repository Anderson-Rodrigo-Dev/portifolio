import * as S from "./Styles"
import { useThemeContext } from "../../hooks/useThemeToggler";

const ThemeButton = (props) => {
  const {theme} = useThemeContext()

  return (
    <S.CheckboxContainer  {...props}>
      <S.CheckedBall theme={theme}></S.CheckedBall>
    </S.CheckboxContainer>
  );
};

export default ThemeButton;
