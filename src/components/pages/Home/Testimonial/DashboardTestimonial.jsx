import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardTestimonial = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://nest-venture-ltd-server.vercel.app/testimonials")
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
        fetch(`https://nest-venture-ltd-server.vercel.app/testimonials/${id}`, {
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
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center py-2 border-b pr-2 mb-4">
        <h1 className="pl-4 text-lg font-semibold">
          Manage Testimonial Section
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
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className="border-b  ">
                <td className="px-4 py-2 text-black">{index + 1}</td>

                <td className="px-4 py-2">
                  <div className="font-bold text-black">{item.name}</div>
                </td>
                <td className="px-4 py-2 flex justify-end gap-2">
                  <Link
                    to={`/dashboard/testimonials/${item._id}`}
                    className="btn btn-primary btn-xs text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger btn-xs text-black"
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

export default DashboardTestimonial;
