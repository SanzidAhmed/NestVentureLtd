import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css"; // Import custom CSS

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[700px] w-full object-cover"
            src="https://i.ibb.co/Gthp5Vh/christian-dubovan-Y-x747-Yshlw-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[700px] w-full object-cover"
            src="https://i.ibb.co/JH04gJG/austin-distel-go-FBjl-Qi-ZFU-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      {/* Navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Banner;
