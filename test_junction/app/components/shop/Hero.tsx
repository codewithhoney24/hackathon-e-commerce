import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-8">
      <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0'>
        <h2 className='text-[#252B42] font-bold text-[24px]'>Shop</h2>
        <p className="text-[#252B42] font-bold text-[14px] flex items-center justify-center md:justify-end gap-1">
          <Link href="/" className="hover:text-[#23A6F0] transition-colors">Home</Link>
          <FiChevronRight className="text-[#BDBDBD] text-[20px]" />{" "}
          <Link href="/shop" className="text-[#737373] hover:text-[#23A6F0] transition-colors">Shop</Link>
        </p>
      </div>
      <div className='mt-10 flex justify-center items-center w-full'>
        <Link href="/collection" className="w-full max-w-[1088px] block group relative">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 rounded-md"></div>
          <Image 
            src={"/card13.png"} 
            alt='Categories' 
            height={223} 
            width={1088} 
            style={{ height: "auto" }}
            className="w-full h-auto object-cover rounded-md shadow-sm group-hover:shadow-md transition-shadow" 
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
