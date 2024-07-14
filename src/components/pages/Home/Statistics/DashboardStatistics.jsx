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
    <div className="overflow-x-auto container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Label</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="font-bold">{item.label}</div>
              </td>
              <td className="w-2/5">{item.value}</td>
              <th>
                <Link
                  to={`/dashboard/statistics-update/${item._id}`}
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

export default DashboardStatistics;
