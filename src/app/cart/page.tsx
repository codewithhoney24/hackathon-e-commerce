"use client";

import React, { useEffect, useState } from "react";
import { useCartStore } from "../store/cartStore";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { 
    items, 
    removeItem, 
    increaseQty, 
    decreaseQty, 
    getTotalPrice, 
    getTotalItems,
    getTotalSavings,
    clearCart 
  } = useCartStore();
  
  const [isMounted, setIsMounted] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckout = () => {
    setIsRedirecting(true);
    setTimeout(() => {
        router.push("/checkout");
    }, 800);
  };

  if (!isMounted) return null;

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const totalSavings = getTotalSavings();

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#252B42]">
                Shopping Cart <span className="text-lg font-normal text-[#737373]">({totalItems} items)</span>
            </h1>
            {items.length > 0 && (
                <button 
                    onClick={clearCart}
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium transition-colors"
                >
                    <FiTrash2 /> Clear Cart
                </button>
            )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FiShoppingBag size={40} className="text-[#BDBDBD]" />
            </div>
            <p className="text-xl text-[#737373] mb-8">Your cart feels a bit light. Let&apos;s add some items!</p>
            <Link 
              href="/shop" 
              className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg"
            >
              <FiArrowLeft /> GO SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => {
                const itemPrice = item.discountPercentage 
                    ? item.price - (item.price * item.discountPercentage) / 100
                    : item.price;
                
                return (
                    <div key={item.cartItemId} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                        <div className="relative w-32 h-32 flex-shrink-0">
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        
                        <div className="flex-grow text-center sm:text-left">
                            <h3 className="font-bold text-xl text-[#252B42] mb-1">{item.name}</h3>
                            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                                <p className="text-sm text-[#737373]">{item.category || "General"}</p>
                                {item.selectedColor && (
                                    <div className="flex items-center gap-2">
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className="text-sm text-[#737373] flex items-center gap-1">
                                            Color: <div 
                                                className={`w-3 h-3 rounded-full border border-gray-200 ${item.selectedColor.startsWith('bg-') ? item.selectedColor : ''}`} 
                                                style={!item.selectedColor.startsWith('bg-') ? { backgroundColor: item.selectedColor } : {}}
                                            />
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6">
                                <div className="flex items-center border-2 border-[#E8E8E8] rounded-md overflow-hidden bg-white">
                                    <button 
                                        onClick={() => decreaseQty(item.cartItemId)}
                                        className="px-4 py-2 hover:bg-gray-100 text-[#23A6F0] transition-colors border-r border-[#E8E8E8]"
                                    >
                                        <FiMinus />
                                    </button>
                                    <span className="px-6 py-2 font-bold text-[#252B42]">{item.quantity}</span>
                                    <button 
                                        onClick={() => increaseQty(item.cartItemId)}
                                        className="px-4 py-2 hover:bg-gray-100 text-[#23A6F0] transition-colors border-l border-[#E8E8E8]"
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                                
                                <button 
                                    onClick={() => removeItem(item.cartItemId)}
                                    className="text-red-400 hover:text-red-600 text-sm flex items-center gap-1 transition-colors"
                                >
                                    <FiTrash2 /> Remove
                                </button>
                            </div>
                        </div>

                        <div className="text-right flex flex-col items-center sm:items-end justify-between h-full min-w-[120px]">
                            <p className="text-2xl font-bold text-[#23856D]">
                                Rs. {(itemPrice * item.quantity).toLocaleString()}
                            </p>
                            {item.discountPercentage && (
                                <p className="text-xs text-[#2DC071] font-bold bg-green-50 px-2 py-1 rounded-full mt-2">
                                    Saved Rs. {((item.price * item.discountPercentage / 100) * item.quantity).toLocaleString()}
                                </p>
                            )}
                        </div>
                    </div>
                );
              })}
              
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-2 text-[#23A6F0] font-bold hover:underline py-4"
              >
                <FiArrowLeft /> Continue Shopping
              </Link>
            </div>

            {/* Right: Summary */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                    <h2 className="text-2xl font-bold text-[#252B42] mb-8 border-b pb-4">Order Summary</h2>
                    
                    <div className="space-y-6">
                        <div className="flex justify-between text-[#737373] text-lg">
                            <span>Subtotal ({totalItems} items)</span>
                            <span className="font-medium text-[#252B42]">Rs. {totalPrice.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between text-[#737373] text-lg">
                            <span>Shipping</span>
                            <span className="text-green-500 font-bold tracking-widest uppercase text-sm">FREE</span>
                        </div>

                        {totalSavings > 0 && (
                            <div className="flex justify-between text-[#2DC071] text-lg bg-green-50 p-4 rounded-md border border-green-100 border-dashed">
                                <span className="flex items-center gap-2 font-medium">Total Savings</span>
                                <span className="font-bold">- Rs. {totalSavings.toLocaleString()}</span>
                            </div>
                        )}
                        
                        <div className="pt-6 border-t">
                            <div className="flex justify-between font-bold text-3xl text-[#252B42] mb-2">
                                <span>Total</span>
                                <span className="text-[#23A6F0]">Rs. {totalPrice.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-[#737373] text-right mb-8 italic">Inclusive of all taxes</p>
                        </div>

                        <button 
                            onClick={handleCheckout}
                            disabled={isRedirecting}
                            className={`w-full bg-[#2DC071] text-white py-5 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] uppercase tracking-wider flex items-center justify-center gap-2 ${isRedirecting ? 'opacity-80 cursor-wait' : 'hover:bg-green-600'}`}
                        >
                            {isRedirecting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    REDIRECTING...
                                </>
                            ) : (
                                "PROCEED TO CHECKOUT"
                            )}
                        </button>
                        
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-[10px] text-[#BDBDBD] text-center uppercase tracking-widest">Secure Payment Powered by</p>
                            <div className="flex gap-4 grayscale opacity-50">
                                <Image src="/companies.png" alt="payments" width={200} height={30} className="h-8 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
