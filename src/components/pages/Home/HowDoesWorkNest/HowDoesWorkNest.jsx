import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import Steps from "./Steps";

const HowDoesWorkNest = () => {
  const [procedures, setProcedures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://nest-venture-ltd-server.vercel.app/how-does-nest-works")
          .then((res) => res.json())
          .then((data) => {
            setProcedures(data);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
      <div className="container mx-auto px-4 max-w-[1320px]">
        {procedures.map((procedure) => (
          <div
            key={procedure._id}
            className="flex flex-col lg:flex-row justify-between gap-8 items-center mb-10"
          >
            <div className="w-full relative mb-6 lg:mb-0">
              <img
                className=" w-full h-[300px] lg:h-full object-cover"
                src="https://i.ibb.co/Trqm3JT/works-shape1.png"
                alt="Shape"
              />
              <img
                className="absolute top-0 h-[300px] lg:h-full object-cover w-full"
                src={
                  isObjectEmpty(procedure.image)
                    ? procedure.mainImage
                    : procedure.image
                }
                alt="Main"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-bold text-red-950 mb-2">
                {procedure.subtitle}
              </h3>
              <h1 className="font-bold text-2xl lg:text-3xl text-red-900 mb-4">
                {procedure.title}
              </h1>
              <p className="mb-4">{procedure.description}</p>
              <Steps />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoesWorkNest;
