"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-[24px] font-bold text-[#252B42]">
          Bandage
        </div>

        {/* Navbar (Desktop) */}
        <nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold">
          <ul className="list-none flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Icons and Buttons */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className="md:hidden p-2 text-[#252B42] hover:text-[#23A6F0] transition-all"
          >
            <FiSearch size={20} />
          </button>

          {/* Cart Icon */}
          <button
            aria-label="Cart"
            className="md:hidden p-2 text-[#252B42] hover:text-[#23A6F0] transition-all"
          >
            <FiShoppingCart size={20} />
          </button>

          {/* Login Button */}
          <button className="hidden md:block px-4 py-2 text-[#23A6F0] rounded hover:bg-[#23A6F0] font-bold hover:text-white transition-all">
            Login
          </button>

          {/* Become a member Button */}
          <button className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#23A6F0] text-white rounded-md hover:bg-[#1E90FF] transition-all">
            Become a member
            <FiArrowRight className="text-lg" />
          </button>

          {/* Hamburger Menu */}
          <button
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            className="md:hidden text-[#252B42]"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4 px-4 py-6">
          <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
