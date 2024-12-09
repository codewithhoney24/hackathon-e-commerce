import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function FollowUsSection() {
  return (
    <div className="w-full h-[58px] bg-[#252B42] text-white flex flex-wrap items-center justify-between px-4 py-2 hidden sm:flex">

      {/* Left Section: Contact Info */}
      <div className="flex flex-wrap items-center gap-5 sm:gap-10 w-full sm:w-auto justify-center sm:justify-start ">
        <div className="flex items-center gap-2 ml-6">
          <HiOutlinePhone className="text-white w-[16px] h-[16px] " />
          <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] ">(225) 555-0118</p>
        </div>
        <div className="flex items-center gap-2 ">
          <TfiEmail className="text-white text-sm w-[16px] h-[16px]" />
          <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">michelle.rivera@example.com</p>
        </div>
      </div>

      {/* Center Section: Follow Us Message */}
      <div className="text-center w-full sm:w-auto py-2 sm:py-0">
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Follow Us and get a chance to win 80% off</p>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex gap-4 justify-center  w-full sm:w-auto mr-6">
        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] pt-[4px]">Follow us : </p>
        <a href="https://instagram.com" target="_blank"  rel="noopener noreferrer" className="text-white mt-2 text-lg hover:text-gray-400">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white mt-2 text-lg hover:text-gray-400">
          <FaYoutube />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mt-2 text-lg hover:text-gray-400">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mt-2 text-lg hover:text-gray-400">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};



























