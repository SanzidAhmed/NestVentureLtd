import React from "react";
import "./Testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="bg-red-50">
      <h1 className="text-2xl font-semibold pt-10 text-center">Testimonials</h1>
      <h1 className="text-3xl font-semibold pt-2 pb-10 text-center">
        What Our Clients Says
      </h1>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial-slide text-center ">
              <h2 className="font-bold text-5xl">John Doe</h2>
              <p className="px-96">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                facilis eveniet porro aliquid! Natus minus quas, qui quis
                laborum minima mollitia odio deserunt vitae tempore animi.
                Numquam consequuntur facilis necessitatibus obcaecati possimus?
                Veniam reprehenderit fuga fugiat debitis harum labore. Illum
                odit, vitae ex alias odio quam rerum aperiam maiores non!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-slide text-center ">
              <h2 className="font-bold text-5xl">John Smith</h2>
              <p className="px-96">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                facilis eveniet porro aliquid! Natus minus quas, qui quis
                laborum minima mollitia odio deserunt vitae tempore animi.
                Numquam consequuntur facilis necessitatibus obcaecati possimus?
                Veniam reprehenderit fuga fugiat debitis harum labore. Illum
                odit, vitae ex alias odio quam rerum aperiam maiores non!
              </p>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
