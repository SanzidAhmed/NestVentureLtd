import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardHowDoesWorkNest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/how-does-nest-works")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container mx-auto border">
      <div className="flex justify-between items-center py-2 border pr-2">
        <h1 className="pl-4">Manage How Company Work</h1>
        <Link to="/dashboard/create-growth-innovation" className="btn btn-sm">
          Add New
        </Link>
      </div>
      <table className="table">
        <thead className="bg-red-900 text-white w-full">
          <tr>
            <th>Serial</th>
            <th>Images</th>
            <th>Title</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id} className="border-b">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.mainImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-50">{item.link}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{item.title}</div>
              </td>
              <td className="gap-1 flex justify-end">
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
      <div className="rounded-sm flex pl-2 w-1/5 py-6 gap-1">
        <button className="join-item btn btn-outline bg-red-900 text-white">
          Previous
        </button>
        <button className="join-item btn btn-outline bg-red-900 text-white">
          1
        </button>
        <button className="join-item btn btn-outline bg-red-900 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardHowDoesWorkNest;
