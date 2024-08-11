import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSteps = () => {
  const item = useLoaderData();
  const { title, _id, description } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`https://nest-venture-ltd-server.vercel.app/steps/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Use updatedData here
    })
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        Swal.fire("Step data updated successfully");
      });
  };
  return (
    <div className="bg-white p-32 w-full">
      <h1 className="text-center font-extrabold text-3xl mb-14">Update Step</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Slider Title
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("title")}
                defaultValue={title}
                placeholder="Title"
                name="title"
                className="input input-bordered rounded-lg w-full  bg-white"
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
                className="input input-bordered rounded-lg w-full bg-white"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Step"
          className="btn btn-block bg-red-900 hover:bg-red-700 mt-4 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateSteps;
