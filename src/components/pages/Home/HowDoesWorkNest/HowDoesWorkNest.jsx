import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

const HowDoesWorkNest = () => {
  const [procedures, setProcedures] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("http://localhost:3300/how-does-nest-works")
          .then((res) => res.json())
          .then((data) => {
            setProcedures(data);
            setLoading(false);
          });
      } catch (error) {}
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
      <div className="container mx-auto">
        {procedures.map((procedure) => (
          <div className="flex justify-between items-center">
            <div className="w-full relative">
              <img
                className="absolute top-0"
                src={procedure.mainImage}
                alt=""
              />
              <img src="https://i.ibb.co/Trqm3JT/works-shape1.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-red-950 mb-2">
                {procedure.subtitle}
              </h3>
              <h1 className="font-bold text-3xl text-red-900 mb-2">
                {procedure.title}
              </h1>
              <p>{procedure.description}</p>
              <div className="mt-4 ">
                {procedure.steps.map((step) => (
                  <div className="flex justify-between gap-4 mb-4">
                    <p>
                      <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
                    </p>
                    <div>
                      <h2 className="text-2xl font-bold text-red-900 mb-2">
                        {step.title}
                      </h2>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoesWorkNest;
