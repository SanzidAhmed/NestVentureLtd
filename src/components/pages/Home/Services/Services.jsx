import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("http://localhost:3300/services")
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error fetching services data:", error);
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
      <div className="container mx-auto px-4 pb-16 max-w-[1320px]">
        <h3 className="text-center text-xl md:text-3xl font-semibold mt-10">
          Services
        </h3>
        <h2 className="text-center text-xl md:text-5xl font-semibold mt-6 mb-10">
          Exceptional NEST Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="card bg-base-100 w-full shadow-xl"
            >
              <figure>
                <img
                  src={service.image}
                  alt="Service"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="p-4">
                <h2 className="text-xl font-bold pb-4">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
