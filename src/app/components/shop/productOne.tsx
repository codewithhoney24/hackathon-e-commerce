"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";




import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const ProductOne = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-[#23856D] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex items-center gap-4 ml-36">
            <div className="flex items-center gap-1 mr-20 ">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1 ">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block mr-8">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mr-36">
            <p className="hidden md:block">Follow Us:</p>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white    relative z-40 ml-40">
        <div className="container  mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42] ml-10">Bandage</div>

          {/* Action Icons (Mobile and Desktop) */}
          <div className="flex items-center gap-4 md:hidden ">
            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex mr-26">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li>
                <Link href="#" className="hover:text-[#23A6F0] transition-all">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/product"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Shop
                  <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#23A6F0] transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pages" className="hover:text-[#23A6F0] transition-all">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Icons for Desktop */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0] mr-52">
            <button className="text-sm font-medium">Login/Register</button>
            <FiSearch className="text-lg cursor-pointer" />
            <FiShoppingCart className="text-lg cursor-pointer" />
            <FiHeart className="text-lg cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button  title="button" className="block lg:hidden text-gray-700 hover:text-gray-800 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
          </path>
          </svg>
          </button>
      </div>



      <div  className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

        <div className="max-w-[1440px] mx-auto text-sm text-gray-500 mb-6">
        <span>Home</span>
        &gt;
        <span>Shop</span>
        </div>


        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <div className="relative w-full h-[400px] bg-gray-100  overflow-hidden">
          <Image
            src="/single-product-1-cover-2.jpg" // Ensure the correct path for your image in the public folder
            alt="Main Product"
            className="w-full h-full object-cover"
            layout="fill" 
          />
<button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white   w-24px  h-44.47px text-2xl p-2">
  &lt;
</button>
<button className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white  text-2xl w-24px  h-44.47px p-2 ">
  &gt;
</button>
        </div>



<div  className="flex justify-start gap-4 mt-4 ">
<Image src="/single-product-1-thumb-1.jpg" alt="Thumbnail 1" width={100} height={75} className="w-100 h-75 object-cover   border-gray-300 hover:border-blue-500"/>
<Image src="/single-product-1-thumb-2 (1).jpg" alt="Thumbnail 2" width={100} height={75} className="w-100 h-75 object-cover   border-gray-300 hover:border-blue-500"/>

</div>     
      </div>


      <div className="flex flex-col justify-between">
        <div>
        <h1 className="text-2xl font-bold text-gray-800">Floating Phone</h1>
        

        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400 text-sm">★★★★★</div>
          <span className="text-sm text-gray-500 ml-2">(10 Reviews)</span>
          
        </div>

        <p className="text-lg font-bold text-gray-800 mt-4">$1,139.33</p>
        <p className="text-sm text-gray-500 mt-1">Availability: <span className="text-[#23A6F0]
">In Stock</span></p>
        <p className="w-[464px] h-[40px] top-[190px] left-[24px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#858585] mt-6">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

        </div >
        <hr className="w-[445px]  left-[25px] border border-[#BDBDBD] " />

       
        <div className=" flex gap-4   ">
        <span className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full border border-gray-300 hover:scale-110 cursor-pointer"></span>
        <span className="w-[30px] h-[30px] bg-[#2DC071] rounded-full border border-gray-300 hover:scale-110 cursor-pointer"></span>
        <span className="w-[30px] h-[30px] bg-[#E77C40] rounded-full border border-gray-300 hover:scale-110 cursor-pointer"></span>
        <span className="w-[30px] h-[30px] bg-[#252B42] rounded-full border border-gray-300 hover:scale-110 cursor-pointer"></span>

        </div>



        <div className=" flex gap-4 mb-20  ">
        <div className=" items-center justify-center flex w-[148px] h-[44px] rounded-[5px] p-[10px_20px] gap-[10px] bg-[#23A6F0]">
        Select Options
        </div>

        <div className="bg-white   hover:bg-gray-300 hover:shadow-md transition duration-300 ease-in-out rounded-full w-14 h-14 border border-[#E8E8E8] flex items-center justify-center">
      <FaRegHeart  className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:stroke-blue-500" />
    </div>


        <div className="bg-white   hover:bg-gray-300 hover:shadow-md transition duration-300 ease-in-out rounded-full w-14 h-14 border border-[#E8E8E8] flex items-center justify-center">
      <BsCart  className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:stroke-blue-500" />
    </div>

    <div className="bg-white   hover:bg-gray-300 hover:shadow-md transition duration-300 ease-in-out rounded-full w-14 h-14 border border-[#E8E8E8] flex items-center justify-center">
      <IoEye  className="w-8 h-8 transition-transform duration-300 hover:scale-110 hover:stroke-blue-500" />
    </div>
      </div>  
      </div>


      <div className=" px-4 flex text-center justify-center sm:px-6 my-16 lg:px-8 h-91">
        <div className="ml-96  mb-8">
        <ul className="flex ml-96 text-center justify-center text-gray-500  text-sm item-center font-medium space-x-4"><li className="cursor-pointer  w-[86px] h-[24px] text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-blue-500">Description</li><li className="cursor-pointer w-[172px] h-[24px] text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-blue-500">Additional Information</li><li className="cursor-pointer w-[64px] h-[24px] text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] hover:text-blue-500 flex justify-center items-center">
  Reviews 
  <span className="text-[#23856D] w-[20px h-[20px] font-bold text-[14px]
 ml-1">(0)</span>
</li></ul>

        </div>
      </div> 
    </div>


      
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="col-span-1 bg-gray-100">
  <Image src="/single-product-1-cover(3).jpg" alt="Product"  width={316 }  height={312}  className="w-full h-auto rounded-lg object-cover "/>
  
  </div>
  <div className="col-span-1 lg:col-span-1 w-[332px] h-auto max-h-[427px] rounded-[9px] pb-[25px] gap-[40px]">
  <h2 className="w-[304px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-12">
    the quick fox jumps over
  </h2>
  <p className="text-sm text-[#737373] mb-12">
    Met minim Mollie non desert Alamo est sit cliquey  official consequent doordolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial official consequent door consequent sent nostrum met.
  </p>
  <p className="text-sm text-[#737373] mb-12">
    Met minim Mollie non desert Alamo est sit official consequent door cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial official consequent door consequent sent nostrum met.
  </p>
  <p className="text-sm text-[#737373] mb-12">
    Met minim Mollie non desert Alamo est sit cliquey official consequent door dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation official consequent door venial consequent sent nostrum met.
  </p>
</div>
<div  className="col-span-1 lg:col-span-1">
<h2  className="w-[304px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-5">the quick fox jumps over</h2>

<ul className="space-y-3 text-sm text-gray-600"><li className="flex items-center"><span className="text-blue-500 mr-2 mb-3">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2 mb-3">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2 mb-3">›</span>the quick fox jumps over the lazy dog</li></ul>
<br></br>


<h2  className="w-[304px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-6">the quick fox jumps over</h2>

<ul className="space-y-3 text-sm text-gray-600"><li className="flex items-center"><span className="text-blue-500 mr-2 ">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2 ">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2 mb-3">›</span>the quick fox jumps over the lazy dog</li><li className="flex items-center"><span className="text-blue-500 mr-2">›</span>the quick fox jumps over the lazy dog</li></ul>

</div>
</div>
</div>



<div className="bg-white my-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Bestseller Products
          </h2>
          <hr className=" w-1042 h-2 mb-4"></hr>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">




          <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/product-cover-5.png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
            </div>






                       <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/product-cover-5 (1).png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D]  font-bold">$6.48</span>
                </div>
              </div>
              </div>





                  <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/fixed-height.png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
              </div>




              <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/product-cover-5 (3).png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
              </div>






            <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/fixed-height (2).png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
            </div>






                       <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/product-cover-5 (4).png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
              </div>





                  <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/product-cover-5.png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>
              </div>




              <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-[280px]">
                <Image
                  src="/product-cover-5 (1).png"
                  alt="Graphic Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Graphic Design
                </h3>
                <p className="text-sm text-gray-500">English Department</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-sm text-gray-500 line-through">
                    $16.48
                  </span>
                  <span className="text-sm  text-[#23856D] font-bold">$6.48</span>
                </div>
              </div>


              
              </div>




