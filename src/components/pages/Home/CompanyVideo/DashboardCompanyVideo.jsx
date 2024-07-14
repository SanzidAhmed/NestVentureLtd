import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardCompanyVideo = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/video")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="overflow-x-auto container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
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
                        src={item.thumbnail}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{item.title}</div>
              </td>
              <td className="w-2/5">{item.description}</td>
              <th>
                <Link
                  to={`/dashboard/video-update/${item._id}`}
                  className="btn btn-primary btn-xs"
                >
                  Update
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCompanyVideo;
