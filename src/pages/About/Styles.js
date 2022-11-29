import styled from "styled-components";
import { RiDownload2Fill } from "react-icons/ri";

export const ContainerAbout = styled.div`
  align-items: center;
  background-color: #b79999;
  display: flex;
  width: 80%;
`;

export const ContainerInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  max-width: 900px;
  width: 80%;
`;

export const TitleName = styled.h1`
    animation: blinkCursor 500ms steps(28) infinite normal, typing 2s steps(28) 1s normal;
    border-right: 2px solid #2C2020;
    font-size: 50px;
    font-weight: 700;
    overflow: hidden;
    padding-right: 10px;
    white-space: nowrap;

    @keyframes blinkCursor{
        from{
            border-right-color: #2C2020;
        }
        to{
            border-right-color: transparent;
        }
    }

    @keyframes typing {
        from{
            width: 0px
        }
        to{
            width: 450px;
        }
    }
`

export const AboutMe = styled.p`
  font-size: 16px;
  text-align: justify;
`;

export const IconDownload = styled(RiDownload2Fill)`
    color: #2C2020;
    height: 2rem;
    width: 2rem;
`