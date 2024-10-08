import React, { useEffect, useState } from "react";
import "./CompanyVideo.css";
import Lottie from "lottie-react";
import Play from "../../../../assets/play.json";

const CompanyVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://nest-venture-ltd-server.vercel.app/video")
          .then((res) => res.json())
          .then((data) => {
            setVideos(data);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error fetching videos data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleVideo = () => {
    setShowVideo(true); // Always set showVideo to true when clicking the play icon
  };
  const url =
    "https://www.youtube.com/embed/WAA35lxpzuc?rel=0&amp;modestbranding=1&amp;autohide=1&amp;mute=1&amp;showinfo=0&amp;autoplay=1";
  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
      <div>
        {videos.map((video, index) => (
          <div key={index} className="relative mb-20">
            {!showVideo && (
              <div className="clip-custom h-full w-full flex flex-col justify-center items-center">
                <img
                  className="h-[600px] w-full"
                  src={video.thumbnail}
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
                    {video.title}
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
                  <div class="iframe-container">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.videoUrl}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyVideo;
