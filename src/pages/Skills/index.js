import * as S from "./Styles";
import { useThemeContext } from "../../hooks/useThemeToggler";
import { useMenuContext } from "../../hooks/useMenuContext";

const Skills = () => {
  const { theme } = useThemeContext();
  const {showMenu} = useMenuContext()

  return (
    <S.ContainerSkills style={{ backgroundColor: theme.background }} showMenu={showMenu}>
      <S.ContainerSkill style={{ backgroundColor: theme.SidebarBackground }}>
        <S.TitleSkills>Hard Skills</S.TitleSkills>
        <S.List style={{color: theme.color}}>
          <S.ListItem><S.IconHTML /> HTML5</S.ListItem>
          <S.ListItem><S.IconCSS /> CSS3</S.ListItem>
          <S.ListItem><S.IconJavaScript /> JavaScript</S.ListItem>
          <S.ListItem><S.IconReact /> ReactJs</S.ListItem>
          <S.ListItem><S.IconGit /> Git</S.ListItem>
        </S.List>
      </S.ContainerSkill>
      <S.ContainerSkill style={{ backgroundColor: theme.SidebarBackground }}>
        <S.TitleSkills>Soft Skills</S.TitleSkills>
        <S.List style={{color: theme.color}}>
          <S.ListItem><S.IconCheck /> Ética</S.ListItem>
          <S.ListItem><S.IconCheck /> Proatividade</S.ListItem>
          <S.ListItem><S.IconCheck /> Trabalho em Equipe</S.ListItem>
          <S.ListItem><S.IconCheck /> Organização</S.ListItem>
          <S.ListItem><S.IconCheck /> Comunicação</S.ListItem>
        </S.List>
      </S.ContainerSkill>
    </S.ContainerSkills>
  );
};

export default Skills;
