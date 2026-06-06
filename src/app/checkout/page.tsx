"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { FiCheckCircle, FiLock, FiCreditCard, FiTruck } from "react-icons/fi";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty!</h1>
          <Link href="/shop" className="text-[#23A6F0] font-bold hover:underline">
            Go back to shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/api/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          totalPrice: getTotalPrice(),
          items: items,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.custom((t) => (
          <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden`}>
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <FiCheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-bold text-gray-900 uppercase">Order Placed Successfully!</p>
                  <p className="mt-1 text-sm text-gray-500">Your order #{result.orderId.slice(-6)} has been confirmed.</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#23A6F0] hover:text-blue-500 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        ), { duration: 6000 });

        clearCart();
        router.push("/orders");
      } else {
        throw new Error(result.error || "Failed to place order");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-[#252B42] mb-10 flex items-center gap-2">
            <FiLock className="text-green-500" /> Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Shipping & Payment Form */}
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FiTruck className="text-[#23A6F0]" /> Shipping Information
                </h2>
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                        <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                    </div>
                    <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                    <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                    <input type="text" name="address" placeholder="Address (Street, House No.)" required value={formData.address} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                    <div className="grid grid-cols-3 gap-4">
                        <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                        <input type="text" name="state" placeholder="State" required value={formData.state} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                        <input type="text" name="zip" placeholder="ZIP" required value={formData.zip} onChange={handleInputChange} className="w-full p-3 border rounded-md focus:ring-2 ring-[#23A6F0] outline-none" />
                    </div>

                    <h2 className="text-xl font-bold mt-10 mb-6 flex items-center gap-2 pt-6 border-t">
                        <FiCreditCard className="text-[#23A6F0]" /> Payment Method
                    </h2>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 p-4 border-2 border-[#23A6F0] rounded-lg bg-blue-50 cursor-pointer">
                            <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-[#23A6F0]" />
                            <div className="flex-grow">
                                <p className="font-bold text-[#252B42]">Cash on Delivery (COD)</p>
                                <p className="text-xs text-[#737373]">Pay when you receive your order</p>
                            </div>
                        </label>
                        <label className="flex items-center gap-3 p-4 border rounded-lg opacity-50 cursor-not-allowed grayscale">
                            <input type="radio" name="payment" disabled className="w-5 h-5" />
                            <div className="flex-grow">
                                <p className="font-bold text-[#252B42]">Credit / Debit Card</p>
                                <p className="text-xs text-[#737373]">Currently unavailable in your region</p>
                            </div>
                        </label>
                    </div>

                    <button 
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full bg-[#2DC071] text-white py-5 rounded-md font-bold text-lg mt-8 shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${isProcessing ? 'opacity-80 cursor-wait' : ''}`}
                    >
                        {isProcessing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                PROCESSING...
                            </>
                        ) : (
                            `PLACE ORDER (Rs. ${getTotalPrice().toLocaleString()})`
                        )}
                    </button>
                </form>
            </section>
          </div>

          {/* Right: Order Summary */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-bold text-[#252B42] mb-8 border-b pb-4 text-center">Your Order</h2>
                <div className="max-h-[400px] overflow-y-auto pr-2 mb-8 space-y-4">
                    {items.map((item) => (
                        <div key={item.cartItemId} className="flex gap-4">
                            <div className="relative w-16 h-16 flex-shrink-0">
                                <Image src={item.imageUrl} alt={item.name} fill sizes="64px" className="object-cover rounded-md" />
                            </div>
                            <div className="flex-grow">
                                <p className="font-bold text-sm text-[#252B42] line-clamp-1">{item.name}</p>
                                <p className="text-xs text-[#737373]">Qty: {item.quantity}</p>
                                {item.selectedColor && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <span className="text-[10px] text-[#737373]">Color:</span>
                                    <div 
                                        className={`w-2 h-2 rounded-full border border-gray-200 ${item.selectedColor.startsWith('bg-') ? item.selectedColor : ''}`} 
                                        style={!item.selectedColor.startsWith('bg-') ? { backgroundColor: item.selectedColor } : {}}
                                    />
                                  </div>
                                )}
                            </div>
                            <p className="font-bold text-[#23856D] text-sm whitespace-nowrap">
                                Rs. {( (item.discountPercentage ? item.price - (item.price * item.discountPercentage / 100) : item.price) * item.quantity ).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 pt-6 border-t">
                    <div className="flex justify-between text-[#737373]">
                        <span>Subtotal</span>
                        <span className="font-bold text-[#252B42]">Rs. {getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[#737373]">
                        <span>Shipping</span>
                        <span className="text-green-500 font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between font-bold text-2xl text-[#23A6F0] pt-4 border-t">
                        <span>Grand Total</span>
                        <span>Rs. {getTotalPrice().toLocaleString()}</span>
                    </div>
                </div>

                <div className="mt-8 bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <FiLock className="text-gray-400" />
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        100% Encrypted & Secure Checkout
                    </p>
                </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
