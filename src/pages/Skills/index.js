import * as S from "./Styles";
import { useThemeContext } from "../../hooks/useThemeToggler";

const Skills = () => {
  const { theme } = useThemeContext();
  return (
    <S.ContainerSkills style={{ backgroundColor: theme.background }}>
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
          <S.ListItem><S.IconRocket /> Ética</S.ListItem>
          <S.ListItem><S.IconRocket /> Proatividade</S.ListItem>
          <S.ListItem><S.IconRocket /> Trabalho em Equipe</S.ListItem>
          <S.ListItem><S.IconRocket /> Organização</S.ListItem>
          <S.ListItem><S.IconRocket /> Comunicação</S.ListItem>
        </S.List>
      </S.ContainerSkill>
    </S.ContainerSkills>
  );
};

export default Skills;
