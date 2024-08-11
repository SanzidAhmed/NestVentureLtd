import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardCompanyVideo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nest-venture-ltd-server.vercel.app/video")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.thumbnail}
                          alt="Thumbnail"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="font-bold">{item.title}</div>
                </td>
                <td className="px-4 py-2 w-2/5">{item.description}</td>
                <td className="px-4 py-2 text-right">
                  <Link
                    to={`/dashboard/video-update/${item._id}`}
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
    </div>
  );
};

export default DashboardCompanyVideo;
