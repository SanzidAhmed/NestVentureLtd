import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";
import Steps from "./Steps";

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
      <div className="container mx-auto max-w-[1320px]">
        {procedures.map((procedure) => (
          <div className="flex justify-between gap-8 items-center">
            <div className="w-full relative">
              <img
                className="absolute top-0 h-[600px]"
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
              <Steps></Steps>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoesWorkNest;
