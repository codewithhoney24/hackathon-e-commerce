import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { HiOutlinePhone } from "react-icons/hi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
 
export default function FollowUsSection() {
  return (
    <div className="w-full bg-[#252B42] text-white hidden lg:flex items-center justify-between px-6 py-3 text-sm">
      {/* Left Section: Contact Info */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="w-4 h-4" />
          <p className="font-montserrat font-bold tracking-wide">(225) 555-0118</p>
        </div>
        <div className="flex items-center gap-2">
          <TfiEmail className="w-4 h-4" />
          <p className="font-montserrat font-bold tracking-wide">
            michelle.rivera@example.com
          </p>
        </div>
      </div>

      {/* Middle Section: Message */}
      <div className="flex-1 text-center px-4 hidden xl:block">
        <p className="font-montserrat font-bold tracking-wide">
          Follow Us and get a chance to win 80% off
        </p>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex items-center gap-4">
        <p className="font-montserrat font-bold tracking-wide">Follow us : </p>
        <div className="flex items-center gap-3">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-lg transition-colors">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-lg transition-colors">
            <FaYoutube />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-lg transition-colors">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-lg transition-colors">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};



























