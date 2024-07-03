import React, { useState } from "react";
import "./CompanyVideo.css";
import { FaRegPlayCircle } from "react-icons/fa";

const CompanyVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="relative">
      {!showVideo && (
        <div className="clip-custom h-96 w-full">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/twGhdC1/jarritos-mexican-soda-k-FEb8yigiu-Q-unsplash.jpg"
            alt=""
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={toggleVideo}
          >
            <FaRegPlayCircle className="text-9xl text-red-600" />
          </div>
        </div>
      )}
      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setShowVideo(false)}
            >
              &#x2715;
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/91Pt4gv-Cxs?si=ShVb9RjfnGuen73f"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyVideo;
