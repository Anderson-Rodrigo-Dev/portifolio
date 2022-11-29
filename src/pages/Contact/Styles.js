import styled from "styled-components";

import {
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

export const ContainerContact = styled.div`
  align-items: center;
  background-color: #b79999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const Contact = styled.div`
  max-width: 650px;
  margin-bottom: 30px;
`;

export const TitleContact = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 25rem;
`;

export const Networks = styled.a`
  display: flex;
  cursor: pointer;
  gap: 10px;
  color: #000;
  font-size: 1rem;
  width: 9.375rem;
  ${"" /* margin: 0 30px 50px 0; */}

  &:nth-child(-n+2) {
    margin-bottom: 50px;
  }

  &:nth-child(odd) {
    margin-right: 30px;
  }
`;

export const IconWhatsapp = styled(RiWhatsappFill)`
  color: #2c2020;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const IconLinkedin = styled(RiLinkedinBoxFill)`
  color: #2c2020;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const IconGithub = styled(RiGithubFill)`
  color: #2c2020;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const IconInstagram = styled(RiInstagramFill)`
  color: #2c2020;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

export const NetworksParagraph = styled.p`
  cursor: pointer;
  font-size: 20px;
`
