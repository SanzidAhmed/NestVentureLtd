import React from "react";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";

const CompanyStatistics = () => {
  return (
    <div className="container mx-auto py-10 w-3/5">
      <div className="grid grid-cols-5 justify-items-center text-center gap-4 ">
        <div className="flex flex-col items-center text-center ">
          <p className="text-center">
            <VscLightbulbAutofix className="text-5xl text-red-900 text-center" />
          </p>
          <h2 className="text-5xl text-red-900 mt-2">100000</h2>
          <p className="font-bold mt-4">Financed</p>
        </div>
        <div className="border-r-2 border-red-700"></div>
        <div className="flex flex-col items-center text-center">
          <p>
            <BiSolidLike className="text-5xl text-red-900 text-center" />
          </p>
          <h2 className="text-5xl text-red-900 mt-2">10</h2>
          <p className="font-bold mt-4">Projects</p>
        </div>
        <div className="border-r-2 border-red-700"></div>
        <div className="flex flex-col items-center text-center">
          <p>
            <FaPeopleGroup className="text-5xl text-red-900 text-center" />
          </p>
          <h2 className="text-5xl text-red-900 mt-2">20</h2>
          <p className="font-bold mt-4">Team Members</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatistics;
