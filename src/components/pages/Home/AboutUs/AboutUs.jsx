import { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const AboutUs = () => {
  const icons = {
    FaChartLine: <FaChartLine className="absolute top-2 text-4xl" />,
    FaPeopleGroup: <FaPeopleGroup className="absolute top-2 text-4xl" />,
  };
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/about-company")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
      });
  }, []);
  {
    /* <FaChartLine className="absolute top-2 text-4xl" /> */
    // <FaPeopleGroup className="absolute top-2 text-4xl" />
  }
  return (
    <div className="container mx-auto my-24">
      {about.map((company) => (
        <div
          key={company.id}
          className="md:flex p-6 md:p-0 justify-between items-center"
        >
          <div>
            <h3 className="font-medium text-2xl">{company.title}</h3>
            <h1 className="font-bold text-4xl mt-4 mb-8 w-4/5">
              {company.headline}
            </h1>
            <p className="w-4/5">{company.description}</p>
            {company.sections.map((section, index) => (
              <div key={index} className="flex justify-between gap-4 mt-5">
                <div className="relative">
                  {icons[section.icon]}
                  <h1 className="text-2xl p-6 bg-red-300 rounded-full"></h1>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-3">
                    {section.title}
                  </h2>
                  <p className="w-5/6">{section.description}</p>
                </div>
              </div>
            ))}
            <button className="btn bg-red-600 mt-10 text-2xl px-8 text-white">
              Read More
            </button>
          </div>
          <div>
            <img
              className="w-[1200px] h-full rounded-tl-[60px]"
              src={company.image.src}
              alt={company.image.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
