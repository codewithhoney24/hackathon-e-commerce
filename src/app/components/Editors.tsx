import Image from "next/image";
import Link from "next/link";
import React from "react";

const EditorsPics = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16 mb-7 bg-[#FAFAFA] pt-3">
      <div>
        <h2 className="text-[#252B42] font-bold text-[24px] mb-2 hover:text-4xl">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-[#737373]  hover:text-2xl text-[14px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        {/* Men Image with Fixed Size White Div */}
        <Link href="/shop" className="relative group block">
          <Image
            src={"/men.png"}
            alt="men"
            width={509}
            height={500}
            style={{ height: "auto" }}
            className="cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white hover:bg-yellow-700 flex items-center justify-center transition-colors">
            <span className="text-[#252B42] hover:text-3xl font-bold text-lg">MEN</span>
          </div>
        </Link>

        {/* Women Image with Fixed Size White Div */}
        <Link href="/shop" className="relative group block">
          <Image
            src={"/women.png"}
            alt="women"
            width={240}
            height={500}
            style={{ height: "auto" }}
            className="cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white hover:bg-gray-300 flex items-center justify-center transition-colors">
            <span className="text-[#252B42]  hover:text-3xl  font-bold text-lg">WOMEN</span>
          </div>
        </Link>

        {/* Accessories and Kids Image with Fixed Size White Divs */}
        <div className="flex flex-col gap-6">
          {/* Accessories Image with Fixed Size White Div */}
          <Link href="/shop" className="relative group block">
            <Image
              src={"/accessories.png"}
              alt="accessories"
              width={240}
              height={242}
              style={{ height: "auto" }}
              className="cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white hover:bg-orange-200 flex items-center justify-center transition-colors">
              <span className="text-[#252B42]  hover:text-2xl  font-bold text-lg">ACCESSORIES</span>
            </div>
          </Link>

          {/* Kids Image with Fixed Size White Div */}
          <Link href="/shop" className="relative group block">
            <Image
              src={"/kids.png"}
              alt="kids"
              width={240}
              height={242}
              style={{ height: "auto" }}
              className="cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white hover:bg-amber-200 flex items-center justify-center transition-colors">
              <span className="text-[#252B42]  hover:text-3xl  font-bold text-lg">KIDS</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6 px-4 w-full">
        {/* Men Image with Fixed Size White Div */}
        <Link href="/shop" className="relative w-full max-w-[400px] group block">
          <Image
            src={"/men.png"}
            alt="men"
            width={509}
            height={500}
            style={{ width: "auto", height: "auto" }}
            className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42]  hover:text-3xl  font-bold text-lg">MEN</span>
          </div>
        </Link>

        {/* Women Image with Fixed Size White Div */}
        <Link href="/shop" className="relative w-full max-w-[400px] group block">
          <Image
            src={"/women.png"}
            alt="women"
            width={240}
            height={500}
            style={{ width: "auto", height: "auto" }}
            className="w-full h-[500px] object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42]  hover:text-3xl  font-bold text-lg">WOMEN</span>
          </div>
        </Link>

        {/* Accessories and Kids Image with Fixed Size White Divs */}
        <div className="flex flex-col gap-6 w-full max-w-[400px]">
          {/* Accessories Image with Fixed Size White Div */}
          <Link href="/shop" className="relative w-full group block">
            <Image
              src={"/accessories.png"}
              alt="accessories"
              width={240}
              height={242}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-[242px] object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42]  hover:text-lg  font-bold text-base">ACCESSORIES</span>
            </div>
          </Link>

          {/* Kids Image with Fixed Size White Div */}
          <Link href="/shop" className="relative w-full group block">
            <Image
              src={"/kids.png"}
              alt="kids"
              width={240}
              height={242}
              style={{ width: "auto", height: "auto" }}
              className="w-full h-[242px] object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42]  hover:text-3xl  font-bold text-lg">KIDS</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditorsPics;
