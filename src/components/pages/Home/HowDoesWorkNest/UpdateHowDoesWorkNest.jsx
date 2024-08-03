import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateHowDoesWorkNest = () => {
  const item = useLoaderData();
  const { title, _id, description, subtitle } = item;
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("description", data.description);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const response = await fetch(
        `http://localhost:3300/how-does-nest-works/${_id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      const result = await response.json();

      if (response.ok) {
        Swal.fire("Body section updated successfully");
        reset(result);
        // Update the preview image URL
      } else {
        throw new Error(result.message || "Update failed");
      }
    } catch (error) {
      Swal.fire("Error updating Body", error.message, "error");
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
    <div className="bg-white p-32 w-full">
      <h1 className="text-center font-extrabold text-3xl mb-14">Update Body</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium ">Title</span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("title")}
                defaultValue={title}
                placeholder="Title"
                name="title"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium ">Title</span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("subtitle")}
                defaultValue={subtitle}
                placeholder="subtitle"
                name="subtitle"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Description
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("description")}
                defaultValue={description}
                placeholder="Description"
                name="description"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Image</span>
            </label>
            <label className="">
              <input
                {...register("image")}
                onChange={handleImageChange}
                placeholder="Image"
                name="image"
                type="file"
                className="w-full file-input file-input-bordered"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value={loading ? "Updating..." : "Update Body"}
          disabled={loading}
          className="btn btn-block bg-red-900 hover:bg-red-700 mt-4 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateHowDoesWorkNest;
