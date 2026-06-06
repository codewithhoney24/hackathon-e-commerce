import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrdersByUserId } from "../components/sanityFetch";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { FiPackage, FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default async function OrdersPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const orders = await getOrdersByUserId(userId);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-[#252B42] mb-8 flex items-center gap-3">
          <FiPackage className="text-[#23A6F0]" /> My Order History
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
            <p className="text-xl text-gray-500 mb-6">You haven't placed any orders yet.</p>
            <Link href="/shop" className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-600 transition-colors inline-block">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order: any) => (
              <div key={order._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Order Header */}
                <div className="bg-gray-50 p-6 border-b flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Order Placed</p>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#252B42]">
                        <FiCalendar /> {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Total</p>
                      <p className="text-sm font-bold text-[#23856D]">Rs. {order.totalPrice.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Status</p>
                      <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Order ID</p>
                    <p className="text-xs font-mono text-gray-400">#{order._id.slice(-8)}</p>
                  </div>
                </div>

                {/* Order Body */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Items Section */}
                    <div className="md:col-span-2 space-y-4">
                      {order.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border">
                            <Image src={item.imageUrl} alt={item.name} fill sizes="80px" className="object-contain" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-[#252B42] text-sm">{item.name}</h4>
                            <p className="text-xs text-[#737373]">Qty: {item.quantity}</p>
                            {item.selectedColor && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-[#737373]">Color:</span>
                                <div 
                                    className={`w-3 h-3 rounded-full border border-gray-200 ${item.selectedColor.startsWith('bg-') ? item.selectedColor : ''}`} 
                                    style={!item.selectedColor.startsWith('bg-') ? { backgroundColor: item.selectedColor } : {}}
                                />
                              </div>
                            )}
                          </div>
                          <p className="font-bold text-[#23856D] text-sm">Rs. {item.price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Section */}
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4 border border-gray-100">
                      <h4 className="text-xs uppercase font-bold text-gray-400 tracking-widest flex items-center gap-2">
                        <FiMapPin /> Shipping Details
                      </h4>
                      <div className="text-sm text-[#252B42] space-y-1">
                        <p className="font-bold">{order.customerName}</p>
                        <p>{order.address}</p>
                        <p>{order.city}</p>
                        <p>{order.phone}</p>
                      </div>
                      <div className="pt-4 mt-4 border-t flex items-center gap-2 text-xs text-gray-400">
                        <FiClock /> Delivery expected in 3-5 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}