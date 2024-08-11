import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardHowDoesWorkNest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nest-venture-ltd-server.vercel.app/how-does-nest-works")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h1 className="text-2xl font-bold text-gray-800">
            Manage How Company Works
          </h1>
          <Link
            to="/dashboard/create-growth-innovation"
            className="btn btn-sm bg-red-600 text-white rounded-none"
          >
            Add New
          </Link>
        </div>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2">Serial</th>
              <th className="px-4 py-2">Images</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div className="text-sm opacity-50">{item.link}</div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="font-bold">{item.title}</div>
                </td>
                <td className="px-4 py-2 text-right">
                  <Link
                    to={`/dashboard/how-does-company-work-update/${item._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <button className="btn btn-outline bg-red-900 text-white mx-1">
          Previous
        </button>
        <button className="btn btn-outline bg-red-900 text-white mx-1">
          1
        </button>
        <button className="btn btn-outline bg-red-900 text-white mx-1">
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardHowDoesWorkNest;
