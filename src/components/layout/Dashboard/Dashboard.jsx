import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaChevronRight } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const [isUpdateSectionOpen, setUpdateSectionOpen] = useState(false);

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

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start pt-10 bg-white">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" bg-white border-r text-base-content min-h-full w-80 p-4">
            <li>
              <Link
                to="/dashboard"
                onClick={toggleUpdateSection}
                className=" text-sm w-full text-left flex justify-between bg-white border-white text-black hover:bg-white hover:border-white"
              >
                <h1 className="flex gap-2 items-center">
                  <FaPenFancy />
                  Update Section
                </h1>{" "}
                <FaChevronRight />
              </Link>
            </li>
            {isUpdateSectionOpen && (
              <>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/slider"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    Banner Update
                  </NavLink>
                </li>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/about-us"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    About us Update
                  </NavLink>
                </li>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/growth"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    Growth and Innovation Update
                  </NavLink>
                </li>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/services"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    Services Update
                  </NavLink>
                </li>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/statistics"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    Statistics Update
                  </NavLink>
                </li>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/company-video"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    Company Video Update
                  </NavLink>
                </li>
                <li className="text-sm w-full  pl-2 bg-white border-white text-black hover:bg-white hover:border-white">
                  <NavLink
                    to="/dashboard/company-update"
                    className="flex items-center gap-2"
                  >
                    <FaPlay className="text-xs" />
                    About us Update
                  </NavLink>
                </li>
              </>
            )}
            <Link
              to="/"
              className="btn btn-primary bg-red-500 rounded-none border-none w-1/2 mt-10"
            >
              Home
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-primary bg-red-500 rounded-none border-none w-1/2 mt-10"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
