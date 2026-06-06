"use client";

import React, { useState } from "react";
import { Product } from "../../../types";
import ColorSelector from "./ColorSelector";
import AddToCartButton from "./cart/AddToCartButton";
import AddToWishlistButton from "./cart/AddToWishlistButton";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const availableColors = product.colors && product.colors.length > 0 
    ? product.colors 
    : ["bg-[#23A6F0]", "bg-[#2DC071]", "bg-[#E77C40]", "bg-[#252B42]"];

  const [selectedColor, setSelectedColor] = useState<string>(availableColors[0]);

  return (
    <div className="flex flex-col space-y-6">
      {/* Colors */}
      <div className="flex items-center space-x-3">
        {availableColors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select color ${color}`}
            className={`w-8 h-8 rounded-full cursor-pointer transition-all ${color} ${
              selectedColor === color ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 opacity-80 hover:opacity-100"
            }`}
          />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-6 items-center">
        <AddToCartButton product={product} selectedColor={selectedColor} />
        <div className="flex items-center gap-3">
          <AddToWishlistButton product={product} />
          <Link 
            href="/cart" 
            className="p-3 border rounded-full hover:bg-gray-50 transition-colors text-[#252B42]"
          >
            <FiShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}