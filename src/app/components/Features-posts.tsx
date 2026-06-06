import Image from "next/image";
import Link from "next/link";
import { MdFolderCopy } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import {   FaChevronRight } from "react-icons/fa";
import React from "react";

const FeaturesPosts = () => {
  return (
    <div className="mt-20 sm:mt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 sm:mb-20">
        <h3 id="blog" className="text-[#23A6F0] text-[14px] font-bold hover:text-2xl sm:hover:text-4xl transition-all">Practice Advice</h3>
        <h2 className="text-[#252B42] text-[32px] sm:text-[40px] font-bold hover:text-[#23A6F0] transition-colors leading-tight mt-3">Featured Posts</h2>
        <p className="text-[#737373] hover:text-[#23A6F0] hover:text-lg sm:hover:text-xl transition-all text-[14px] mt-4 max-w-sm mx-auto">
          Problems trying to resolve the conflict between <br className="hidden sm:block" />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Flex container for centering the posts */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Post Template for Reusability */}
        {["blog1.png", "blog2.png", "blog3.png"].map((blog, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
          >
            {/* Image Section */}
            <div className="relative group w-full">
              {/* NEW Label */}
              <div className="absolute top-4 left-4 bg-[#E74040] text-white py-1 px-2 text-[14px] font-bold h-[24px] w-[58px] flex items-center justify-center z-10">
                NEW
              </div>

              <div className="relative w-full h-72">
                <Image
                  src={`/${blog}`}
                  alt="blog"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="p-4 sm:p-6 text-center w-full">
              {/* Category Tags */}
              <div className="flex justify-center space-x-3 mb-3 flex-wrap gap-y-2">
                <a 
                  href="https://www.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[rgb(38,137,230)] hover:text-lg sm:hover:text-xl hover:text-[#23A6F0] py-1 px-3 rounded-full text-[12px] bg-gray-100 transition-all cursor-pointer"
                >
                  Google
                </a>
                <a 
                  href="https://trends.google.com/trends/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#737373] hover:text-lg sm:hover:text-xl py-1 px-3 rounded-full hover:text-[#23A6F0] text-[12px] bg-gray-100 transition-all cursor-pointer"
                >
                  Trending
                </a>
                <a 
                  href="https://blog.google/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#737373] hover:text-lg sm:hover:text-xl py-1 px-3 rounded-full hover:text-[#23A6F0] text-[12px] bg-gray-100 transition-all cursor-pointer"
                >
                  New
                </a>
              </div>

              {/* Title */}
              <h3 className="text-[20px] hover:text-[#23A6F0] transition-colors text-[#252B42] mt-4 leading-snug">
                Loudest à la Madison #{index + 1} <br />
                <span className="text-[#252B42] text-[20px]">(L&#39;integral)</span>
              </h3>

              {/* Description */}
              <p className="text-[#737373] hover:text-[#23856D] transition-colors text-[14px] mt-4">
                We focus on ergonomics and meeting you where you work.
                It&apos;s only a keystroke away.
              </p>

              {/* Date and Comments */}
              <div className="flex justify-between items-center mt-6 text-[12px] text-[#737373] border-b pb-4">
                <div className="flex items-center space-x-2">
                  {/* Clock Icon and Date */}
                 < LuAlarmClock className="w-4 h-4 hover:text-[#23856D] text-[#23A6F0] transition-colors" />
                  <span className="hover:text-[#23856D] transition-colors">22 April 2021</span>
                </div>

                {/* Comments Section */}
                <div className="flex items-center space-x-2">
                  {/* Comment Icon */}
                  <MdFolderCopy  className="w-4 h-4 hover:text-[#23A6F0] text-[#23856D] transition-colors" />
                  <span className="text-[#737373] hover:text-[#23A6F0] transition-colors">10 Comments</span>
                </div>
              </div>

              {/* Learn More Button with > Icon */}
              <div className="mt-4 flex items-center justify-start">
                <a 
                  href="https://en.wikipedia.org/wiki/Blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#737373] text-sm font-bold py-2 px-4 rounded-md bg-transparent hover:bg-[#2DC071] hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <FaChevronRight className="inline-block text-[#23A6F0] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPosts;
