import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardBanner = () => {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3300/slider/${id}`, {
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

  useEffect(() => {
    fetch("http://localhost:3300/slider")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="container mx-auto border ">
      <div className="flex justify-between items-center py-2 border pr-2">
        <h1 className="pl-4">Manage our About Section</h1>
        <Link to="/dashboard/create-slider" className="btn btn-sm">
          Add New
        </Link>
      </div>
      <table className="table">
        <thead className="bg-red-900 text-white">
          <tr>
            <th>Serial</th>
            <th>Company Information</th>
            <th>Description</th>
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
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-50">{item.link}</div>
                  </div>
                </div>
              </td>
              <td className="w-2/5">{item.description}</td>
              <td className="gap-1 flex justify-end">
                <Link
                  to={`/dashboard/slider-update/${item._id}`}
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

export default DashboardBanner;
