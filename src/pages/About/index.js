import * as S from "./Styles";

import curriculo from "../../assets/Desenvolvedor front end - Anderson Rodrigo de Oliveira Batista.pdf"

import { useState, useEffect } from "react";
import { Button } from "../../components/Button";

import { useThemeContext } from "../../hooks/useThemeToggler";
import { useMenuContext } from "../../hooks/useMenuContext";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

const About = () => {
  const [clicked, setClicked] = useState(
    getSessionStorageOrDefault("download", false)
  );

  useEffect(() => {
    sessionStorage.setItem("download", JSON.stringify(clicked));
  }, [clicked]);

  const { theme } = useThemeContext();
  const showMenu = useMenuContext();

  return (
    <S.ContainerAbout
      style={{ backgroundColor: theme.background }}
      showmenu={showMenu}
    >
      <S.ContainerInfo>
        <S.AboutMe style={{ color: theme.color }}>Olá, eu sou</S.AboutMe>
        <S.TitleName>Anderson Rodrigo!</S.TitleName>
        <S.AboutMe style={{ color: theme.color, marginBottom: "30px" }}>
          Sou formado em Design Gráfico pela Universidade Potiguar (UnP) e estou
          em transição de carreira. Em tecnologia, possuo conhecimento em HTML,
          CSS, JavaScript, TypeScript e React. Em React estou aperfeiçoando meus
          conhecimentos em styled-components, hooks, react-router e outros
          componentes do React. <br />Possuo um perfil analítico, focado e organizado.
          Gosto de novos desafios e aprender com eles.<br /> Nas horas vagas eu sou
          aspirante a gamer, amo jogos retro e alguns novos.
        </S.AboutMe>

        {clicked ? (
          <Button clicked={clicked}>
            <S.IconDownload />
          </Button>
        ) : (
          <a href={curriculo} download>
            <Button
              onClick={() => setClicked(true)}
              clicked={clicked}
              style={{ color: theme.color }}
            >
              Baixar CV
            </Button>
          </a>
        )}
      </S.ContainerInfo>
    </S.ContainerAbout>
  );
};
export default About;
