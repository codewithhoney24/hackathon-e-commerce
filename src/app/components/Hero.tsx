import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="relative mx-auto max-w-full w-full h-screen flex items-start justify-center ">
      {/* Hero Image */}
      <Image
        className="rounded object-cover absolute   w-full h-full "
        alt="hero"
        src="/shop-hero-1-product-slide-1.jpg"
      width={1440}
      height={716}
      style={{ objectFit: 'cover' }}
      
      />

      {/* Overlay and Text Block */}
      <div className="relative z-10 flex flex-col items-start justify-start text-white sm:mr-[20rem] text-left space-y-10 mt-60">
        {/* Subtitle */}
        <h2 className="text-sm sm:text-base md:text-lg font-semibold ">
          SUMMER 2020
        </h2>

        {/* Main Title */}
        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold ">
          NEW COLLECTION
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base ">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>

        {/* Call-to-Action Button */}
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white text-xs sm:text-sm font-bold rounded hover:bg-green-700 transition-all">
          SHOP NOW
        </button>
      </div>

     
    </div>
  );
}

export default Hero;
