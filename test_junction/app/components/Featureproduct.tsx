
import Image from "next/image";
import { Product } from "../../../types"; 
import ProductCard from "@/app/components/ProductCard"; 
import AddToCartButton from "./cart/AddToCartButton";

import React from "react";

interface FeatureProductsProps {
  products: Product[];
}

const FeatureProducts: React.FC<FeatureProductsProps> = ({ products }) => {
  const vitaClassicProduct: Product = {
    _id: "vita-classic",
    name: "Vita Classic Product",
    slug: "vita-classic-product",
    price: 16480,
    imageUrl: "/classic.png",
    colors: ["bg-[#2DC071]"], // Adding a default color just to fulfill the requirements if needed by the component
  };

  const neuralUniverseProduct: Product = {
    _id: "neural-universe",
    name: "Neural Universe Product",
    slug: "neural-universe-product",
    price: 15000,
    imageUrl: "/universe.png",
    colors: ["bg-[#23A6F0]"], 
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full px-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="bg-[#23856D] w-full mt-[8rem] pt-10 pb-10 sm:py-0 flex items-center justify-between flex-col md:flex-row min-h-[auto] md:min-h-[713px]">
        {/* Text Section */}
        <div className="text-white space-y-6 px-4 sm:ml-12 md:ml-36 text-center sm:text-left flex-1">
          <h3 className="text-[20px] hover:text-4xl">SUMMER 2020</h3>
          <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-bold hover:text-green-300">
            Vita Classic <br /> <span>Product</span>
          </h2>
          <p className="text-[14px] sm:text-[16px] hover:text-2xl">
            We know how large objects will act, We know <br />
            <span>how objects will act, We know</span>
          </p>

          {/* Price and Button Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mt-4 sm:mt-8 pb-7">
            <h3 className="text-[24px] hover:text-4xl font-bold">{`Rs. 16,480`}</h3>
            <div className="mt-4 sm:mt-0">
              <AddToCartButton product={vitaClassicProduct} selectedColor="bg-[#2DC071]" />
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full h-auto sm:w-[400px] md:w-[510px] md:mr-[2rem] mt-10 md:mt-0 flex justify-center items-end">
          <Image
            src={"/classic.png"}
            alt="classic"
            width={443}
            height={438}
            sizes="(max-width: 768px) 100vw, 443px"
            className="object-contain w-[80%] md:w-full max-w-[443px] h-auto"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row mt-20 px-4 gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={"/universe.png"}
            alt="universe"
            height={704}
            width={682}
            sizes="(max-width: 768px) 100vw, 682px"
            className="w-full max-w-[600px] h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2 mt-6 md:mt-0 max-w-[500px]">
          <h3 className="text-[#BDBDBD]  hover:text-[#2DC071] hover:text-4xl font-bold text-[16px]">SUMMER 2020</h3>
          <h2 className="text-[#252B42] hover:text-[#2DC071] font-bold text-[30px] sm:text-[40px] mt-4 md:mt-8">
            Part of the Neural <br className="hidden md:block" /> Universe
          </h2>
          <p className="text-[#737373] hover:text-[rgb(45,190,112)] text-[14px] sm:text-[20px] mt-4 md:mt-7">
            We know how large objects will act, <br className="hidden md:block" />
            but things on a small scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mt-5 justify-center md:justify-start">
            <AddToCartButton product={neuralUniverseProduct} selectedColor="bg-[#23A6F0]" />
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
