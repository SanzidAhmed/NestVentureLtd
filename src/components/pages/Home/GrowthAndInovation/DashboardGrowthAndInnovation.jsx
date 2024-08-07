import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardGrowthAndInnovation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/growth")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        Swal.fire("Error", "Failed to fetch data", "error");
      });
  }, [items]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3300/growth/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            // Check if the response is okay
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            // Assuming the backend response includes a message field
            if (
              data.deletedCount > 0 ||
              data.message ===
                "Growth and associated image deleted successfully"
            ) {
              setItems((prevItems) =>
                prevItems.filter((item) => item._id !== id)
              );
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire(
                "Error!",
                "Something went wrong or item not found.",
                "error"
              );
            }
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center py-2 border-b pr-2 mb-4">
        <h1 className="pl-4 text-lg font-semibold">
          Manage Innovation and Growth Section
        </h1>
        <Link
          to="/dashboard/create-growth-innovation"
          className="btn btn-sm bg-red-600 text-white rounded-none"
        >
          Add New
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Serial</th>
              <th className="px-4 py-2 text-left">Images</th>
              <th className="px-4 py-2 text-left">Title</th>
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
                          src={`http://localhost:3300${item.image}`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50">{item.link}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div className="font-bold">{item.title}</div>
                </td>
                <td className="px-4 py-2 flex justify-end gap-2">
                  <Link
                    to={`/dashboard/growth-update/${item._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger btn-xs"
                  >
                    Delete
                  </button>
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

export default DashboardGrowthAndInnovation;
