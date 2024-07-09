import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAboutUs = () => {
  const item = useLoaderData();
  const {
    title,
    imageSrc,
    _id,
    description,
    headline,
    section1Title,
    section1Description,
    section2Title,
    section2Description,
  } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3300/about-company/${_id}`, {
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
  };
  return (
    <div className="bg-white">
      <h1 className="w-full font-extrabold text-3xl mb-14 text-center">
        About Us
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" ">
        <div className="grid grid-cols-2 gap-6 w-full">
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

          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">Headline </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("headline")}
                defaultValue={headline}
                placeholder="Headline"
                name="headline"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-full">
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
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Section Title 1
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("section1Title")}
                defaultValue={section1Title}
                placeholder="section1Title"
                name="section1Title"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Section Title 2
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("section2Title")}
                defaultValue={section2Title}
                placeholder="section2Title"
                name="section2Title"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Section Description 1
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("section1Description")}
                defaultValue={section1Description}
                placeholder="section1Description"
                name="section1Description"
                className="input input-bordered rounded-lg w-96"
              />
            </label>
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium ">
                Section Description 2
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("section2Description")}
                defaultValue={section2Description}
                placeholder="section2Description"
                name="section2Description"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Image Link</span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("imageSrc")}
                defaultValue={imageSrc}
                placeholder="imageSrc"
                name="imageSrc"
                className="input input-bordered rounded-lg w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update About Section"
          className="btn btn-block bg-yellow-500 hover:bg-yellow-700 mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateAboutUs;
