import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { useThemeContext } from "../../hooks/useThemeToggler";
import * as S from "./Styles";
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          facere vero aspernatur fugiat repellendus, harum ex. Hic sunt
          inventore beatae debitis quisquam, quam nesciunt quod odit ipsam
          veritatis recusandae vitae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi accusantium odit voluptatum doloremque
          itaque ad voluptatibus perferendis, tenetur numquam. Aliquam
          voluptatem eos praesentium consequatur amet autem cupiditate rerum
          incidunt molestiae?Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Nostrum facere vero aspernatur fugiat repellendus, harum ex. Hic
          sunt inventore beatae debitis quisquam, quam nesciunt quod odit ipsam
          veritatis recusandae vitae?
        </S.AboutMe>

        {clicked ? (
          <Button clicked={clicked}>
            <S.IconDownload />
          </Button>
        ) : (
          <a href="../../../public/curriculo.pdf" download>
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
