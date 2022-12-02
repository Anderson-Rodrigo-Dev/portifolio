import styled from "styled-components";

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";
import {TbCircleCheck} from "react-icons/tb"

export const ContainerSkills = styled.section`
  align-items: center;
  justify-content: center;
  background-color: #111111;
  display: flex;
  width: 80%;
  gap: 100px;
  flex-wrap: wrap;
`;

export const ContainerSkill = styled.div`
  width: 300px;
  background-color: #2c2020;
  border-radius: 30px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSkills = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #6c63ff;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ListItem = styled.li`
    display:flex;
    gap: 20px;
    align-items: center;
`

export const IconHTML = styled(SiHtml5)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;

export const IconCSS = styled(SiCss3)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;

export const IconJavaScript = styled(SiJavascript)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;

export const IconReact = styled(SiReact)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;

export const IconGit = styled(SiGit)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;

export const IconRocket = styled(TbCircleCheck)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;