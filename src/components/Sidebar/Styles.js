import styled from "styled-components";

import {
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Aside = styled.aside`
  background-color: #2c2c2c;
  height: 100vh;
  width: 20%;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
`;

export const Picture = styled.img`
  border-radius: 50%;
  max-width: 400px;
  min-width: 180px;
  object-fit: cover;
  width: 70%;
`;

export const Navigate = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  text-align: start;
`;

export const NavItens = styled(NavLink)`
  color: #fefefe;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  min-width: 130px;
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
