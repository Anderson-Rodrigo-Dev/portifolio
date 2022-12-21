import styled from "styled-components";
import { RiDownload2Fill } from "react-icons/ri";

export const ContainerAbout = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #111111;
  display: flex;
  width: 80%;
  padding: 30px;

  @media (max-width: 1000px) {
    display: ${({ showmenu }) => (showmenu.showMenu ? "none" : "flex")};
    width: 100vw;
    height: 100%;
    min-height: 100vh;
  }
`;

export const ContainerInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 80%;

  @media (max-width: 1000px) {
    margin: 50px auto;
  }
`;

export const TitleName = styled.h1`
  animation: blinkCursor 500ms steps(28) infinite normal,
    typing 2s steps(28) 1s normal;
  border-right: 2px solid #fefefe;
  color: #6c63ff;
  font-size: 50px;
  font-weight: 700;
  overflow: hidden;
  padding: 10px 10px 10px 0;
  white-space: nowrap;

  @keyframes blinkCursor {
    from {
      border-right-color: #fefefe;
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes typing {
    from {
      width: 0px;
    }
    to {
      width: 450px;
    }
  }

  @media (max-width: 700px) {
    font-size: 40px;
  }

  @media (max-width: 580px) {
    font-size: 30px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const AboutMe = styled.p`
  font-size: 16px;
  text-align: justify;
  color: #fefefe;

  @media (max-width: 500px) {
    text-align: left;
  }
`;

export const IconDownload = styled(RiDownload2Fill)`
  color: #6c63ff;
  height: 2rem;
  width: 2rem;
`;
