
import Image from "next/image";
import { Product } from "../../../types"; // Ensure this path is correct
import ProductCard from "@/app/components/ProductCard"; // Ensure this path is correct

import React from "react";

const FeatureProducts: React.FC = () => {
  const products: Product[] = [
    {
      image: "/feature1.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature2.png",
      name: "Web Design",
      department: "Marketing Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature3.png",
      name: "Logo Design",
      department: "Branding Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature4.png",
      name: "UI/UX Design",
      department: "Product Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature5.png",
      name: "Branding Design",
      department: "Creative Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature6.png",
      name: "App Design",
      department: "Tech Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature7.png",
      name: "Product Strategy",
      department: "Sales Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature8.png",
      name: "Marketing Strategy",
      department: "Sales Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42] ]",]
      
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
      <div>
        <h3 className="text-[#737373] text-[20px] hover:bg-slate-200 ">Featured Products</h3>
        <h2 className="text-[#252B42] text-[24px]  hover:text-4xl font-bold mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] hover:bg-slate-200 text-[14px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Cart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

   
 


      <div className="bg-[#23856D] sm:h-[990px] md:h-[713px] w-full mt-[8rem] pt-7  flex items-center justify-between flex-col md:flex-row">
        {/* Text Section */}
        <div className="text-white space-y-6  sm:ml-12 md:ml-36 text-center sm:text-left">
          <h3 className="text-[20px] hover:text-4xl">SUMMER 2020</h3>
          <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-bold hover:text-green-300">
            Vita Classic <br /> <span>Product</span>
          </h2>
          <p className="text-[14px] sm:text-[16px] hover:text-2xl">
            We know how large objects will act, We know <br />
            <span>how objects will act, We know</span>
          </p>

          {/* Price and Button Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 pb-7">
            <h3 className="text-[24px] hover:text-4xl font-bold">{`$16.48`}</h3>
            <button className="text-[16px] font-bold bg-[#2DC071] py-4 px-10 rounded-md hover:bg-green-600 mt-4 sm:mt-0">
              ADD TO CART
            </button>
          </div>
        </div>
{/* Image Section */}
<div className="w-full h-auto sm:w-[400px] md:w-[510px] mr-[2rem] pt-[5.5rem]">
  <Image
    src={"/classic.png"}
    alt="classic"
    width={443}
    height={438}
    className="object-cover w-full max-w-[443px] h-auto"
  />
</div>

      </div>

      <div className="flex items-center justify-center  flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src={"/universe.png"}
            alt="universe"
            height={704}
            width={682}
            className="w-full"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-auto mt-6 md:mt-0">
          <h3 className="text-[#BDBDBD]  hover:text-[#2DC071] hover:text-4xl font-bold text-[16px]">SUMMER 2020</h3>
          <h2 className="text-[#252B42] hover:text-[#2DC071] font-bold text-[30px] sm:text-[40px] mt-8">
            Part of the Neural <br /> Universe
          </h2>
          <p className="text-[#737373] hover:text-[rgb(45,190,112)] text-[14px] sm:text-[20px] mt-7">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <div className="flex gap-5 mt-5 justify-center md:justify-start">
            <button className="text-white text-[14px] font-bold py-3 px-8 rounded-md bg-[#23A6F0] hover:bg-transparent hover:text-blue-500 md:bg-[#2DC071] md:hover:bg-transparent md:hover:text-[#2DC071]">
              Buy Now
            </button>
            <button className="text-[#23A6F0] text-[14px] font-bold py-3 px-8 rounded-md border-2 border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white md:border-[#2DC071] md:text-[#2DC071] md:hover:bg-transparent md:hover:bg-green-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
