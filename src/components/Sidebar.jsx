import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const nav = useNavigate();

  const out = () => {
    localStorage.removeItem("userToken");
    nav("/");
    window.location.reload();
  }

  return (
    <aside className="min-h-screen flex flex-row bg-gray-200">
      <div className="flex flex-col w-56 rounded-r-3xl">
        <div className="bg-white flex items-center justify-center h-[80px] w-[80px] shadow-md">
          <img src={require("../azca-logo.PNG")} alt="logo" className=" max-w-full mx-auto" />
        </div>
        <ul className="flex flex-col py-4">
          <li className="">
            <NavLink
              to="/dashboard"
              end
              className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/events"
              className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                <i className="bx bx-calendar-event"></i>
              </span>
              <span className="text-sm font-medium">Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/news"
              className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                <i className="bx bx-news"></i>
              </span>
              <span className="text-sm font-medium">News</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/users"
              className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                <i className="bx bxs-user-rectangle"></i>
              </span>
              <span className="text-sm font-medium">Users</span>
            </NavLink>
          </li>
          <li>
            <button className="flex flex-row items-center h-12 text-gray-500 hover:text-gray-800" onClick={out}>
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-indigo-500">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
