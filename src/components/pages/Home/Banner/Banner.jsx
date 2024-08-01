import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "./Banner.css"; // Import custom CSS
// src={isObjectEmpty(slide.image) ? slide.mainImage : slide.image}
const Banner = () => {
  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3300/slider");
        const data = await response.json();
        setSlider(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchData();
  }, []);
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }
  const customButtonStyles = {
    color: "white",
    backgroundColor: "#7F1D1D",
  };

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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-[700px] w-full object-cover"
              src={`http://localhost:3300${
                slide.image ? slide.image : slide.mainImage
              }`}
              alt={slide.title}
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold p-4 bg-red-400">
                {slide.title}
              </h2>
              <p className="text-lg">{slide.description}</p>
              {slide.link && (
                <a
                  href={slide.link}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation buttons */}
      <div
        className="swiper-button-next swiper-button"
        style={customButtonStyles}
      ></div>
      <div
        className="swiper-button-prev swiper-button"
        style={customButtonStyles}
      ></div>
    </div>
  );
};

export default Banner;
