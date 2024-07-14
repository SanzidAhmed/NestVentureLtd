import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateStatistics = () => {
  const item = useLoaderData();
  const { label, value, _id } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3300/statistics/${_id}`, {
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
        Statistic Update
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="md:flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">Label </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("label")}
                defaultValue={label}
                placeholder="label"
                name="label"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">Value </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("value")}
                defaultValue={value}
                placeholder="value"
                name="value"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update statistic"
          className="btn btn-block bg-red-500 hover:bg-yellow-700 mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateStatistics;
