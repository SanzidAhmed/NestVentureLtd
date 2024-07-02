import React from "react";
import { FaChartLine } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-24">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">About Company </h3>
          <h1 className="font-bold text-4xl mt-4 mb-8 w-4/5">
            We Help Entrepreneurs To Achieve Their Desire Goals{" "}
          </h1>
          <p className="w-4/5">
            At NEST, we empower entrepreneurs to achieve their desired goals
            through comprehensive training, expert consultancy, strategic
            networking, and valuable investment opportunities. Join us to turn
            your vision into reality and take your business to the next level.
          </p>
          <div className="flex justify-between gap-4  mt-5">
            <div className="relative">
              <FaChartLine className="absolute top-2  text-4xl" />
              <h1 className="text-2xl p-6 bg-red-300 rounded-full "></h1>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3">
                Investment Support
              </h2>
              <p className="w-5/6">
                NEST Ventures Limited offers impact investment to new
                entrepreneurs and SMEs, fueling their growth and success. We
                provide the financial support needed to transform innovative
                ideas into thriving businesses, making a positive impact on the
                community and economy. Partner with us to turn your
                entrepreneurial vision into reality.
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4 mt-5">
            <div className="relative">
              <FaPeopleGroup className="absolute top-2  text-4xl" />
              <h1 className="text-2xl p-6 bg-red-300 rounded-full "></h1>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3">
                Business Consultancy Support
              </h2>
              <p className="w-5/6">
                NEST Ventures Limited offers expert business consultancy to new
                entrepreneurs and SMEs, guiding you through every step of your
                business journey. Our tailored advice and strategies help you
                overcome challenges and achieve sustainable growth. Partner with
                us for the expertise you need to succeed.
              </p>
            </div>
          </div>
          <button className="btn bg-red-600 mt-10 text-2xl px-8 text-white">
            Read More
          </button>
        </div>
        <img
          className="w-full h-1/6 rounded-tl-[60px]"
          src="https://i.ibb.co/VmTVQnT/about4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
