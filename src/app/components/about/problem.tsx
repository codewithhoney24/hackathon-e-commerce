"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Problem = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex flex-col items-center mt-11 px-4 sm:px-6 lg:px-16 w-full">
      {/* Heading and Paragraph Section */}
      <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-6 py-8 max-w-5xl mx-auto">
        <div className="flex-1">
          <h3 className="text-[#E74040] hover:text-red-500 transition-colors text-[14px] mb-6 md:mb-8 font-medium">Problems trying</h3>
          <h2 className="font-bold text-[24px] text-[#252B42] leading-tight">
            Met minim Mollie non desert <br className="hidden sm:block" /> Alamo est sit cliquey dolor do{" "}
            <br className="hidden sm:block" /> met sent.
          </h2>
        </div>
        <p className="flex-1 text-[#737373] text-[14px] leading-relaxed mt-4 md:mt-0">
          Problems trying to resolve the conflict between the two major realms
          of
          <br className="hidden sm:block" />
          Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 mt-16 max-w-5xl mx-auto w-full">
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15K</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Happy Customers
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">150K</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Monthly Visitors
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">15</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Countries Worldwide
          </h2>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">100+</h3>
          <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
            Top Partners
          </h2>
        </div>
      </div>

      {/* Image/Video Section */}
      <div className="mt-16 sm:mt-24 w-full flex justify-center max-w-5xl mx-auto relative group">
        {!showVideo ? (
          <div 
            className="relative cursor-pointer overflow-hidden rounded-2xl w-full aspect-video md:h-[540px]"
            onClick={() => setShowVideo(true)}
          >
            <Image 
              src={"/problem.png"} 
              alt="problem" 
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-2xl transform transition-transform group-hover:scale-110">
                <FaPlay className="text-2xl sm:text-3xl ml-1" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full aspect-video md:h-[540px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="About Us Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem;
