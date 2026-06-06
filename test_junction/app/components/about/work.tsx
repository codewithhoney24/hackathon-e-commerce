import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div className="bg-[#2A7CC7] w-full h-auto py-16 lg:py-0 px-4 sm:px-8 lg:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-full">
        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2 md:pl-16 lg:pl-32 flex flex-col justify-center items-center md:items-start h-full">
          <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4 md:mb-6">
            WORK WITH US
          </h3>
          <h2 className="text-[#FFFFFF] font-bold text-[32px] sm:text-[40px] mb-4 md:mb-6 leading-tight">
            Now Let&apos;s grow Yours
          </h2>
          <p className="text-[#FFFFFF] text-[14px] sm:text-[16px] mb-8 max-w-sm mx-auto md:mx-0">
            The gradual accumulation of information about atomic and <br className="hidden md:block" />
            small-scale behavior during the first quarter of the 20th
          </p>
          <Link href="/pricing" className="border px-8 py-3 text-[#FFFFFF] font-bold rounded-md transition-transform hover:scale-105 hover:bg-[#1E6CB3] hover:border-transparent">
            Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/work.png"
            alt="work"
            height={600}
            width={590}
            style={{ height: "auto" }}
            className="w-full max-w-[590px] h-auto object-cover md:object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
