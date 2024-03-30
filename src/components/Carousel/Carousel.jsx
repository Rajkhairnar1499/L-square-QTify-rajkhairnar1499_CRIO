import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftNavigationCarousel from "./LeftNavigationCarousel";
import RightNavigationCarousel from "./RightNavigationCarousel";

const Carousel = ({ data, component }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={"40"}
        allowTouchMove
      >
        <LeftNavigationCarousel />
        <RightNavigationCarousel />
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
