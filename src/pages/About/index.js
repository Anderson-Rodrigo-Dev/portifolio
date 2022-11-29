import { Button } from "../../components/Button";
import * as S from "./Styles";

const About = () => {
  return (
    <S.ContainerAbout>
      <S.ContainerInfo>
        <p>Olá, eu sou</p>
        <S.TitleName>Anderson Rodrigo!</S.TitleName>
        <S.AboutMe>
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
        <a
          href="https://export-download.canva.com/VvAyE/DAE6N3VvAyE/399/0-42537700313.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20221129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221129T133414Z&X-Amz-Expires=20255&X-Amz-Signature=01425cc9c92861681beabece250fabba0c3a888b971ca58859fcaff1d4a57e15&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Curriculo%2520Anderson.pdf&response-expires=Tue%2C%2029%20Nov%202022%2019%3A11%3A49%20GMT"
          download
        >
          <Button>Baixar CV</Button>
        </a>
      </S.ContainerInfo>
    </S.ContainerAbout>
  );
};
export default About;
