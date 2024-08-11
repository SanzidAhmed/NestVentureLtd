import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTestimonial = () => {
  const item = useLoaderData();
  const { testimonial, name, _id } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`https://nest-venture-ltd-server.vercel.app/testimonials/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Testimonial updated successfully");
        reset(result);
      });
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
              {...register("name")}
              defaultValue={name}
              placeholder="name"
              name="name"
              className="input input-bordered rounded-lg w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Comment </span>
            </label>
            <input
              type="text"
              {...register("testimonial")}
              defaultValue={testimonial}
              placeholder="testimonial"
              name="testimonial"
              className="input input-bordered rounded-lg text-black w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Growth Section"
          className="btn btn-block bg-red-900 hover:bg-red-700 text-white mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateTestimonial;
