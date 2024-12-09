import React from 'react';
import Image from 'next/image';

function ShopCards() {
  return (
    <div className="text-white w-full h-screen my-[6rem] flex justify-center items-end pb-10">
      <div className="w-[1050px]">
        {/* Header Section */}
        <h1 className="w-[181px] h-[32px] font-bold font-montserrat leading-[32px] tracking-[0.1px] text-[#252B42] flex  justify-center text-center flex justify-start mx-auto">
          EDITOR’S PICK
        </h1>
        <p className="font-montserrat leading-[20px] tracking-[0.2px] text-[#737373] font-normal text-center mb-6">
          Problems trying to resolve the conflict between
        </p>

        {/* Images Layout */}
        <div className="flex gap-[10px] justify-center">
          {/* Large Image */}
          <Image
            src="/filter.png"
            alt="Large Image"
            width={510}
            height={500}
            className="w-[510px] h-[500px] object-cover"
          />

          {/* Medium Image */}
          <Image
            src="/filter (1).png"
            alt="Medium Image"
            width={240}
            height={500}
            className="w-[240px] h-[500px] object-cover"
          />

          {/* Column for Small Images */}
          <div className="flex flex-col gap-[10px]">
            {/* Small Image 1 */}
            <Image
              src="/filter (2).png"
              alt="Small Image 1"
              width={240}
              height={242}
              className="w-[240px] h-[242px] object-cover"
            />

            {/* Small Image 2 */}
            <Image
              src="/filter (3).png"
              alt="Small Image 2"
              width={240}
              height={242}
              className="w-[240px] h-[242px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
