'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  

  const slides = [

    { 
      id: 1, 
      name: 'Weather Forecast', 
      role: "Um projeto que integra a API da OpenWeather para fornecer previsões do tempo em tempo real para qualquer localidade, com suporte a buscas por cidade, país e CEP.", 
      logoUrl: "/nubank-logo.png", 
      avatarUrl: "/avatar2.png",
      backgroundUrl: "/weather-background.png",
      url: "https://weatherforecast-project-nine.vercel.app",      
    },

    { 
      id: 2, 
      name: 'To-do List', 
      role: "Uma lista de tarefas simples, mas altamente útil, para ajudar você a se organizar e não esquecer de nada importante!", 
      logoUrl: "/stack-overflow-logo.png", 
      avatarUrl: "/todolist",
      backgroundUrl: "/todolist-background.png",
      url: "/todolist",
    },
    
    { 
      id: 3, 
      name: 'Lorem ipsum', 
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      logoUrl: "/luizalabs-logo.png", 
      avatarUrl: "/avatar3.png",
      backgroundUrl: "/lorem.png",
      url: "",      
    },
    { 
      id: 4, 
      name: 'Lorem ipsum', 
      role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      logoUrl: "/google-logo.png", 
      avatarUrl: "/avatar4.png",
      backgroundUrl: "/lorem.png",
      url: "",      
    },
  ];
  
  const handleCardClick = (slide) => {
    if (slide.url !== "") {
      window.location.href = slide.url;
    } else {
      toast.warning("Projeto em andamento!");
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className={styles.slide} 
            onClick={() => handleCardClick(slide)}
          >
            <h3 className={styles.name}>{slide.name}</h3>
            <div className={styles.card}>
              <img 
                src={slide.backgroundUrl} 
                alt={slide.name} 
                className={styles.backgroundImage} 
              />
              <section></section>
              <div className={styles.descricao}>
              </div>
            </div>
              <p className={styles.role}>{slide.role}</p>
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default MyCarousel;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.slickNext} onClick={onClick}>
      &gt;
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.slickPrev} onClick={onClick}>
      &lt;
    </div>
  );
};
