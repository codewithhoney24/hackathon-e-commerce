
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { useWishlistStore } from "../store/wishlistStore";
import { useCartStore } from "../store/cartStore";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const items = useWishlistStore((state) => state.items);
  const removeItem = useWishlistStore((state) => state.removeItem);
  const { addItem: addToCart } = useCartStore();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    console.log("WishlistPage: Mounted. Current items:", items);
  }, [items]);

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeItem(product._id);
    toast.success(`${product.name} moved to cart!`);
  };

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-[#FAFAFA]">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-[#FAFAFA] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#252B42] mb-8">My Wishlist</h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500 text-lg mb-6">Your wishlist is empty</p>
              <Link 
                href="/shop" 
                className="inline-block bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-colors"
              >
                Go Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div key={item._id} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                  <div className="relative h-64 w-full bg-gray-50">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#252B42] mb-2">{item.name}</h3>
                    <p className="text-[#23856D] font-bold text-xl mb-4">${item.price}</p>
                    
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="flex-grow flex items-center justify-center gap-2 bg-[#23A6F0] text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                      >
                        <FiShoppingCart /> Add to Cart
                      </button>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="p-2 text-gray-400 hover:text-red-500 border border-gray-200 rounded-md hover:border-red-500 transition-colors"
                        title="Remove from Wishlist"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WishlistPage;
