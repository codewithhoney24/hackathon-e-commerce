"use client";

import React, { useEffect, useState } from "react";
import { useCartStore } from "../../store/cartStore";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const FloatingCart = () => {
  const { getTotalItems } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const count = getTotalItems();

  if (count === 0) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-bounce-slow">
      <Link
        href="/cart"
        className="bg-[#2DC071] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative hover:scale-110 transition-transform active:scale-90 group"
      >
        <FiShoppingCart size={28} />
        <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-lg">
          {count}
        </span>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-[#252B42] text-white text-xs py-2 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          View Shopping Cart ({count})
        </span>
      </Link>
    </div>
  );
};

export default FloatingCart;
