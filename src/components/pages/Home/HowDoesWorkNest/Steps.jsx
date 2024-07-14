import React, { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/steps")
      .then((res) => res.json())
      .then((data) => {
        setSteps(data);
      });
  }, []);
  return (
    <div className="mt-4 ">
      {steps.map((step) => (
        <div key={step._id} className="flex justify-between gap-4 mb-4">
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
  );
};

export default Steps;
