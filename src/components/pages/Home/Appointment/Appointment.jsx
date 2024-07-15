import React, { useEffect, useState } from "react";

const Appointment = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/google-form")
      .then((res) => res.json())
      .then((data) => {
        setForms(data);
      });
  }, []);

  const openGoogleForm = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mb-10">
      <div className="text-center container max-w-[1320px] mx-auto text-white bg-red-900 rounded-xl">
        <h1 className="mb-6 font-bold text-3xl pt-6">
          Are You Ready? Book Appointment Now
        </h1>
        <h1 className="mb-8">
          Get your Quote or Call (096) 96232337, (880) 1913 511 188
        </h1>
        {forms.map((form) => (
          <div className="pb-10">
            <button
              className="btn mr-2 bg-red-950 text-white"
              onClick={() => openGoogleForm(form.applyForInvestment)}
            >
              Apply for Investment
            </button>
            <button
              className="btn bg-red-950 text-white"
              onClick={() => openGoogleForm(form.applyAsInvestor)}
            >
              Apply as Investor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
