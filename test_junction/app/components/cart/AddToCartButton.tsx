"use client";

import React, { useEffect, useState } from "react";
import { useCartStore } from "../../store/cartStore";
import { Product } from "../../../../types";
import toast from "react-hot-toast";
import Link from "next/link";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";

interface AddToCartButtonProps {
  product: Product;
  selectedColor?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, selectedColor }) => {
  const { items, addItem, increaseQty, decreaseQty } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold opacity-50 cursor-not-allowed">
        ADD TO CART
      </button>
    );
  }

  const cartItemId = selectedColor ? `${product._id}-${selectedColor}` : product._id;
  const cartItem = items.find((item) => item.cartItemId === cartItemId);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addItem(product, selectedColor);
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "bottom-right",
      style: {
        background: "#23A6F0",
        color: "#fff",
      },
    });
  };

  if (quantity > 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center border-2 border-[#23A6F0] rounded-md overflow-hidden bg-white">
          <button
            onClick={() => decreaseQty(cartItemId)}
            className="p-3 hover:bg-gray-100 text-[#23A6F0] transition-colors"
            aria-label="Decrease quantity"
          >
            <FiMinus size={20} />
          </button>
          <span className="px-4 font-bold text-[#252B42] min-w-[40px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => increaseQty(cartItemId)}
            className="p-3 hover:bg-gray-100 text-[#23A6F0] transition-colors"
            aria-label="Increase quantity"
          >
            <FiPlus size={20} />
          </button>
        </div>
        <Link
          href="/cart"
          className="text-[#23A6F0] font-bold hover:underline flex items-center gap-2"
        >
          <FiShoppingCart /> View Cart
        </Link>
      </div>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
    >
      <FiShoppingCart size={20} />
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
