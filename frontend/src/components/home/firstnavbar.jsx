import React from "react";
import {ChevronDown,BrainCog} from "lucide-react"
function FirstNavbar() {
  return (
    <div className="bg-black text-white px-6 py-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 ml-0">
          <a href="https://facebook.com" className="text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://pinterest.com" className="text-white">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://youtube.com" className="text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="text-xs lg:text-sm text-center px-4 md:flex font-semibold hidden sm:block">
          <span>Eat Ice Cream for Breakfast with us on 2/3. Shops open at 9 a.m.</span>
        </div>
        <div className="text-xs lg:text-sm text-center px-4 md:flex font-semibold lg:hidden">
          <span>Eat Ice Cream for Breakfast with us on 2/3. <br /> Shops open at 9 a.m.</span>
        </div>

        <div className="flex space-x-4 hidden md:flex">
          <span className="flex text-xs mt-1" ><BrainCog size={16} className="mt mr-1"/>Eng<span><ChevronDown size={16} strokeWidth={3} className="font-bold"/></span></span>
          <span className="flex text-xs mt-1">$ USD<span><ChevronDown size={16} strokeWidth={3} className=" font-bold"/></span></span>
        </div>
      </div>
    </div>
  );
}

export default FirstNavbar;
