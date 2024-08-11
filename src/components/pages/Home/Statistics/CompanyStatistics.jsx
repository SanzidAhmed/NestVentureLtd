import React, { useEffect, useState } from "react";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";

const CompanyStatistics = () => {
  const icons = {
    VscLightbulbAutofix: (
      <VscLightbulbAutofix className="text-5xl text-red-900 text-center" />
    ),
    BiSolidLike: <BiSolidLike className="text-5xl text-red-900 text-center" />,
    FaPeopleGroup: (
      <FaPeopleGroup className="text-5xl text-red-900 text-center" />
    ),
  };
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://nest-venture-ltd-server.vercel.app/statistics")
          .then((response) => response.json())
          .then((data) => {
            setStatistics(data);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error fetching statistic data:", error);
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
      <div className="container mx-auto py-10 w-3/5">
        <div className="grid grid-cols-3 justify-items-center text-center gap-4 ">
          {statistics.map((statistic, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
            >
              <p className="text-center">{icons[statistic.icon]}</p>
              <h2 className="text-5xl text-red-900 mt-2">{statistic.value}</h2>
              <p className="font-bold mt-4">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyStatistics;
