import { themes } from "../../contexts/ThemeContext/Styles";
import { useThemeContext } from "../../hooks/useThemeToggler"; 
import ThemeButton from "../ThemeButton";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useThemeContext();


  const HandleTheme = (e) => {
    e.preventDefault()
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }
  return (
    <div>
      <ThemeButton
        onClick={HandleTheme}
      />
    </div>
  );
};
