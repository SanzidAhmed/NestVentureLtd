import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardSteps = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/steps")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
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
  return (
    <div className="container mx-auto border">
      <div className="flex justify-between items-center py-2 border pr-2">
        <h1 className="pl-4">Manage Steps</h1>
        <Link to="/dashboard/create-growth-innovation" className="btn btn-sm">
          Add New
        </Link>
      </div>
      <table className="table">
        <thead className="bg-red-900 text-white w-full">
          <tr>
            <th>Serial</th>
            <th>Title</th>
            <th>Description</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id} className="border-b">
              <td>{index + 1}</td>
              <td>
                <div className="font-bold">{item.title}</div>
              </td>
              <td>{item.description}</td>
              <td className="gap-1 flex justify-end">
                <Link
                  to={`/dashboard/step/${item._id}`}
                  className="btn btn-primary btn-xs"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary bg-red-600 btn-xs"
                >
                  Delete
                </button>
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

export default DashboardSteps;
