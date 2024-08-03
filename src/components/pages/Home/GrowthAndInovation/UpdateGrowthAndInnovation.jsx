import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateGrowthAndInnovation = () => {
  const item = useLoaderData();
  const { title, image, _id, buttonText } = item;
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("buttonText", data.buttonText);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const response = await fetch(`http://localhost:3300/growth/${_id}`, {
        method: "PUT",
        body: formData,
      });
      const result = await response.json();

      if (response.ok) {
        Swal.fire("Growth section updated successfully");
        reset(result); // Update the preview image URL
      } else {
        throw new Error(result.message || "Update failed");
      }
    } catch (error) {
      Swal.fire("Error updating growth section", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 md:p-32 w-full">
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mb-10 md:mb-14">
        Update Growth and Innovation
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="md:flex md:gap-5 space-y-4 md:space-y-0">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Title</span>
            </label>
            <input
              type="text"
              {...register("title")}
              defaultValue={title}
              placeholder="Title"
              name="title"
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Image</span>
            </label>
            <input
              type="file"
              {...register("image")}
              onChange={handleImageChange}
              placeholder="Image"
              name="image"
              className="w-full file-input file-input-bordered"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Button text
              </span>
            </label>
            <input
              type="text"
              {...register("buttonText")}
              defaultValue={buttonText}
              placeholder="Button Text"
              name="buttonText"
              className="input input-bordered rounded-lg text-black w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value={loading ? "Updating..." : "Update Growth Section"}
          disabled={loading}
          className="btn btn-block bg-red-900 hover:bg-red-700 text-white mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateGrowthAndInnovation;
