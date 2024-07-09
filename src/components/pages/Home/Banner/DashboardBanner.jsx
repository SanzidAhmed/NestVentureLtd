import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const DashboardBanner = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/slider")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-10 justify-between items-center mb-10"
        >
          <img className="w-48 h-20" src={item.image} alt="" />
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <Link
            to={`/dashboard/slider-update/${item._id}`}
            className="btn bg-red-600"
          >
            Update
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardBanner;
