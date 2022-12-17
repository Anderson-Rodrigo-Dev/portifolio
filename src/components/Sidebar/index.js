import * as S from "./Styles";

import { Link } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeToggler";

const Sidebar = () => {
  const { theme } = useThemeContext();

  return (
    <S.Aside style={{ backgroundColor: theme.SidebarBackground }}>
      <S.IconClose />
      <S.Container>
        <Link to="/">
          <S.Picture
            src="https://via.placeholder.com/900x900"
            alt="placeholder img"
          />
        </Link>

        <S.Navigate>
          <li>
            <S.NavItens to="/" style={{ color: theme.color }}>
              Sobre mim
            </S.NavItens>
          </li>
          <li>
            <S.NavItens to="/projects" style={{ color: theme.color }}>
              Projetos
            </S.NavItens>
          </li>
          <li>
            <S.NavItens to="/skills" style={{ color: theme.color }}>
              Conhecimento
            </S.NavItens>
          </li>
          <li>
            <S.NavItens to="/contact" style={{ color: theme.color }}>
              Contato
            </S.NavItens>
          </li>
        </S.Navigate>

        <S.ContainerIcons>
          <a
            href="https://www.linkedin.com/in/anderson-rodrigo-oliveira/"
            target="_blank"
            rel="noreferrer"
          >
            <S.IconLinkedin />
          </a>

          <a
            href="https://github.com/Anderson-Rodrigo-Dev"
            target="_blank"
            rel="noreferrer"
          >
            <S.IconGithub />
          </a>

          <a
            href="https://wa.me/5541996064799"
            target="_blank"
            rel="noreferrer"
          >
            <S.IconWhatsapp />
          </a>
        </S.ContainerIcons>
      </S.Container>
    </S.Aside>
  );
};

export default Sidebar;
