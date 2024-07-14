import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardAboutUs = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/about-company")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className=" justify-start container mx-auto border border-red-500">
      <div className="flex justify-between items-center py-2 border border-red-900 pr-2">
        <h1 className="pl-4">Manage our About Section</h1>
        <Link to="/dashboard/create-about-us" className="btn btn-sm">
          Add New
        </Link>
      </div>
      <table className="table ">
        {/* head */}
        <thead className="bg-red-900 text-white ">
          <tr>
            <th>Company Information</th>
            <th>Description</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.imageSrc}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-50">{item.headline}</div>
                  </div>
                </div>
              </td>
              <td className="w-2/5">{item.description}</td>
              <th className="gap-4 flex justify-end">
                <Link
                  to={`/dashboard/about-company-information-update/${item._id}`}
                  className="btn btn-primary btn-xs"
                >
                  Update
                </Link>
                <Link
                  to={`/dashboard/about-company-information-update/${item._id}`}
                  className="btn btn-primary bg-red-600 btn-xs"
                >
                  Delete
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAboutUs;
