import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardSteps = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    fetchSteps(currentPage);
  }, [currentPage]);

  const fetchSteps = (page) => {
    fetch(
      `http://localhost:3300/steps-dashboard?page=${page}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.steps);
        setTotalItems(data.total);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3300/steps/${id}`, {
          method: "DELETE",
        })
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
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Manage Steps</h1>
        <Link
          to="/dashboard/create-step"
          className="btn btn-sm bg-red-600 text-white rounded-none"
        >
          Add New
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="px-4 py-3">Serial</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className="border-b">
                <td className="px-4 py-3">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-4 py-3 font-semibold">{item.title}</td>
                <td className="px-4 py-3">{item.description}</td>
                <td className="px-4 py-3 md:flex text-right gap-2">
                  <Link
                    to={`/dashboard/step/${item._id}`}
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
        <button
          className="btn btn-outline bg-red-900 text-white mx-1"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            className={`btn btn-outline bg-gray-800 text-white px-4 py-1 mx-1 ${
              currentPage === page + 1 ? "bg-yellow-500" : ""
            }`}
            style={currentPage === page + 1 ? { backgroundColor: "red" } : {}}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn btn-outline bg-red-900 text-white px-4 py-1"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardSteps;
