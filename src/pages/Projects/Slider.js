import * as S from "./Styles";

import { Navigation, Pagination, A11y } from "swiper";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles

import { ProjectsData } from "./ProjectsData";
import { useThemeContext } from "../../hooks/useThemeToggler";

const Slider = () => {
  const { theme } = useThemeContext();

  return (
    <S.Pagination
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ProjectsData.map((project, index) => {
        return (
          <SwiperSlide key={index}>
            <S.ContainerSlider>
              <S.ContainerInfo>
                <S.TitleProjects>{project.title}</S.TitleProjects>
                <S.Paragraph style={{ color: theme.color }}>
                  Descrição: {project.description}
                </S.Paragraph>
                <S.Paragraph style={{ color: theme.color }}>
                  Tecnologias: {project.tecnologies}
                </S.Paragraph>
              </S.ContainerInfo>
              <a href={project.github} target="_blank" rel="noreferrer">
                <S.Picture src={project.src} alt={project.alt} />
              </a>
            </S.ContainerSlider>
          </SwiperSlide>
        );
      })}
    </S.Pagination>
  );
};

export default Slider;
