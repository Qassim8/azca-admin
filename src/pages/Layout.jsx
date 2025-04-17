import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mx-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
