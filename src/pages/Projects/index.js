import { useThemeContext } from "../../hooks/useThemeToggler";
import * as S from "./Styles"
import Silder from "./Slider";
import { useMenuContext } from "../../hooks/useMenuContext";


const Projects = () => {

  const {theme} = useThemeContext()
  const {showMenu} = useMenuContext()

  return (
    <S.ContainerProject style={{backgroundColor: theme.background}} showMenu={showMenu}>
      <Silder />
    </S.ContainerProject>
  );
};

export default Projects;
