import * as S from "./Styles";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <S.Aside>
      <S.Container>
        <Link to="/">
          <S.Picture
            src="https://via.placeholder.com/900x900"
            alt="placeholder img"
          />
        </Link>

        <S.Navigate>
          <li>
            <S.NavItens to="/">Sobre mim</S.NavItens>
          </li>
          <li>
            <S.NavItens to="/projects">Projetos</S.NavItens>
          </li>
          <li>
            <S.NavItens to="/skills">Conhecimento</S.NavItens>
          </li>
          <li>
            <S.NavItens to="/contact">Contato</S.NavItens>
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
