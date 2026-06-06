import React from "react";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Product } from "../../../types";
import ProductActions from "../components/ProductActions";

const collectionProducts: Product[] = [
  {
    _id: "col-1",
    slug: "black-suit",
    imageUrl: "/card1.png",
    name: "black suit",
    department: "Men's Fashion",
    price: 5000,
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]", "bg-[#E74040]"], // 5 colors
  },
  {
    _id: "col-2",
    slug: "white-blue-suit",
    imageUrl: "/card2.png",
    name: "white blue suit",
    department: "Men's Fashion",
    price: 6000,
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]", "bg-[#E74040]"],
  },
  {
    _id: "col-3",
    slug: "white-suit",
    imageUrl: "/card3.png",
    name: "white suit",
    department: "Outerwear",
    price: 4000,
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]", "bg-[#E74040]"],
  },
  {
    _id: "col-4",
    slug: "pink-dress",
    imageUrl: "/card4.png",
    name: "pink dress",
    department: "Women's Fashion",
    price: 5000,
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]", "bg-[#E74040]"],
  },
  {
    _id: "col-5",
    slug: "light-purple-sky-blue-suit",
    imageUrl: "/card5.png",
    name: "light purple sky blue suit",
    department: "Fashion",
    price: 7000,
    colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]", "bg-[#E74040]"],
  },
];

export default function CollectionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      {/* Top Full Image from Shop */}
      <div className="w-full flex justify-center mt-8 px-4 sm:px-8 md:px-16 lg:px-24 mb-12">
        <Image 
          src="/card13.png" 
          alt="Collection Header" 
          height={223} 
          width={1088} 
          style={{ height: "auto" }}
          className="w-full max-w-[1088px] h-auto object-cover rounded-md shadow-sm"
        />
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#252B42] mb-4">Clothes Collection</h1>
            <p className="text-[#737373] max-w-2xl mx-auto">Explore our exclusive 5 items collection. Pick your favorite color and add directly to your cart in a simple, easy way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionProducts.map((product) => (
            <div key={product._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <div className="w-full text-center mb-6 border-b pb-6">
                <h3 className="font-bold text-xl text-[#252B42] mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-[#23856D]">Rs. {product.price.toLocaleString()}</p>
              </div>

              {/* Directly showing 5 colors and Add to Cart from the component */}
              <div className="w-full flex justify-center">
                  <ProductActions product={product} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}