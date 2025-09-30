import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/common/adminNavbar";
import AdminSidebar from "../components/common/adminsidebar";


function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <AdminNavbar />
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-between items-center p-4 bg-pink-200 text-white md:hidden">
          <span className="text-lg font-semibold">Admin Panel</span>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64  text-white  p-4 shadow-lg`}
        >
          <AdminSidebar closeSidebar={closeSidebar} />
        </div>
        <div
          className="flex-1 bg-gray-100 h-screen overflow-y-scroll">
          <Outlet className="flex-1 p-6 bg-gray-100" />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;