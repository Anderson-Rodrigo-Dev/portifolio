import styled from "styled-components";

import {
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

export const ContainerContact = styled.section`
  align-items: center;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 30px;

  @media(max-width: 1000px){
    display: ${({ showMenu }) => showMenu ? "none" : "flex"};
    width: 100vw;
    height: 100%;
    min-height: 100vh
  }
`;

export const Contact = styled.div`
  max-width: 650px;
  padding: 30px;
  width: 100%;
`;

export const TitleContact = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #6c63ff;

  @media (max-width: 500px){
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fefefe;
  margin-bottom: 30px;
`;

export const ContainerIcons = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 25rem;
  width: 100%;
  margin-top: 10px;
`;

export const Networks = styled.a`
  display: flex;
  cursor: pointer;
  gap: 10px;
  color: #000;
  font-size: 1rem;
  width: 150px;

  &:nth-child(-n + 2) {
    margin-bottom: 50px;
  }

  &:nth-child(odd) {
    margin-right: 30px;
  }

  @media (max-width: 600px){
    
    &:nth-child(-n + 4) {
    margin: 0 10px 10px 0;;
  }
  }
`;

export const IconWhatsapp = styled(RiWhatsappFill)`
  color: #6c63ff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const IconLinkedin = styled(RiLinkedinBoxFill)`
  color: #6c63ff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const IconGithub = styled(RiGithubFill)`
  color: #6c63ff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const IconInstagram = styled(RiInstagramFill)`
  color: #6c63ff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const NetworksParagraph = styled.p`
  cursor: pointer;
  font-size: 20px;
  color: #fefefe;
`;
