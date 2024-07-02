import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaPinterest, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <div className="bg-red-500">
        <div className="flex justify-between py-6 px-10 bg-red-500 items-center container mx-auto text-white">
          <div className="flex-col flex">
            <h1 className="inline-flex items-center gap-2">
              <FaLocationDot /> House 10, Main Road, Block C, Banasree, Rampura,
              Dhaka-1219
            </h1>
            <h1 className="inline-flex items-center gap-2">
              <BiSolidMessageDetail /> info@nestventuresltd.com
            </h1>
          </div>
          <div className="flex gap-10 text-white">
            <h1 className="">
              <FaFacebook />
            </h1>
            <h1>
              <FaPinterest />
            </h1>
            <h1>
              <FaTwitter />
            </h1>
            <h1>
              <FaLinkedin />
            </h1>
          </div>
        </div>
      </div>
      <div className="navbar bg-base-100 flex justify-between container mx-auto relative z-10">
        <div className="">
          <Link to="/" className=" text-xl">
            <img
              className=" btn hover:bg-white bg-white border-none shadow-none"
              src="https://i.ibb.co/k47dWCf/Security-Agency-Shield-Logo-design-template-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <div className="">
          <ul className="menu menu-horizontal font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li className="relative group">
              <div className="cursor-pointer">
                Services
                <ul className="absolute hidden group-hover:block bg-base-100 rounded-t-none p-2 w-52 top-full -left-4 border z-20">
                  <li>
                    <Link to="/link1">Manned Security Services</Link>
                  </li>
                  <li>
                    <Link to="/link2">Event Security Management</Link>
                  </li>
                  <li>
                    <Link to="/link3">Electronic Security Equipment</Link>
                  </li>
                  <li>
                    <Link to="/link4">Investigation Services</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn mr-2 bg-red-500">Apply for Investment</button>
          <button className="btn bg-red-500">Apply as Investor</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
