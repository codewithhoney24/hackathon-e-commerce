"use client";

import React, { useEffect, useState } from "react";
import { useWishlistStore } from "../../store/wishlistStore";
import { Product } from "../../../../types";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import toast from "react-hot-toast";

interface AddToWishlistButtonProps {
  product: Product;
  showText?: boolean;
}

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ product, showText = false }) => {
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const isLiked = useWishlistStore((state) => 
    state.items.some((item) => item._id === product._id)
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleToggle = () => {
    toggleItem(product);
    if (!isLiked) {
      toast.success(`${product.name} added to wishlist! ❤️`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`${product.name} removed from wishlist`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-3 border rounded-full transition-all flex items-center gap-2 ${
        isLiked 
          ? "bg-red-50 border-red-200 text-red-500 shadow-sm" 
          : "hover:bg-gray-50 text-[#252B42]"
      }`}
      title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isLiked ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
      {showText && <span className="font-bold text-sm">{isLiked ? "WISHLISTED" : "WISHLIST"}</span>}
    </button>
  );
};

export default AddToWishlistButton;
