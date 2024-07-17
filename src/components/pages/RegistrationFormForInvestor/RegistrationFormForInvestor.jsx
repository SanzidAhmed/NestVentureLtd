import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RegistrationFormForInvestor = () => {
  const districts = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogura",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokathi",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3300/register-as-investor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        Swal.fire("Registration successfully");
      })
      .catch((error) => {
        Swal.fire("Error Registration failed", error.message, "error");
      });
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Investor Code */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Investor Code
            </span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("investorCode")}
              placeholder="Investor Code"
              name="investorCode"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">Name</span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              name="name"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Mobile Number */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Mobile Number
            </span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("mobileNumber")}
              placeholder="Mobile Number"
              name="mobileNumber"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* District */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">District</span>
          </label>
          <label className="">
            <select
              {...register("district")}
              name="district"
              className="select select-bordered rounded-lg w-full"
            >
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Location */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">Location</span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("location")}
              placeholder="Location"
              name="location"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Facebook */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">Facebook</span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("facebook")}
              placeholder="Facebook"
              name="facebook"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* LinkedIn */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">LinkedIn</span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("linkedin")}
              placeholder="LinkedIn"
              name="linkedin"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">Email</span>
          </label>
          <label className="">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              name="email"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Investment Budget */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Investment Budget
            </span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("investmentBudget")}
              placeholder="Investment Budget"
              name="investmentBudget"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Interested Investment Sector */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Interested Investment Sector
            </span>
          </label>
          <label className="">
            <select
              {...register("interestedInvestmentSector")}
              name="interestedInvestmentSector"
              className="select select-bordered rounded-lg w-full"
            >
              <option value="sector1">Sector 1</option>
              <option value="sector2">Sector 2</option>
              <option value="sector3">Sector 3</option>
              {/* Add other options as needed */}
            </select>
          </label>
        </div>

        {/* Interested Investment Type */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Interested Investment Type
            </span>
          </label>
          <label className="">
            <select
              {...register("interestedInvestmentType")}
              name="interestedInvestmentType"
              className="select select-bordered rounded-lg w-full"
            >
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
              {/* Add other options as needed */}
            </select>
          </label>
        </div>

        {/* Interested Investment Region */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Interested Investment Region
            </span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("interestedInvestmentRegion")}
              placeholder="Interested Investment Region"
              name="interestedInvestmentRegion"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Investment Pattern */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-lg font-medium">
              Investment Pattern
            </span>
          </label>
          <label className="">
            <input
              type="text"
              {...register("investmentPattern")}
              placeholder="Investment Pattern"
              name="investmentPattern"
              className="input input-bordered rounded-lg w-full"
            />
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-control w-full mt-4">
          <button
            type="submit"
            className="btn bg-red-900 border-none hover:bg-red-700 hover:border-none text-white w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormForInvestor;