<div className=" py-6 bg-white w-[1440px] mx-auto ">
<div className='mt-12 flex justify-center items-center'>
            <Image src={"/companies.png"} alt='companies' width={1054} height={175} />
        </div> 




      


              <footer className="py-6 bg-white w-[1440px] mx-auto   ">
      <div className="flex justify-between items-center py-12 px-10 mx-auto w-[1440px]  bg-[#FAFAFA]">
        {/* Left: Text */}
        <h2 className="text-[24px] font-bold text-[#252B42]">Bandage</h2>

        {/* Right: Icons */}
        <div className="flex space-x-6">
          {/* Facebook Icon */}
          <Link href="#" aria-label="Facebook" className="text-[#23A6F0] hover:opacity-75">
            <FaFacebookF className="w-6 h-6" />
          </Link>
          {/* Instagram Icon */}
          <Link href="#" aria-label="Instagram" className="text-[#23A6F0] hover:opacity-75">
            <FaInstagram className="w-6 h-6" />
          </Link>
          {/* Twitter Icon */}
          <Link href="#" aria-label="Twitter" className="text-[#23A6F0] hover:opacity-75">
            <FaTwitter className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] mt-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Company Info */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Company Info</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Carrier</Link></li>
              <li><Link href="#" className="hover:underline">We are hiring</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Legal</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:underline">Compliance</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Features</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">Business Marketing</Link></li>
              <li><Link href="#" className="hover:underline">User Analytics</Link></li>
              <li><Link href="#" className="hover:underline">Live Chat</Link></li>
              <li><Link href="#" className="hover:underline">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1 min-w-[120px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Resources</h3>
            <ul className="text-[#737373] space-y-1 text-[14px] font-bold">
              <li><Link href="#" className="hover:underline">iOS & Android</Link></li>
              <li><Link href="#" className="hover:underline">Watch a Demo</Link></li>
              <li><Link href="#" className="hover:underline">Customers</Link></li>
              <li><Link href="#" className="hover:underline">API</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-bold text-[#252B42] text-[16px] mb-2">Get In Touch</h3>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-2 border rounded-l-md text-[14px] w-full focus:outline-none"
                />
                <button className="bg-[#23A6F0] mr-5 text-white px-4 py-2 rounded-r-md hover:bg-blue-400 text-[14px]">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-[12px] mt-2">Lore ipsum dolor Amit</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-left bg-[#FAFAFA] py-9">
          <p className="text-[#737373] font-bold text-[14px]">Made With Love By Nousheen Atif. All Rights Reserved</p>
        </div>
      </div>
    </footer>


            </div>
          </div>
        </div>
      </div>
      </div>

  );
};

export default ProductOne;

     
     
     
     
     
     
