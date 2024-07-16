import { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const AboutUs = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/about-company")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return (
    <div className="container max-w-[1320px] mx-auto my-24">
      {about.map((company) => (
        <div key={company.id} className="md:flex p-6 md:p-0 gap-6 items-center">
          <div className="w-full">
            <h3 className="font-medium text-2xl">{company.title}</h3>
            <h1 className="font-bold text-4xl mt-4 mb-8 w-4/5">
              {company.headline}
            </h1>
            <p className="w-4/5">{company.description}</p>
            <div className="flex  gap-4 mt-5">
              <div className="relative">
                <FaChartLine className="absolute top-2 text-4xl"></FaChartLine>
                <h1 className="text-2xl p-6 bg-red-300 rounded-full"></h1>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-3">
                  {company.section1Title}
                </h2>
                <p className="w-5/6">{company.section1Description}</p>
              </div>
            </div>
            <div className="flex  gap-4 mt-5">
              <div className="relative">
                <FaPeopleGroup className="absolute top-2 text-4xl"></FaPeopleGroup>
                <h1 className="text-2xl p-6 bg-red-300 rounded-full"></h1>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-3">
                  {company.section2Title}
                </h2>
                <p className="w-5/6">{company.section1Description}</p>
              </div>
            </div>
            <button className="btn bg-red-900 mt-10 text-md hover:bg-red-800 px-8  text-white">
              Read More
            </button>
          </div>
          <div>
            <img
              className="w-full h-full rounded-tl-[60px]"
              src={
                isObjectEmpty(company.image) ? company.mainImage : company.image
              }
              alt={company.imageAlt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
