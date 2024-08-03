import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateGrowthAndInnovation = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); // Append the image file to formData
    formData.append("title", data.title);
    formData.append("buttonText", data.buttonText);

    const response = await fetch("http://localhost:3300/growth", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      Swal.fire("Success", "A new growth card added successfully", "success");
      reset();
    } else {
      const errorData = await response.json();
      Swal.fire(
        "Error",
        errorData.message || "Error adding new growth card",
        "error"
      );
    }
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white w-full">
        <h1 className="w-full font-extrabold text-3xl mb-14 text-center">
          Add a new Growth and Innovation Section
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
          <div className="grid grid-cols-3 gap-6 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium ">Title </span>
              </label>
              <label className="">
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Title"
                  name="title"
                  className="input input-bordered rounded-lg w-full"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium ">Title </span>
              </label>
              <label className="">
                <input
                  type="text"
                  {...register("buttonText")}
                  placeholder="buttonText"
                  name="buttonText"
                  className="input input-bordered rounded-lg w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Image</span>
                <span className="label-text text-sm font-medium">
                  height 700 pixel maximum and image would be a 1MP
                </span>
              </label>
              <label className="">
                <input
                  {...register("image")}
                  placeholder="image"
                  name="image"
                  type="file"
                  className="file-input file-input-bordered  w-full  "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add a new section"
            className="btn btn-block bg-red-900 text-white hover:bg-red-700 mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateGrowthAndInnovation;
