import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardStatistics = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/statistics")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2">Label</th>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-2">
                  <div className="font-bold">{item.label}</div>
                </td>
                <td className="px-4 py-2 w-2/5">{item.value}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/dashboard/statistics-update/${item._id}`}
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

export default DashboardStatistics;
