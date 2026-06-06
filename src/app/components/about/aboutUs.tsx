import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-8 sm:py-16">
      {/* Text Section */}
      <div className="w-full text-center md:text-left md:w-1/2 mt-8 md:mt-0">
        <h3 className="hover:text-3xl hover:text-yellow-400 text-[#252B42] font-bold text-[16px] mb-6">
          ABOUT COMPANY
        </h3>
        <h1 className="text-[#252B42] hover:text-red-600 font-bold text-[32px] sm:text-[48px] md:text-[58px] mb-6">
          ABOUT US
        </h1>
        <p className="text-[#737373] hover:text-yellow-400 text-[16px] sm:text-[18px] md:text-[20px] mt-5 max-w-sm mx-auto md:mx-0">
          We know how large objects will act, <br className="hidden sm:block" />
          but things on a small scale
        </p>

        {/* Button Section */}
        <div className="mt-7 flex justify-center md:justify-start">
          <Link href="/contact" className="hover:scale-105 px-6 py-4 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-transform text-center font-bold text-[14px]">
            Get Quote Now
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/aboutus.png"
          alt="aboutus"
          height={280}
          width={415}
          className="w-full max-w-[415px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;
