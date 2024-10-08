import React, { useEffect, useState } from "react";

const GrowthAndInovation = () => {
  const [growth, setGrowth] = useState([]);

  useEffect(() => {
    fetch("https://nest-venture-ltd-server.vercel.app/growth")
      .then((res) => res.json())
      .then((data) => {
        setGrowth(data);
      });
  }, []);
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return (
    <div className="bg-red-50">
      <div className="container mx-auto max-w-[1320px]">
        <h1 className="text-2xl font-semibold pt-10 text-center text-black">
          Empowering Diverse Industries
        </h1>
        <h1 className="text-4xl font-bold mt-4 text-center text-red-900">
          Business Box Fuels Growth and Innovation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {growth.map((companyGrowth) => (
            <div key={companyGrowth._id} className="pb-16">
              <div className="card bg-base-100 w-full shadow-xl relative rounded-none">
                <div className="relative">
                  <img
                    src={
                      isObjectEmpty(companyGrowth.image)
                        ? companyGrowth.mainImage
                        : companyGrowth.image
                    }
                    alt="Shoes"
                    className="w-full h-[300px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="  absolute bottom-16 text-2xl left-6">
                  <h2 className=" text-white font-bold text-xl">
                    {companyGrowth.title}
                  </h2>
                </div>
                <div className="  absolute bottom-6 left-6">
                  <button className="text-lg font-bold text-red-900">
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
