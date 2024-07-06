import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css"; // Import custom CSS

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-[700px] w-full object-cover"
              src={slide.image}
              alt={slide.title}
            />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
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
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Banner;
