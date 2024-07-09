import React, { useEffect, useState } from "react";
import "./Testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3300/testimonials");
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
      <div className="bg-red-50">
        <h1 className="text-2xl font-semibold pt-10 text-center">
          Testimonials
        </h1>
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
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <div className="testimonial-slide text-center ">
                  <h2 className="font-bold text-5xl">{testimonial.name}</h2>
                  <p className="px-96">{testimonial.testimonial}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
