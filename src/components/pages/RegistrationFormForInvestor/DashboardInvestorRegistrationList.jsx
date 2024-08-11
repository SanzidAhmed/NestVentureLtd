import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardInvestorRegistrationList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nest-venture-ltd-server.vercel.app/register-as-investor")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://nest-venture-ltd-server.vercel.app/register-as-investor/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setItems(items.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire("Error!", "Something went wrong.", "error");
            }
          })
          .catch((error) => {
            console.error("Error details:", error);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center py-2 border-b pr-2 mb-4">
        <h1 className="pl-4 text-lg font-semibold">
          Manage Investor Registrations
        </h1>
        <Link className="btn btn-sm bg-red-600 text-white rounded-none">
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
                <td className="px-4 py-2">
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
