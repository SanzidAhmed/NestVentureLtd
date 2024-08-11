import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const CreateGrowthAndInnovation = () => {
  const { register, handleSubmit, reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

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
            image: imageUrl, // Update imageSrc with the new URL
          };

          return fetch("https://nest-venture-ltd-server.vercel.app/growth", {
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
        Swal.fire("Growth and Innovation a section created successfully");
        reset(result);
      })
      .catch((error) => {
        Swal.fire("Error creating data", error.message, "error");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white w-full">
        <h1 className="w-full font-extrabold text-3xl mb-14 text-center">
          Add a new Growth and Innovation Section
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
          <div className="grid grid-cols-3 gap-6 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium ">Title </span>
              </label>
              <label className="">
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Title"
                  required
                  name="title"
                  className="input input-bordered rounded-lg w-full bg-white"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-medium ">Title </span>
              </label>
              <label className="">
                <input
                  type="text"
                  required
                  {...register("buttonText")}
                  placeholder="buttonText"
                  name="buttonText"
                  className="input input-bordered rounded-lg w-full bg-white"
                />
              </label>
            </div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-lg font-medium">Image</span>
                <span className="label-text text-sm font-medium">
                  height 700 pixel maximum and image would be a 1MP
                </span>
              </label>
              <label className="">
                <input
                  {...register("image")}
                  placeholder="image"
                  name="image"
                  type="file"
                  className="file-input file-input-bordered  w-full  bg-white "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add a new section"
            className="btn btn-block bg-red-900 text-white hover:bg-red-700 mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateGrowthAndInnovation;
