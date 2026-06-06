"use client";

import Image from "next/image";
import { Product } from "../../../types";
import React from "react";
import Link from "next/link";
import AddToWishlistButton from "./cart/AddToWishlistButton";
import { useCartStore } from "../store/cartStore";
import toast from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calculate discounted price if discountPercentage exists
  const discountedPrice = product.discountPercentage 
    ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
    : null;

  return (
    <div className="group relative">
        <Link href={`/product/${product.slug}`} className="flex flex-col items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg bg-white">
            <div className="relative w-[250px] h-[350px]">
                <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-md"
                />
                {product.isNew && (
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span>
                )}
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-[#252B42] text-[16px] font-bold">{product.name}</h3>
                <p className="text-[#737373] text-[14px]">{product.department || product.category || "General"}</p>
                <div className="mt-2">
                {discountedPrice ? (
                    <p className="text-[#BDBDBD] text-[16px] font-bold flex justify-center gap-2">
                    <span className="line-through">Rs. {product.price.toFixed(2)}</span>
                    <span className="text-[#23856D]">Rs. {discountedPrice}</span>
                    </p>
                ) : (
                    <p className="text-[#23856D] text-[16px] font-bold">Rs. {product.price.toFixed(2)}</p>
                )}
                </div>
                <div className="flex justify-center gap-2 mt-4">
                <div className="w-4 h-4 bg-[#23A6F0] rounded-full" />
                <div className="w-4 h-4 bg-[#23856D] rounded-full" />
                <div className="w-4 h-4 bg-[#E77C40] rounded-full" />
                <div className="w-4 h-4 bg-[#252B42] rounded-full" />
                </div>
            </div>
        </Link>
        
        {/* Actions Overlay */}
        <div className="absolute top-8 right-8 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <AddToWishlistButton product={product} />
            <AddToCartIcon product={product} />
        </div>
    </div>
  );
};

// Client Component for the cart icon
function AddToCartIcon({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "bottom-right",
      style: { background: "#23A6F0", color: "#fff" },
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors flex items-center justify-center text-[#252B42]"
      title="Add to Cart"
    >
      <FiShoppingCart size={18} />
    </button>
  );
}

export default ProductCard;
