
"use client"

import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { FaRegUser} from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to shop with search query
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
    }
  };

  return (
    <nav className="w-full bg-white relative z-50 shadow-sm">
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-white z-[60] flex items-center px-4 sm:px-6 lg:px-8 shadow-md">
          <form onSubmit={handleSearch} className="w-full max-w-7xl mx-auto flex items-center gap-4">
            <BsSearch className="text-[#23A6F0] w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search products, categories, or try 'Free'..." 
              className="flex-grow bg-transparent border-none outline-none text-lg font-medium text-[#252B42]"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <Link 
                href="/signup" 
                className="hidden sm:block text-[#23A6F0] font-bold text-sm hover:underline whitespace-nowrap"
                onClick={() => setSearchOpen(false)}
              >
                Try for Free
              </Link>
              <button 
                type="button" 
                onClick={() => setSearchOpen(false)}
                className="text-[#737373] hover:text-black p-2"
              >
                <HiMiniBars3BottomRight className="w-6 h-6 rotate-45" />
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="font-Montserrat font-bold text-2xl tracking-wide">
          <Link href="/">Bandage</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li className="font-montserrat font-bold text-sm text-[#737373]">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          </li>
          <li className="relative group font-montserrat font-medium text-sm text-black">
            <Link href="/product" className="hover:text-gray-700 cursor-pointer flex items-center transition-colors">
              Product <FaChevronDown className="ml-1 text-xs" />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48 py-2 z-50 rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop" className="text-black block">Shop</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/product" className="text-black block">Product Detail</Link>
              </li>
            </ul>
          </li>
          <li className="font-montserrat font-bold text-sm text-[#737373]">
            <Link href="/blog" className="hover:text-gray-700 transition-colors">Blog</Link>
          </li>
          <li className="font-montserrat font-bold text-sm text-[#737373]">
            <Link href="/about" className="hover:text-gray-700 transition-colors">About</Link>
          </li>
          <li className="font-montserrat font-bold text-sm text-[#737373]">
            <Link href="/pricing" className="hover:text-gray-700 transition-colors">Pricing</Link>
          </li>
          <li className="font-montserrat font-bold text-sm text-[#737373]">
            <Link href="/contact" className="hover:text-gray-700 transition-colors">Contact</Link>
          </li>
          <SignedIn>
            <li className="font-montserrat font-bold text-sm text-[#23A6F0]">
              <Link href="/orders" className="hover:text-blue-600 transition-colors">Orders</Link>
            </li>
          </SignedIn>
        </ul>

        {/* Right Icons: Login, Search, Cart, Heart */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Auth Section */}
          <div className="hidden md:flex items-center min-w-[100px] justify-end">
            {isMounted ? (
              <>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="font-montserrat font-bold text-sm text-[#23A6F0] flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <FaRegUser className="w-4 h-4" />
                      <span>Login / Register</span>
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </>
            ) : (
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            )}
          </div>

          <div className="flex items-center gap-4">

            {/* Search Icon */}
            <BsSearch 
              className="text-[#23A6F0] cursor-pointer w-4 h-4 hover:text-blue-600 transition-colors" 
              onClick={() => setSearchOpen(true)}
            />

            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <BsCart className="text-[#23A6F0] cursor-pointer w-4 h-4 hover:text-blue-600 transition-colors" />
              {isMounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Heart Icon (Dynamic) */}
            <Link href="/wishlist" className="relative">
              <BsHeart className="text-[#23A6F0] cursor-pointer w-4 h-4 hover:text-blue-600 transition-colors" />
              {isMounted && wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1 focus:outline-none" 
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <HiMiniBars3BottomRight className="text-[#23A6F0] w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-lg z-40">
          <ul className="flex flex-col px-4 py-6 gap-4 text-center">
            <li><Link href="/" onClick={() => setMenuOpen(false)} className="text-[#737373] text-lg font-medium hover:text-black">Home</Link></li>
            <li><Link href="/product" onClick={() => setMenuOpen(false)} className="text-[#737373] text-lg font-medium hover:text-black">Product</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)} className="text-[#737373] text-lg font-medium hover:text-black">Blog</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)} className="text-[#737373] text-lg font-medium hover:text-black">About</Link></li>
            <li><Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-[#737373] text-lg font-medium hover:text-black">Pricing</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)} className="text-[#737373] text-lg font-medium hover:text-black">Contact</Link></li>
            <li className="pt-4 border-t border-gray-100 flex justify-center items-center gap-2 text-[#23A6F0] font-bold">
              <FaRegUser className="w-5 h-5" />
              <Link href="/login" onClick={() => setMenuOpen(false)}>Login / Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
