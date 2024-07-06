import React, { useState } from "react";
import "./CompanyVideo.css";
import Lottie from "lottie-react";
import Play from "../../../../assets/play.json";

const CompanyVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(true); // Always set showVideo to true when clicking the play icon
  };

  return (
    <div className="relative mb-20">
      {!showVideo && (
        <div className="clip-custom h-full w-full flex flex-col justify-center items-center">
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co/twGhdC1/jarritos-mexican-soda-k-FEb8yigiu-Q-unsplash.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center cursor-pointer">
            <Lottie
              animationData={Play}
              className="text-2xl text-red-600"
              style={{ width: "200px", height: "200px" }} // Adjust width and height here
              onClick={toggleVideo}
            />
            <p className="text-white text-center text-3xl w-1/2">
              Watch Our Latest Video For <br /> Better Innovation
            </p>
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyVideo;
