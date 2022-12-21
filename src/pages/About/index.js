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
    const showMenu = useMenuContext()
    
  return (
    <S.ContainerAbout style={{ backgroundColor: theme.background }} showmenu={showMenu}>
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
          <a
            href="https://export-download.canva.com/VvAyE/DAE6N3VvAyE/403/0-42817007312.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20221201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221201T052810Z&X-Amz-Expires=59722&X-Amz-Signature=eb703482fde4f0883ff7ded716c85e30b6219e7101f1af4e4e7e1a603ef79d42&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Desenvolvedor%2520front%2520end%2520-%2520Anderson%2520Rodrigo%2520de%2520Oliveira%2520Batista.pdf&response-expires=Thu%2C%2001%20Dec%202022%2022%3A03%3A32%20GMT"
            download
          >
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
