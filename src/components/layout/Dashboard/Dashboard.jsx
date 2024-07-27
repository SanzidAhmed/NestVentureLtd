import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaChevronRight, FaPenFancy, FaPlay } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const [isUpdateSectionOpen, setUpdateSectionOpen] = useState(false);
  const [isNestWorkOpen, setNestWorkOpen] = useState(false); // State for "How Does Nest Work" subsection
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const toggleUpdateSection = () => {
    setUpdateSectionOpen(!isUpdateSectionOpen);
  };

  const toggleNestWork = () => {
    setNestWorkOpen(!isNestWorkOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="navbar bg-red-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDrawer}
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
          </div>
          <div className="">
            <Link to="/" className=" text-xl">
              <img
                className=" btn hover:bg-red-100 bg-red-100 border-none shadow-none"
                src="https://i.ibb.co/HBSJn8G/Colorful-Illustrative-Hummingbird-Animals-Logo-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`min-h-screen flex flex-col lg:flex-row ${
          isDrawerOpen ? "drawer-open" : ""
        }`}
      >
        <div className="drawer lg:drawer-open">
          <input
            id="my-drawer-2"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={toggleDrawer}
          />
          <div className="drawer-content flex flex-col items-center justify-start pt-10 bg-white">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-white border-r text-base-content min-h-full w-80 p-4 space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  onClick={toggleUpdateSection}
                  className="text-sm w-full text-left flex justify-between bg-white border-white text-black hover:bg-gray-100"
                >
                  <h1 className="flex gap-2 items-center">
                    <FaPenFancy />
                    Update Section
                  </h1>
                  <FaChevronRight />
                </Link>
              </li>

              {isUpdateSectionOpen && (
                <>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/slider"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Banner Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/about-us"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      About Us Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/growth"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Growth and Innovation Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/services"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Services Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/statistics"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Statistics Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/company-video"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Company Video Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/testimonials"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Testimonial Update
                    </NavLink>
                  </li>
                  <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                    <NavLink
                      to="/dashboard/sponsors"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      Sponsors
                    </NavLink>
                  </li>
                  <ul
                    onClick={toggleNestWork}
                    className="text-sm w-full pl-6 bg-white border-white text-black hover:bg-white"
                  >
                    <NavLink
                      to="/dashboard"
                      className="flex items-center gap-2"
                    >
                      <FaPlay className="text-xs" />
                      How Does Nest Work
                    </NavLink>

                    {isNestWorkOpen && (
                      <>
                        <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                          <NavLink
                            to="/dashboard/how-does-company-work"
                            className="flex items-center gap-2"
                          >
                            <FaPlay className="text-xs" />
                            Body
                          </NavLink>
                        </li>
                        <li className="text-sm w-full pl-2 bg-white border-white text-black hover:bg-gray-100">
                          <NavLink
                            to="/dashboard/steps"
                            className="flex items-center gap-2"
                          >
                            <FaPlay className="text-xs" />
                            Steps
                          </NavLink>
                        </li>
                      </>
                    )}
                  </ul>
                </>
              )}
              <li>
                <NavLink
                  to="/dashboard/investor-registration-form"
                  className="flex items-center gap-2"
                >
                  <FaUserFriends className="text-xs" />
                  Investor Registration data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
