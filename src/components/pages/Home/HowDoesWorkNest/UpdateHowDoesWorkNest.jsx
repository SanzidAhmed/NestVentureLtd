import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateHowDoesWorkNest = () => {
  const item = useLoaderData();
  const { title, _id, description } = item;
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.mainImage[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbbResult) => {
        console.log(imgbbResult);
        if (imgbbResult.success) {
          const imageUrl = imgbbResult.data.display_url;
          const updatedData = data;
          updatedData.mainImage = imageUrl;
          return fetch(`http://localhost:3300/how-does-nest-works/${_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          });
        } else {
          throw new Error("Image upload failed");
        }
      })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Working procedure body updated successfully");
        reset(result);
      })
      .catch((error) => {
        Swal.fire("Error updating Banner", error.message, "error");
      });
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
                {...register("mainImage")}
                placeholder="mainImage"
                name="mainImage"
                type="file"
                className="w-full file-input file-input-bordered"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Body"
          className="btn btn-block bg-red-900 hover:bg-red-700 mt-4 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateHowDoesWorkNest;
