import React from "react";

const Appointment = () => {
  return (
    <div className="mb-10">
      <div className="text-center container mx-auto text-white bg-red-900 rounded-xl ">
        <h1 className="mb-6 font-bold text-3xl pt-6">
          Are You Ready? Book Appointment Now
        </h1>
        <h1 className="mb-8">
          Get your Quote or Call (096) 96232337, (880) 1913 511 188
        </h1>
        <div className="pb-16">
          <button className="btn mr-2 bg-red-950 text-white">
            Apply for Investment
          </button>
          <button className="btn bg-red-950 text-white">
            Apply as Investor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
