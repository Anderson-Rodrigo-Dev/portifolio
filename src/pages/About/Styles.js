import styled from "styled-components";

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
    animation: blinkCursor 500ms steps(23) infinite normal, typing 2s steps(23) 1s normal;
    border-right: 2px solid #2C2020;
    font-size: 64px;
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
            width: 570px;
        }
    }
`

export const AboutMe = styled.p`
  font-size: 20px;
  text-align: justify;
`;

export const ButtonCV = styled.button`
    background-color: transparent;
    border: 2px solid #2C2020;
    border-radius: 13px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    height: 80px;
    margin-top: 30px;
    width: 200px;
`
