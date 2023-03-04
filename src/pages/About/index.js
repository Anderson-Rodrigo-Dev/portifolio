import * as S from "./Styles";

import curriculo from "../../assets/Desenvolvedor front end - Anderson Rodrigo de Oliveira Batista.pdf";

import { useState } from "react";
import { Button } from "../../components/Button";

import { useThemeContext } from "../../hooks/useThemeToggler";
import { useMenuContext } from "../../hooks/useMenuContext";


const About = () => {
  const [clicked, setClicked] = useState(false);

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
          em transição de carreira.
          <br /> Em tecnologia, possuo conhecimento em HTML, CSS, JavaScript,
          TypeScript e React. Em React estou aperfeiçoando meus conhecimentos em
          styled-components, hooks, react-router e outros componentes do React.
          <br /> Sou analítico, focado e organizado. Gosto de novos desafios e
          de aprender com eles. <br />
          Nas horas vagas um dos meus hobby favoritos são os gamer, amo jogos
          retro e alguns novos entre outras coisas do mundo geek.
        </S.AboutMe>
        <a href={curriculo} download>
          {clicked ? (
            <Button clicked={clicked}>
              <S.IconDownload />
            </Button>
          ) : (
            <Button
              onClick={() => setClicked(true)}
              clicked={clicked}
              style={{ color: theme.color }}
            >
              Baixar CV
            </Button>
          )}
        </a>
      </S.ContainerInfo>
    </S.ContainerAbout>
  );
};
export default About;
