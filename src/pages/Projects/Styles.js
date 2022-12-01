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
`;

export const ContainerSlider = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
`;

export const TitleProjects = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #6c63ff;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #fefefe;
  text-align: justify;
  margin-bottom: 10px;
`;

export const Picture = styled.img`
  width: 80%;
  cursor: pointer;
  max-height: 400px;
  object-fit: cover;
`;

export const Pagination = styled(Swiper)`
  width: 900px;

  &.swiper-pagination-bullet,
  span {
    background-color: #6c63ff;
    opacity: 0.7;

    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;
