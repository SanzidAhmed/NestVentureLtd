import React, { useEffect, useState } from "react";

const GrowthAndInovation = () => {
  const [growth, setGrowth] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/growth")
      .then((res) => res.json())
      .then((data) => {
        setGrowth(data);
      });
  }, []);

  return (
    <div className="bg-red-50">
      <div className="container mx-auto max-w-[1320px]">
        <h1 className="text-2xl font-semibold pt-10 text-center">
          Empowering Diverse Industries
        </h1>
        <h1 className="text-4xl font-bold mt-4 text-center text-red-900">
          Business Box Fuels Growth and Innovation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {growth.slice(0, 4).map((companyGrowth) => (
            <div key={companyGrowth._id} className="pb-16">
              <div className="card bg-base-100 w-full shadow-xl relative rounded-none">
                <div className="relative">
                  <img
                    src={`http://localhost:3300${companyGrowth.image}`}
                    alt="Shoes"
                    className="w-full h-[350px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="absolute bottom-20 text-2xl left-6">
                  <h2 className="text-white">{companyGrowth.title}</h2>
                </div>
                <div className="absolute bottom-6 left-6">
                  <button className="btn bg-red-900 border-none text-white">
                    {companyGrowth.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthAndInovation;
