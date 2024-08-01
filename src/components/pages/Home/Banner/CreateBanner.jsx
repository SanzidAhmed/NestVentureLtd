import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateBanner = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); // Append the image file to formData
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("link", data.link);

    const response = await fetch("http://localhost:3300/slider", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      Swal.fire("Success", "Slider image added successfully", "success");
      reset();
    } else {
      const errorData = await response.json();
      Swal.fire("Error", errorData.message || "Error adding slider", "error");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white w-full">
        <h1 className="w-full font-extrabold text-3xl mb-14 text-center">
          Add a new Slider Image
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Title</span>
              </label>
              <input
                type="text"
                {...register("title")}
                placeholder="Title"
                className="input input-bordered rounded-lg w-full"
              />
            </div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <input
                type="text"
                {...register("description")}
                placeholder="Description"
                className="input input-bordered rounded-lg w-full"
              />
            </div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Link</span>
              </label>
              <input
                type="text"
                {...register("link")}
                placeholder="Link"
                className="input input-bordered rounded-lg w-full"
              />
            </div>

            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Image</span>
                <span className="label-text text-sm font-medium">
                  Height 700 pixels maximum and image should be 1MB or less
                </span>
              </label>
              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Add a new slider"
            className="btn btn-block bg-red-900 text-white hover:bg-red-700 mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateBanner;
