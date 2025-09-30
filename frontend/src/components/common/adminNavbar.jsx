import React, { useState } from "react";
import AdminImage from "../../images/AdminImage.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import Logo from "../../images/logo-primary.svg";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const handleLogout = () => {
    navigate("/login");
    setIsProfileOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
          
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="text-black hover:text-red-600 font-medium transition duration-300"
          >
            Admin Dashboard
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                <img
                  src={AdminImage}
                  alt=""
                  className="w-9 h-9 rounded-full cursor-pointer"
                />
              </div>
            </button>
              
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 animate-fadeIn z-50">
                <Link
                  to="adminProfile"
                  className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200 rounded"
                >
                  <LogOut className="w-4 h-4" /> Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200 rounded"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-2 px-4 pt-2 pb-2 space-y-2 bg-white shadow-md rounded-lg animate-fadeIn">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 w-full py-2 text-gray-700 hover:bg-gray-100 transition duration-200 rounded"
          >
            <LogOut className="w-4 h-4 " /> Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
