
"use client"

import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { FaRegUser, FaBars } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[58px] text-center justify-center bg-white">
  <div className="container mx-auto flex items-center justify-between py-[10px]">
      {/* Logo */}
      <div className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] ml-[-4rem]   sm-ml-[30px] mr-[30px] sm:mr-[40px] md:mr-[50px] lg:mr-[60px]">
        Bandage
      </div>
   
  
  
  
  
    
  
  
        {/* Navigation Links */}
        <ul className=" absolute hidden sm:flex sm:m-[20px]  sm:item-center  md:flex pl-[8rem] items-center gap-6">

          <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Home</li>
          <li className="relative group font-montserrat font-medium text-[14px] leading-[28px] tracking-[0.2px] text-black">
            <span className="hover:text-gray-700 cursor-pointer flex items-center">
              Shop <FaChevronDown className="ml-1 text-sm text-black" />
            </span>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48 py-2">
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Shop Layout</li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Product Layout</li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Product Type</li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Product Categories</li>
              <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Full Width</li>
            </ul>
          </li>
          <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">About</li>
          <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Blog</li>
          <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Contact</li>
          <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Pages</li>
        </ul>

        {/* Right Icons: Login, Search, Cart, Heart */}
        <div className="hidden md:flex items-center gap-6 mr-[-4rem]">
          {/* Login Icon */}
          <button className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] flex items-center gap-2">
            <FaRegUser className="text-[#23A6F0] w-[12px] h-[12px]" />
            Login / Register
          </button>

          {/* Search Icon */}
          <BsSearch className="text-[#23A6F0] cursor-pointer w-[16px] h-[16px]" />

          {/* Cart Icon */}
          <div className="relative">
            <BsCart className="text-[#23A6F0] cursor-pointer w-[16px] h-[16px]" />
            <span className="absolute top-[4px] right-[-10px] text-[#23A6F0] font-montserrat text-[12px] leading-[16px]">
              1
            </span>
          </div>

          {/* Heart Icon */}
          <div className="relative">
            <BsHeart className="text-[#23A6F0] w-[16px] h-[16px]" />
            <span className="absolute top-[4px] right-[-10px] text-[#23A6F0] font-montserrat text-[12px] leading-[16px]">
              1
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!isMenuOpen)}>
          <FaBars className="text-[#23A6F0] w-[24px] h-[24px]" />
        </div>
      </div>

      {/* Mobile Navigation Links (Toggled) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-4 gap-4">
            <li className="hover:text-gray-700 cursor-pointer">Home</li>
            <li className="hover:text-gray-700 cursor-pointer">Shop</li>
            <li className="hover:text-gray-700 cursor-pointer">About</li>
            <li className="hover:text-gray-700 cursor-pointer">Blog</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact</li>
            <li className="hover:text-gray-700 cursor-pointer">Pages</li>
            <li className="text-sm font-medium px-2 py-2 flex items-center gap-2 text-blue-600 hover:text-blue-800">
              <FaRegUser className="text-gray-700" />
              Login / Register
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
