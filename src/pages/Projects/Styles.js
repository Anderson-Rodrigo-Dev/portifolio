import styled from "styled-components";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ContainerProject = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #111111;
  display: flex;
  width: 80%;
  padding: 30px;

  @media (max-width: 1000px) {
    display: ${({ showMenu }) => (showMenu ? "none" : "flex")};
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 720px) {
    padding: 60px;
  }

  @media (max-width: 450px) {
    padding: 60px 30px;
  }
`;

export const ContainerSlider = styled.div`
  margin: 0 auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const TitleProjects = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #6c63ff;

  @media (max-width: 720px) {
    font-size: 24px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    align-self: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #fefefe;
  text-align: justify;
  margin-bottom: 10px;
`;

export const Picture = styled.img`
  width: 80%;
  cursor: pointer;
  max-height: 400px;
  object-fit: cover;
  margin-top: 30px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Pagination = styled(Swiper)`
  width: 900px;

  &.swiper-pagination-bullet,
  span {
    background-color: #6c63ff;
    opacity: 0.7;

    &.swiper-pagination-bullet-active {
      background-color: red;
      opacity: 1;
    }
  }

  @media (max-width: 720px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;
