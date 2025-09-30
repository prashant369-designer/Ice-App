// BottomNavBar.jsx
import React from "react";
import {  FaUser,FaHeart } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { RiSearch2Fill } from "react-icons/ri";

const BottomNavBar = () => {
  return (
    <div className="bg-white fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-16 sm:hidden z-50">
      <a href="/">
        <span>
          <NavItem icon={<FaUser />} label="HOME" />
        </span>
      </a>
      <a href="/search">
        <span>
          <NavItem icon={<RiSearch2Fill />} label="SEARCH" />
        </span>
      </a>
      <a href="/like">
        <span>
          {" "}
          <NavItem icon={<FaHeart />} label="WISHLIST" />
        </span>
      </a>
      <a href="/cart">
        <span>
          <NavItem icon={<BsHandbagFill />} label="CART" />
        </span>
      </a>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center text-xs text-gray-800 bg-white">
    <div className="text-xl mb-1">{icon}</div>
    <span>{label}</span>
  </div>
);

export default BottomNavBar;
