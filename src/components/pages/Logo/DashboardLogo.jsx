import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardLogo = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://nest-venture-ltd-server.vercel.app/logo")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center py-2 border-b pr-2 mb-4">
        <h1 className="pl-4 text-lg font-semibold">Manage Our Logo</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Serial</th>
              <th className="px-4 py-2 text-left">Image</th>
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
                          src={
                            isObjectEmpty(item.image)
                              ? item.mainImage
                              : item.image
                          }
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 flex justify-end gap-2">
                  <Link
                    to={`/dashboard/logo-update/${item._id}`}
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

export default DashboardLogo;
