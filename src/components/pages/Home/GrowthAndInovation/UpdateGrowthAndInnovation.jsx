import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateGrowthAndInnovation = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const item = useLoaderData();
  console.log(item);
  const { title, image, _id, buttonText } = item;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); // Ensure data.image[0] to get the file object

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbbResult) => {
        if (imgbbResult.success) {
          const imageUrl = imgbbResult.data.display_url;
          const updatedData = data;
          updatedData.image = imageUrl;
          return fetch(`http://localhost:3300/growth/${_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          });
        } else {
          throw new Error("Image upload failed");
        }
      })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Product updated successfully");
        reset(result);
      })
      .catch((error) => {
        Swal.fire("Error updating product", error.message, "error");
      });
  };

  return (
    <div className="bg-white p-32">
      <h1 className="text-center font-extrabold text-3xl mb-14">
        Update Growth and Innovation
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="md:flex gap-5">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Title</span>
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
              <span className="label-text text-lg font-medium">Image</span>
            </label>
            <label className="">
              <input
                type="file"
                {...register("image")}
                placeholder="Image"
                name="image"
                className="w-full file-input file-input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Button text
              </span>
            </label>
            <label className="">
              <input
                type="text"
                {...register("buttonText")}
                defaultValue={buttonText}
                placeholder="Button Text"
                name="buttonText"
                className="input input-bordered rounded-lg text-black w-full"
              />
            </label>
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

export default UpdateGrowthAndInnovation;
