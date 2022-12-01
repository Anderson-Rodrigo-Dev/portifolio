import { useThemeContext } from "../../hooks/useThemeToggler";
import * as S from "./Styles"
import Silder from "./Slider";


const Projects = () => {

  const {theme} = useThemeContext()

  return (
    <S.ContainerProject style={{backgroundColor: theme.background}}>
      <Silder />
    </S.ContainerProject>
  );
};

export default Projects;
