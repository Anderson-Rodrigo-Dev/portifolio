import * as S from "./Styles";

import { Button } from "../../components/Button";
import { useThemeContext } from "../../hooks/useThemeToggler";

const Contact = () => {
  const {theme} = useThemeContext()

  return (
    <S.ContainerContact style={{backgroundColor: theme.background}}>
      <S.Contact>
        <S.TitleContact>Entre em Contato</S.TitleContact>
        <S.Paragraph style={{color: theme.color}}>
          Atualmente estou buscando novas oportunidades, então se quiser entrar
          em contato ou, somente dar um oi ou feedback, estarei feliz em te
          receber e retornar assim que possível!
        </S.Paragraph>
        <a href="mailto:andersonrodrigodev@gmail.com?subject=Oportunidade de trabalho&body=Olá, tudo bem?"><Button style={{color: theme.color}}>Diga Olá!</Button></a>
      </S.Contact>
      <div>
        <S.TitleContact>Minhas redes sociais</S.TitleContact>
        <S.ContainerIcons>
          <S.Networks
            href="https://www.linkedin.com/in/anderson-rodrigo-oliveira/"
            target="_blank"
            rel="noreferrer"
          >
            <S.IconLinkedin />
            <S.NetworksParagraph style={{color: theme.color}}>LinkedIn</S.NetworksParagraph>
          </S.Networks>

          <S.Networks
            href="https://github.com/Anderson-Rodrigo-Dev"
            target="_blank"
            rel="noreferrer"
          >
            <S.IconGithub />
            <S.NetworksParagraph style={{color: theme.color}}>GitHub</S.NetworksParagraph>
          </S.Networks>

          <S.Networks href="#">
            <S.IconInstagram />
            <S.NetworksParagraph style={{color: theme.color}}>Instagram</S.NetworksParagraph>
          </S.Networks>

          <S.Networks
            href="https://wa.me/5541996064799"
            target="_blank"
            rel="noreferrer"
          >
            <S.IconWhatsapp />
            <S.NetworksParagraph style={{color: theme.color}}>Whatsapp</S.NetworksParagraph>
          </S.Networks>
        </S.ContainerIcons>
      </div>
    </S.ContainerContact>
  );
};

export default Contact;
