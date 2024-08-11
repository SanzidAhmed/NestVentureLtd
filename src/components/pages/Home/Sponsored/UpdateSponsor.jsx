import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateSponsor = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const item = useLoaderData();
  console.log(item);
  const { image, _id } = item;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data.image);
    if (data.image.length === 0) {
      const updatedData = {};
      updateSponsor(updatedData);
    } else {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgbbResult) => {
          if (imgbbResult.success) {
            const imageUrl = imgbbResult.data.display_url;
            const updatedData = {
              image: imageUrl,
            };
            updateSponsor(updatedData);
          } else {
            throw new Error("Image upload failed");
          }
        })
        .catch((error) => {
          Swal.fire("Error updating data", error.message, "error");
        });
    }
  };
  const updateSponsor = (updatedData) => {
    fetch(`https://nest-venture-ltd-server.vercel.app/sponsors/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // Use updatedData here
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire("Sponsor updated successfully");
        reset(result);
      })
      .catch((error) => {
        Swal.fire("Error updating growth", error.message, "error");
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {};
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-4 md:p-32 w-full">
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mb-10 md:mb-14">
        Update Sponsor
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="md:flex md:gap-5 space-y-4 md:space-y-0">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-medium">Image</span>
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              {...register("image")}
              placeholder="image"
              name="image"
              className="w-full file-input file-input-bordered"
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

export default UpdateSponsor;
