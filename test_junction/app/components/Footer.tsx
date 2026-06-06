import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 mt-2 sm:mt-10 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-center py-10 sm:py-12 px-10 mx-auto max-w-screen-xl bg-[#FAFAFA] gap-6 sm:gap-0">
        {/* Left: Text */}
        <h2 className="text-[24px] font-bold text-[#252B42] text-center sm:text-left">Bandage</h2>

        {/* Right: Icons */}
        <div className="flex space-x-6 justify-center sm:justify-start">
          {/* Facebook Icon */}
          <Link href="#" aria-label="Facebook" className="text-[#23A6F0] hover:opacity-75">
            <FaFacebookF className="w-6 h-6" />
          </Link>
          {/* Instagram Icon */}
          <Link href="#" aria-label="Instagram" className="text-[#23A6F0] hover:opacity-75">
            <FaInstagram className="w-6 h-6" />
          </Link>
          {/* Twitter Icon */}
          <Link href="#" aria-label="Twitter" className="text-[#23A6F0] hover:opacity-75">
            <FaTwitter className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-[16px] font-bold text-[#252B42] mb-4">Company Info</h3>
            <ul className="text-[#737373] space-y-3 text-[14px] font-bold">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Carrier</Link></li>
              <li><Link href="#" className="hover:underline">We are hiring</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[16px] font-bold text-[#252B42] mb-4">Legal</h3>
            <ul className="text-[#737373] space-y-3 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:underline">Compliance</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-[16px] font-bold text-[#252B42] mb-4">Features</h3>
            <ul className="text-[#737373] space-y-3 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">Business Marketing</Link></li>
              <li><Link href="#" className="hover:underline">User Analytics</Link></li>
              <li><Link href="#" className="hover:underline">Live Chat</Link></li>
              <li><Link href="#" className="hover:underline">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[16px] font-bold text-[#252B42] mb-4">Resources</h3>
            <ul className="text-[#737373] space-y-3 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">iOS & Android</Link></li>
              <li><Link href="#" className="hover:underline">Watch a Demo</Link></li>
              <li><Link href="#" className="hover:underline">Customers</Link></li>
              <li><Link href="#" className="hover:underline">API</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-[16px] font-bold text-[#252B42] mb-4">Get In Touch</h3>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-3 border border-gray-300 rounded-l-md text-[14px] w-full focus:outline-none"
                />
                <button className="bg-[#23A6F0] text-white px-4 py-3 rounded-r-md hover:bg-blue-400 text-[14px]">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-[12px] mt-2 text-center sm:text-left">Lore ipsum dolor Amit</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center sm:text-left bg-[#FAFAFA] py-9">
          <p className="text-[#737373] font-bold text-[14px] text-center justify-center">Made With Love By Nousheen Atif. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
