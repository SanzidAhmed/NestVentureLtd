import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCompanyVideo = () => {
  const item = useLoaderData();
  const { title, thumbnail, _id, description, videoUrl } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3300/video/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Services Section updated successfully");
        reset(result);
      });
  };
  return (
    <div className="bg-white p-32">
      <h1 className="text-center font-extrabold text-3xl mb-14">
        Video Update
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Youtube URL
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("videoUrl")}
                defaultValue={videoUrl}
                placeholder="videoUrl"
                name="videoUrl"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Image Link</span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("thumbnail")}
                defaultValue={thumbnail}
                placeholder="thumbnail"
                name="thumbnail"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update video"
          className="btn btn-block bg-yellow-500 hover:bg-yellow-700 mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateCompanyVideo;
