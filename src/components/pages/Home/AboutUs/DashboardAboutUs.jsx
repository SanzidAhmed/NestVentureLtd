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
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center py-2 border-b  pr-2 mb-4">
        <h1 className="pl-4 text-lg font-semibold">Manage Our About Section</h1>
        <Link
          to="/dashboard/create-about-us"
          className="btn btn-sm bg-red-600 text-white rounded-none"
        >
          Add New
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          {/* head */}
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Company Information</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
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
                <td className="px-4 py-2 w-2/5">{item.description}</td>
                <td className="px-4 py-2 flex justify-end gap-2">
                  <Link
                    to={`/dashboard/about-company-information-update/${item._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger bg-red-600 btn-xs"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const handleDelete = (id) => {
  // handle delete logic here
};

export default DashboardAboutUs;
