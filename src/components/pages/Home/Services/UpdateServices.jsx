import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateServices = () => {
  const item = useLoaderData();
  const { title, mainImage, _id, description } = item;
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    if (data.image.length === 0) {
      const updatedData = {
        title: data.title,
        description: data.description,
      };
      updateService(updatedData);
    } else {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgbbResult) => {
          if (imgbbResult.success) {
            const imageUrl = imgbbResult.data.display_url;
            const updatedData = {
              title: data.title,
              description: data.description,
              image: imageUrl,
            };
            updateService(updatedData);
          } else {
            throw new Error("Image upload failed");
          }
        })
        .catch((error) => {
          Swal.fire("Error updating data", error.message, "error");
        });
    }
  };
  const updateService = (updatedData) => {
    fetch(`https://nest-venture-ltd-server.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // Use updatedData here
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Service updated successfully");
        reset(result);
      })
      .catch((error) => {
        Swal.fire("Error updating Banner", error.message, "error");
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {};
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="bg-white p-32 w-full">
      <h1 className="text-center font-extrabold text-3xl mb-14 w-full">
        Service Section Update
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
        <div className="md:flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">Title </span>
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Slider description
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
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Image</span>
            </label>
            <label className="">
              <input
                {...register("image")}
                placeholder="image"
                name="image"
                onChange={handleImageChange}
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update service"
          className="btn btn-block bg-red-900 hover:bg-red-700 mt-4 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateServices;
