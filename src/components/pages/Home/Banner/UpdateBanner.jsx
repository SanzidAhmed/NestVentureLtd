import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBanner = () => {
  const item = useLoaderData();
  const { title, image, _id, description } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3300/slider/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Product updated successfully");
        reset(result);
      });
    console.log(data);
  };

  return (
    <div className="bg-white p-32">
      <h1 className="text-center font-extrabold text-3xl mb-14">Add a toy</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Slider number
              </span>
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
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium">Image Link</span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("image")}
                defaultValue={image}
                placeholder="Image"
                name="image"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update toy"
          className="btn btn-block bg-yellow-500 hover:bg-yellow-700 mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateBanner;
