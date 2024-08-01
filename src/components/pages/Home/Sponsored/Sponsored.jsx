import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Sponsored = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://businessbox.contain-i.com/index/sponsors")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="">
      <div className="container mx-auto max-w-[1320px]">
        <Marquee className="py-10">
          {items.map((item, index) => (
            <img
              key={index}
              className="h-40 w-48" // Adjust the height and width as needed
              src={item.image}
              alt=""
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsored;
