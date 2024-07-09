import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-red-500">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li className="relative group">
              <NavLink to="/dashboard/banner">Banner Update</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/about-us">About us Update</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/growth-update">
                Growth and Innovation Update
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/company-update">About us Update</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/company-update">About us Update</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/company-update">About us Update</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/company-update">About us Update</NavLink>
            </li>
            <button
              onClick={handleLogout}
              className="btn btn-primary w-1/2 mt-10"
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
