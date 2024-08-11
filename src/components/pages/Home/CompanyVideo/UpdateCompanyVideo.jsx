import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateCompanyVideo = () => {
  const item = useLoaderData();
  const { title, thumbnail, _id, description, videoUrl, mainImage } = item;
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { title, description, videoUrl, thumbnail },
  });
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    if (data.thumbnail.length === 0) {
      // No new image uploaded, retain the previous image URL
      const updatedData = {
        title: data.title,
        description: data.description,
        videoUrl: data.videoUrl,
      };
      updateBanner(updatedData);
    } else {
      const formData = new FormData();
      formData.append("image", data.thumbnail[0]);
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
              videoUrl: data.videoUrl,
              thumbnail: imageUrl,
            };
            updateBanner(updatedData);
          } else {
            throw new Error("Image upload failed");
          }
        })
        .catch((error) => {
          Swal.fire("Error updating Banner", error.message, "error");
        });
    }
  };

  const updateBanner = (updatedData) => {
    fetch(`https://nest-venture-ltd-server.vercel.app/video/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Video section updated successfully");
        reset({
          title: result.title,
          description: result.description,
          videoUrl: result.videoUrl,
          thumbnail: result.thumbnail,
        });
      })
      .catch((error) => {
        Swal.fire("Error updating Video section", error.message, "error");
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
      <h1 className="text-center font-extrabold text-3xl mb-14">
        Update Video Section
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Title</span>
            </label>
            <label>
              <input
                type="text"
                {...register("title")}
                placeholder="Title"
                name="title"
                className="input input-bordered rounded-lg w-full bg-white"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">
                YouTube Link
              </span>
            </label>
            <label>
              <input
                type="text"
                {...register("videoUrl")}
                placeholder="videoUrl"
                name="videoUrl"
                className="input input-bordered rounded-lg w-full bg-white"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Description
              </span>
            </label>
            <label>
              <input
                type="text"
                {...register("description")}
                placeholder="Description"
                name="description"
                className="input input-bordered rounded-lg w-full bg-white"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Image</span>
            </label>
            <label>
              <input
                {...register("thumbnail")}
                placeholder="thumbnail"
                name="thumbnail"
                type="file"
                className="w-full file-input file-input-bordered bg-white"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Video Section"
          className="btn btn-block bg-red-900 hover:bg-red-700 mt-4 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCompanyVideo;
