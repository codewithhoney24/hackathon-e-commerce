import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FreeTrail = () => {
  return (
    <div className="w-full">
      <div className="py-16 bg-[#FFFFFF] text-center mt-10 sm:mt-20 px-4">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#252B42]">
          Start your 14 days free trial
        </h2>
        <p className="text-[#737373] text-[14px] mt-4 mx-auto max-w-lg">
          Met minim Mollie non deserunt Alamo est sit cliquey dolor <br className="hidden sm:block" /> do
          met sent. RELUIT official consequat.
        </p>
        <Link href="/signup" className="mt-6 inline-block bg-[#23A6F0] rounded-md text-[14px] font-bold text-[#FFFFFF] px-8 py-4 hover:bg-blue-400 transition-colors">
          Try it free now
        </Link>

        <div className="flex justify-center mt-10">
          <Link href="#" className="text-[#55ACEE] mx-3 hover:scale-110 transition-transform">
            <FaTwitter size={30} />
          </Link>
          
          <Link href="#" className="text-[#000000] mx-3 hover:scale-110 transition-transform">
            <FaInstagram size={30} />
          </Link>
          <Link href="#" className="text-[#0A66C2] mx-3 hover:scale-110 transition-transform">
            <FaLinkedinIn size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeTrail;
