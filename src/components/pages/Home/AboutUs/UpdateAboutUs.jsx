import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAboutUs = () => {
  const item = useLoaderData();
  const {
    title,
    _id,
    description,
    headline,
    section1Title,
    section1Description,
    section2Title,
    section2Description,
  } = item;

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("section1Title", data.section1Title);
    formData.append("section1Description", data.section1Description);
    formData.append("section2Title", data.section2Title);
    formData.append("section2Description", data.section2Description);
    formData.append("headline", data.headline);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const response = await fetch(
        `http://localhost:3300/about-company/${_id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      const result = await response.json();

      if (response.ok) {
        Swal.fire("About updated successfully");
        reset(result); // Update the preview image URL
      } else {
        throw new Error(result.message || "Update failed");
      }
    } catch (error) {
      Swal.fire("Error updating about section", error.message, "error");
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
    <div className="bg-white w-full p-32">
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
                className="input input-bordered rounded-lg w-full"
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
          value={loading ? "Updating..." : "Update About Section"}
          disabled={loading}
          className="btn btn-block bg-red-900 hover:bg-red-700 text-white mt-4"
        />
      </form>
    </div>
  );
};

export default UpdateAboutUs;
