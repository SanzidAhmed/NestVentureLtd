import React from "react";
import { useForm } from "react-hook-form";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const CreateAboutUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.imageSrc[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbbResult) => {
        console.log(imgbbResult);
        if (imgbbResult.success) {
          const imageUrl = imgbbResult.data.display_url;
          const updatedData = {
            ...data,
            imageSrc: imageUrl, // Update imageSrc with the new URL
          };

          return fetch("http://localhost:3300/about-company", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData), // Use updatedData here
          });
        } else {
          throw new Error("Image upload failed");
        }
      })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Data updated successfully");
        reset(result);
      })
      .catch((error) => {
        Swal.fire("Error updating data", error.message, "error");
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
                {...register("imageSrc")}
                placeholder="imageSrc"
                name="imageSrc"
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
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

export default CreateAboutUs;
