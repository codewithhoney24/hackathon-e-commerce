
"use client"

import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { FaRegUser} from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';


export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-full h-[58px] text-center justify-center bg-white">
  <div className="container mx-auto flex items-center justify-between py-[14px]">
      {/* Logo */}
      <div className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] pl-20  ">
        Bandage
      </div>
   
  
        {/* Navigation Links */}
        <ul className=" absolute hidden sm:flex sm:m-[24px]  sm:item-center  md:flex pl-[20rem] items-center gap-6">

        <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
  <a href="/" className="hover:text-gray-700">Home</a>
</li>
<li className="relative group font-montserrat font-medium text-[14px] leading-[28px] tracking-[0.2px] text-black">
<a href="/shop " className="hover:text-gray-700 cursor-pointer flex items-center">
    Shop <FaChevronDown className="ml-1 text-sm text-black" />
  </a>
  <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48 py-2">
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="/shop-layout" className="text-black">Shop Layout</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="/product-layout" className="text-black">Product Layout</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="/product-type" className="text-black">Product Type</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="/product-categories" className="text-black">Product Categories</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="/full-width" className="text-black">Full Width</a>
    </li>
  </ul>
</li>




          <li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
  <a href="/about">About</a>
</li>
<li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
  <a href="/blog">Blog</a>
</li>
<li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
  <a href="/contact">Contact</a>
</li>
<li className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
  <a href="/pages">Pages</a>
</li>
        </ul>

        {/* Right Icons: Login, Search, Cart, Heart */}
       

        <div className="flex items-center cursor-pointer gap-6 lg:mr-[5rem]">
  {/* Login Icon (Hidden on small screens) */}
  <button className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] hidden md:flex items-center gap-2">
    <FaRegUser className="text-[#23A6F0] w-[12px] h-[12px]" />
    Login / Register
  </button>
<div className="flex gap-6 ">
  {/* Search Icon */}
  <BsSearch className="text-[#23A6F0] cursor-pointer w-[16px] " />

{/* Cart Icon */}
<div className="relative 
">
  <BsCart className="text-[#23A6F0] cursor-pointer w-[16px] h-[16px]" />
  <span className="absolute top-[4px] right-[-10px] text-[#23A6F0] font-montserrat text-[12px] leading-[16px] hidden md:inline">
    1
  </span>
</div>
</div>


  {/* Heart Icon (Hidden on small screens) */}
  <div className="relative hidden md:flex">
    <BsHeart className="text-[#23A6F0] w-[16px] h-[16px]" />
    <span className="absolute top-[4px] right-[-10px] text-[#23A6F0] font-montserrat text-[12px] leading-[16px]">
      1
    </span>
  </div>

 
</div>
       

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer " onClick={() => setMenuOpen(!isMenuOpen)}>
        <HiMiniBars3BottomRight  className="text-[#23A6F0] w-[24px] h-[24px]  text-lg font-extrabold " />
        </div>
      </div>

      
      {isMenuOpen && (
  <div className="md:hidden bg-white shadow-lg">
    <ul className="flex flex-col p-4 gap-4">
      <li className="hover:text-gray-700 cursor-pointer">
        <a href="/" className="text-black">Home</a>
      </li>
      <li className="hover:text-gray-700 cursor-pointer">
        <a href="/shop" className="text-black">Shop</a>
      </li>
      <li className="hover:text-gray-700 cursor-pointer">
        <a href="/about" className="text-black">About</a>
      </li>
      <li className="hover:text-gray-700 cursor-pointer">
        <a href="/blog" className="text-black">Blog</a>
      </li>
      <li className="hover:text-gray-700 cursor-pointer">
        <a href="/contact" className="text-black">Contact</a>
      </li>
      <li className="hover:text-gray-700 cursor-pointer">
        <a href="/pages" className="text-black">Pages</a>
      </li>
      <li className="text-sm font-medium px-2 py-2 flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <FaRegUser className="text-gray-700" />
        <a href="/login" className="text-blue-600 hover:text-blue-800">Login / Register</a>
      </li>
    </ul>
  </div>
)}

      
    </nav>
  );
}
