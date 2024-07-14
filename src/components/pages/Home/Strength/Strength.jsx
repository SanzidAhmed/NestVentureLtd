import React from "react";
import { GiPentarrowsTornado } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const Strength = () => {
  return (
    <div className="bg-red-50">
      <div className="container mx-auto py-16 max-w-[1320px]">
        <h3 className="text-center text-3xl font-semibold ">Strength </h3>
        <h2 className="text-center text-5xl font-semibold pt-6 pb-10">
          Empowering Your Business with NEST
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-10">
            <p>
              <GiPentarrowsTornado className="text-5xl font-bold text-red-900" />
            </p>
            <h1 className="text-red-900 text-3xl font-semibold my-6">
              Fast Executions
            </h1>
            <p>
              NEST specializes in the fast execution of investment support for
              SMEs and new entrepreneurs. With our streamlined processes and
              expert guidance, you can quickly secure the resources you need to
              fuel your business growth and stay ahead of the competition.
            </p>
          </div>
          <div className="bg-white p-10">
            <p>
              <MdSupportAgent className="text-5xl font-bold text-red-900" />
            </p>
            <h1 className="text-red-900 text-3xl font-semibold my-6">
              Guide & Support{" "}
            </h1>
            <p>
              NEST specializes in the fast execution of investment support for
              SMEs and new entrepreneurs. With our streamlined processes and
              expert guidance, you can quickly secure the resources you need to
              fuel your business growth and stay ahead of the competition.
            </p>
          </div>
          <div className="bg-white p-10">
            <p>
              <BsBank2 className="text-5xl font-bold text-red-900" />
            </p>
            <h1 className="text-red-900 text-3xl font-semibold my-6">
              Financial Secure{" "}
            </h1>
            <p>
              NEST specializes in the fast execution of investment support for
              SMEs and new entrepreneurs. With our streamlined processes and
              expert guidance, you can quickly secure the resources you need to
              fuel your business growth and stay ahead of the competition.
            </p>
          </div>
          <div className="bg-white p-10">
            <p>
              <RiMoneyDollarBoxFill className="text-5xl font-bold text-red-900" />
            </p>
            <h1 className="text-red-900 text-3xl font-semibold my-6">
              Refinancing{" "}
            </h1>
            <p>
              NEST specializes in the fast execution of investment support for
              SMEs and new entrepreneurs. With our streamlined processes and
              expert guidance, you can quickly secure the resources you need to
              fuel your business growth and stay ahead of the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
