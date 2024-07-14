import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaPinterest, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="">
      <div className=" bg-red-900">
        <div className="md:flex hidden justify-between py-6 px-10 bg-red-900 items-center container mx-auto text-white">
          <div className="flex-col flex">
            <h1 className="inline-flex items-center gap-2 mb-4 md:mb-0">
              <FaLocationDot /> House 10, Main Road, Block C, Banasree, Rampura,
              Dhaka-1219
            </h1>
            <h1 className="inline-flex items-center gap-2 mb-4 md:mb-0 ">
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
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li className="relative group">
                  <div className="cursor-pointer">
                    Services
                    <ul className="md:absolute hidden group-hover:block bg-base-100 rounded-t-none p-2 w-52 top-full -left-4 border ">
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
            <div className="">
              <Link to="/" className=" text-xl">
                <img
                  className=" btn hover:bg-white bg-white border-none shadow-none"
                  src="https://i.ibb.co/k47dWCf/Security-Agency-Shield-Logo-design-template-removebg-preview.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase font-bold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li className="relative group">
                <div className="cursor-pointer">
                  Services
                  <ul className="md:absolute hidden group-hover:block bg-base-100 rounded-t-none p-2 w-52 top-full -left-4 border z-20">
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
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn md:mr-2 text-white bg-red-900 p-1 md:p-3 text-xs md:text-base">
              Apply for Investment
            </button>
            <button className="btn bg-red-900 text-white p-1 md:p-3 text-xs md:text-base">
              Apply as Investor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
