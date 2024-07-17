import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardInvestorRegistrationList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/register-as-investor")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Deleting item with id: ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center py-2 border-b pr-2 mb-4">
        <h1 className="pl-4 text-lg font-semibold">
          Manage Investor Registrations
        </h1>
        <Link
          to="/dashboard/create-investor"
          className="btn btn-sm bg-red-600 text-white rounded-none"
        >
          Add New
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          {/* Table Head */}
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Investor Code</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Mobile Number</th>
              <th className="px-4 py-2 text-left">District</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Facebook</th>
              <th className="px-4 py-2 text-left">LinkedIn</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Investment Budget</th>
              <th className="px-4 py-2 text-left">Interested Sector</th>
              <th className="px-4 py-2 text-left">Interested Type</th>
              <th className="px-4 py-2 text-left">Interested Region</th>
              <th className="px-4 py-2 text-left">Investment Pattern</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-2">{item.investorCode}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.mobileNumber}</td>
                <td className="px-4 py-2">{item.district}</td>
                <td className="px-4 py-2">{item.location}</td>
                <td className="px-4 py-2">{item.facebook}</td>
                <td className="px-4 py-2">{item.linkedin}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.investmentBudget}</td>
                <td className="px-4 py-2">{item.interestedInvestmentSector}</td>
                <td className="px-4 py-2">{item.interestedInvestmentType}</td>
                <td className="px-4 py-2">{item.interestedInvestmentRegion}</td>
                <td className="px-4 py-2">{item.investmentPattern}</td>
                <td className="px-4 py-2 flex justify-end gap-2">
                  <Link
                    to={`/dashboard/edit-investor/${item._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Edit
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

export default DashboardInvestorRegistrationList;
