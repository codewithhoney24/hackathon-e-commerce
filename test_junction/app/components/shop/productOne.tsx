"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import React from "react";

import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cartStore";
import { useWishlistStore } from "@/app/store/wishlistStore";
import toast from "react-hot-toast";

import { Product } from "../../../../types";

interface ProductOneProps {
  products: Product[];
}

const BestsellerCard = ({ product, discountedPrice, itemColors, addItem }: any) => {
  const [selectedColor, setSelectedColor] = useState(itemColors[0]);

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full group bg-white">
      <Link href={`/product/${product.slug}`} className="flex-grow">
        <div className="relative w-full h-[280px]">
          <Image src={product.imageUrl} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4 pb-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category || "General"}</p>
          <div className="mt-2 flex items-center space-x-2">
            {discountedPrice ? (
              <><span className="text-sm text-gray-500 line-through">PKR {product.price.toLocaleString()}</span><span className="text-sm text-[#23856D] font-bold">PKR {Number(discountedPrice).toLocaleString()}</span></>
            ) : (
              <span className="text-sm text-[#23856D] font-bold">PKR {product.price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
      
      {/* Color Selection for Bestseller */}
      <div className="px-4 py-2 flex gap-2">
        {itemColors.map((color: string, idx: number) => (
          <button
            key={idx}
            onClick={() => setSelectedColor(color)}
            className={`w-5 h-5 rounded-full border transition-all ${selectedColor === color ? "ring-2 ring-[#23A6F0] scale-110" : "opacity-70 hover:opacity-100"}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="p-4 pt-2">
        <button 
          onClick={(e) => { 
            e.preventDefault(); 
            addItem(product, selectedColor); 
            toast.success(`${product.name} added to cart!`); 
          }} 
          className="w-full bg-[#23A6F0] text-white py-2 rounded-md font-bold hover:bg-blue-600 transition-colors text-sm"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const ProductOne = ({ products }: ProductOneProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description"); 
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [rating, setRating] = useState(5);
  const [isMounted, setIsMounted] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const cartItems = useCartStore((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const productVariants = [
    {
      id: 0,
      name: "Nordic Yellow Sofa",
      image: "/single-product-1-cover-2.jpg",
      price: 90000,
      color: "#F3CD03",
      category: "Furniture",
      description: "Modern Nordic yellow sofa with premium boucle fabric. Soft texture, comfortable seating and a warm Scandinavian style for your living room."
    },
    {
      id: 1,
      name: "Classic Black Sofa",
      image: "/sofa-1.jpg",
      price: 61750,
      color: "#000000",
      category: "Furniture",
      description: "Elegant black sofa with a clean modern design. Perfect for luxury interiors with durable fabric and comfortable support."
    },
    {
      id: 2,
      name: "White Minimal Sofa",
      image: "/sofa-3.jpg",
      price: 45000,
      color: "#FFFFFF",
      category: "Furniture",
      description: " Single Minimal white sofa designed for bright and peaceful spaces. Premium finish with a smooth modern look."
    },
    {
      id: 3,
      name: "Cream Comfort Sofa",
      image: "/sofa-4.jpg",
      price: 85500,
      color: "#FAF9F6",
      category: "Furniture",
      description: "Soft cream sofa with cozy texture. A perfect combination of comfort and modern home style."
    },
    {
      id: 4,
      name: "Brown Premium Sofa",
      image: "/sofa-2.jpg",
      price: 99000,
      color: "#5f2721",
      category: "Furniture",
      description: "Bold red sofa with premium upholstery. Adds energy and style to your living room."
    },
    {
      id: 5,
      name: "Asian Wooden Chair",
      image: "/single-product-1-thumb-1.jpg",
      price: 45000,
      color: "#c0beba",
      category: "Chair",
      description: " Single Elegant wooden chair inspired by Asian design. Comfortable seating with natural wooden details."
    },
    {
      id: 6,
      name: "Cozy Couple Winter Blanket",
      image: "/universe.png",
      price: 3000,
      color: "#b42424",
      category: "Home",
      description: "Stay warm and comfortable with this cozy winter blanket designed for couples. Featuring a stylish red and black check pattern, this soft blanket adds a comfortable and relaxing feel to your winter moments. Made with a warm and soft fabric texture, it is perfect for cold evenings, movie nights, and creating a cozy atmosphere at home. Its classic check design gives a modern yet comfortable look."
    }
  ];

  const currentVariant = productVariants[currentImageIndex];

  const productData = {
    _id: `variant-${currentVariant.id}`,
    name: currentVariant.name,
    price: currentVariant.price,
    imageUrl: currentVariant.image,
    slug: currentVariant.name.toLowerCase().replace(/ /g, '-'),
    category: currentVariant.category,
    isNew: true,
    colors: [currentVariant.color]
  };

  const isLiked = wishlistItems.some(item => item._id === productData._id);

  const handleAddToCart = () => {
    addItem(productData, currentVariant.color);
    toast.success(`${productData.name} added to cart!`);
  };

  const handleAddToCartAndNavigate = () => {
    addItem(productData, currentVariant.color);
    toast.success(`${productData.name} added to cart!`);
    router.push("/cart");
  };

  const handleAddToWishlistAndNavigate = () => {
    if (!isLiked) {
      toggleWishlist(productData);
      toast.success(`${productData.name} added to wishlist`);
    }
    router.push("/wishlist");
  };

  const handleViewProduct = () => {
    router.push(`/product`);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productVariants.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productVariants.length) % productVariants.length);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewComment) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Review submitted! It will appear after moderation.");
    setIsReviewModalOpen(false);
    setReviewName("");
    setReviewComment("");
  };

  const oldProducts: Product[] = [
    { _id: "old-1", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/product-cover-5.png", slug: "graphic-design-1", category: "English Department" },
    { _id: "old-2", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/product-cover-5 (1).png", slug: "graphic-design-2", category: "English Department" },
    { _id: "old-3", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/fixed-height.png", slug: "graphic-design-3", category: "English Department" },
    { _id: "old-4", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/product-cover-5 (3).png", slug: "graphic-design-4", category: "English Department" },
    { _id: "old-5", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/fixed-height (2).png", slug: "graphic-design-5", category: "English Department" },
    { _id: "old-6", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/product-cover-5 (4).png", slug: "graphic-design-6", category: "English Department" },
    { _id: "old-7", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/card7.png", slug: "graphic-design-7", category: "English Department" },
    { _id: "old-8", name: "Graphic Design", price: 16.48, discountPercentage: 60, imageUrl: "/card8.png", slug: "graphic-design-8", category: "English Department" },
  ];

  const combinedProducts = [...products, ...oldProducts];

  const features = currentVariant.category === "Chair" 
    ? ["Ergonomic Design", "Premium Build Quality", "Easy Maintenance", "Modern Aesthetic"]
    : currentVariant.category === "Home"
    ? ["Warm & Soft Texture", "Stylish Check Pattern", "Breathable Fabric", "Machine Washable"]
    : ["Boucle Fabric Finish", "Premium Build Quality", "Easy Maintenance", "Modern Aesthetic"];

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-[#23856D] py-4 hidden lg:block w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-2">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <p className="hidden md:block">Follow Us and get a chance to win 80% off</p>
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram /></Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FiYoutube /></Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FiFacebook /></Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter /></Link>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white relative z-40 w-full shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>
          <div className="flex items-center gap-4 md:hidden">
            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <Link href="/cart"><FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" /></Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <FiX className="text-3xl text-[#252B42]" /> : <FiMenu className="text-3xl text-[#252B42]" />}
            </button>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium text-[#737373]">
              <li><Link href="/" className="hover:text-[#23A6F0] transition-all">Home</Link></li>
              <li className="relative group"><Link href="/shop" className="flex items-center gap-1 hover:text-[#23A6F0] transition-all">Shop<FiChevronDown /></Link></li>
              <li><Link href="/about" className="hover:text-[#23A6F0] transition-all">About</Link></li>
              <li><Link href="/blog" className="hover:text-[#23A6F0] transition-all">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#23A6F0] transition-all">Contact</Link></li>
              <li><Link href="/pages" className="hover:text-[#23A6F0] transition-all">Pages</Link></li>
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
            <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition-colors">Login/Register</Link>
            <FiSearch className="text-lg cursor-pointer hover:text-blue-600 transition-colors" />
            <Link href="/cart" className="relative">
              <FiShoppingCart className="text-lg cursor-pointer hover:text-blue-600 transition-colors" />
              {isMounted && totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">{totalCartItems}</span>
              )}
            </Link>
            <Link href="/wishlist" className="relative">
              <FiHeart className="text-lg cursor-pointer hover:text-blue-600 transition-colors" />
              {isMounted && wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">{wishlistCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 w-full">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-400">Shop</span>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col w-full">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-[#F5F5F5] overflow-hidden rounded-md group">
              <Image
                src={currentVariant.image} 
                alt={currentVariant.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-contain transition-all duration-500" 
              />
              <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white/50 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors opacity-0 group-hover:opacity-100">&lt;</button>
              <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black bg-white/50 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors opacity-0 group-hover:opacity-100">&gt;</button>
            </div>
            <div className="flex justify-start gap-4 mt-4 overflow-x-auto pb-2">
              {productVariants.map((item, index) => (
                <div 
                  key={item.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-[80px] sm:w-[100px] h-[60px] sm:h-[75px] flex-shrink-0 cursor-pointer border-2 rounded-sm overflow-hidden transition-all PKR{currentImageIndex === index ? "border-[#23A6F0] scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
                >
                  <Image src={item.image} alt={`Thumbnail PKR{index}`} fill sizes="100px" className="object-cover" />
                </div>
              ))}
            </div>     
          </div>

          <div className="flex flex-col justify-between px-4 sm:px-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{currentVariant.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm text-gray-500 ml-2">(10 Reviews)</span>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-4">PKR ${currentVariant.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">Availability: <span className="text-[#23A6F0]">In Stock</span></p>
              <p className="w-full sm:max-w-[464px] h-auto font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#858585] mt-6 italic border-l-4 border-[#23A6F0] pl-4">
                {currentVariant.description}
              </p>
            </div>
            <hr className="w-full sm:max-w-[445px] border border-[#BDBDBD] my-6" />
            <div className="flex flex-col gap-2 mb-6">
              <p className="text-sm font-bold text-[#252B42]">Selected: <span className="text-[#23A6F0]">{currentVariant.name.split(' ').slice(1).join(' ')}</span></p>
              <div className="flex flex-wrap gap-4">
                {productVariants.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-[30px] h-[30px] rounded-full border-2 transition-all cursor-pointer ${currentImageIndex === index ? "border-black scale-125 ring-2 ring-offset-2 ring-[#23A6F0]" : "border-gray-300 hover:scale-110"}`}
                    style={{ backgroundColor: item.color }}
                    title={item.name}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button onClick={handleAddToCart} className="items-center justify-center flex w-auto min-w-[148px] h-[44px] rounded-[5px] px-[20px] bg-[#23A6F0] text-white font-bold cursor-pointer hover:bg-blue-600 transition-colors">Add to Cart</button>
              <button onClick={handleAddToWishlistAndNavigate} className={`bg-white hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out rounded-full w-12 h-12 sm:w-14 sm:h-14 border border-[#E8E8E8] flex items-center justify-center cursor-pointer ${isLiked ? "text-red-500" : "text-gray-800"}`}>
                <FaRegHeart className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 hover:scale-110 ${isLiked ? "fill-current" : ""}`} />
              </button>
              <button onClick={handleAddToCartAndNavigate} className="bg-white hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out rounded-full w-12 h-12 sm:w-14 sm:h-14 border border-[#E8E8E8] flex items-center justify-center cursor-pointer text-gray-800">
                <BsCart className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 hover:scale-110" />
              </button>
              <button onClick={handleViewProduct} className="bg-white hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out rounded-full w-12 h-12 sm:w-14 sm:h-14 border border-[#E8E8E8] flex items-center justify-center cursor-pointer text-gray-800">
                <IoEye className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 hover:scale-110" />
              </button>
            </div>
          </div>
          <div className="px-4 flex justify-center sm:px-6 my-8 sm:my-16 lg:px-8">
            <div className="w-full max-w-3xl mb-8">
              <ul className="flex flex-col sm:flex-row justify-center items-center text-gray-500 text-sm font-medium space-y-4 sm:space-y-0 sm:space-x-8">
                <li onClick={() => setActiveTab("description")} className={`cursor-pointer text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] transition-colors ${activeTab === "description" ? "text-[#23A6F0] border-b-2 border-[#23A6F0]" : "text-[#737373] hover:text-blue-500"}`}>Description</li>
                <li onClick={() => setActiveTab("additional")} className={`cursor-pointer text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] transition-colors ${activeTab === "additional" ? "text-[#23A6F0] border-b-2 border-[#23A6F0]" : "text-[#737373] hover:text-blue-500"}`}>Additional Information</li>
                <li onClick={() => setActiveTab("reviews")} className={`cursor-pointer text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] transition-colors flex justify-center items-center ${activeTab === "reviews" ? "text-[#23A6F0] border-b-2 border-[#23A6F0]" : "text-[#737373] hover:text-blue-500"}`}>Reviews <span className="text-[#23856D] font-bold text-[14px] ml-1">(0)</span></li>
              </ul>
            </div>
          </div> 
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "description" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 bg-[#F5F5F5] flex justify-center items-center min-h-[350px] rounded-lg">
                <div className="relative w-full h-full max-w-[400px] min-h-[312px]">
                  <Image src={currentVariant.image} alt="Product Detail" fill sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg object-contain p-2" />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 w-full h-auto rounded-[9px] pb-[25px] px-6 lg:px-0 text-center lg:text-left">
                <h2 className="w-full font-montserrat font-bold text-xl sm:text-[24px] leading-tight sm:leading-[32px] tracking-[0.1px] text-[#252B42] mb-6 sm:mb-12 uppercase">{currentVariant.name} Details</h2>
                <p className="text-sm text-[#737373] mb-6 sm:mb-12 italic border-l-4 border-[#23A6F0] pl-4">{currentVariant.description}</p>
                <p className="text-sm text-[#737373] mb-6 sm:mb-12">Our {currentVariant.category.toLowerCase()} collection is designed for those who value both form and function. Every piece is crafted with premium materials to ensure long-lasting durability and comfort in your living space.</p>
              </div>
              <div className="col-span-1 lg:col-span-1 w-full px-6 lg:px-0 text-center lg:text-left">
                <h2 className="w-full font-montserrat font-bold text-xl sm:text-[24px] leading-tight sm:leading-[32px] tracking-[0.1px] text-[#252B42] mb-5">Key Features</h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start justify-center lg:justify-start">
                      <span className="text-blue-500 mr-2">›</span>
                      <span className="text-left font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold text-[#252B42] mb-6">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2"><span className="font-bold">Category</span><span>{currentVariant.category}</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="font-bold">Stock Status</span><span>In Stock</span></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2"><span className="font-bold">Department</span><span>English Department</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="font-bold">Shipping</span><span>Standard (3-5 days)</span></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="bg-white p-12 rounded-lg shadow-sm border text-center relative">
              <div className="text-yellow-400 text-3xl mb-4">★★★★★</div>
              <h3 className="text-xl font-bold text-[#252B42] mb-2">No Reviews Yet</h3>
              <p className="text-gray-500 mb-6">Be the first to review "{currentVariant.name}"</p>
              <button onClick={() => setIsReviewModalOpen(true)} className="bg-[#23A6F0] text-white px-8 py-2 rounded-md font-bold hover:bg-blue-600 transition-colors">Write a Review</button>
              {isReviewModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-[#252B42]">Write a Review</h2>
                    <form onSubmit={handleReviewSubmit} className="space-y-4 text-left">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                        <input type="text" value={reviewName} onChange={(e) => setReviewName(e.target.value)} className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => setRating(star)} className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>★</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Your Review</label>
                        <textarea value={reviewComment} onChange={(e) => setReviewComment(e.target.value)} className="w-full border rounded-md p-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Share your thoughts about this product"></textarea>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button type="button" onClick={() => setIsReviewModalOpen(false)} className="flex-1 border py-2 rounded-md font-bold hover:bg-gray-50">Cancel</button>
                        <button type="submit" className="flex-1 bg-[#23A6F0] text-white py-2 rounded-md font-bold hover:bg-blue-600">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white my-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bestseller Products</h2>
          <hr className="w-full h-[2px] bg-gray-200 mb-6 border-0"></hr>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {combinedProducts.slice(0, 14).map((product) => {
              const discountedPrice = product.discountPercentage ? (product.price - (product.price * product.discountPercentage) / 100).toFixed(2) : null;
              
              // Define local state for each bestseller's selected color
              // Since this is inside a map, we'll use a wrapper component or handle it with an object state if needed.
              // For simplicity in this surgical edit, I'll use the first available color or default colors.
              const itemColors = product.colors && product.colors.length > 0 
                ? product.colors 
                : ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

              return (
                <BestsellerCard 
                  key={product._id} 
                  product={product} 
                  discountedPrice={discountedPrice} 
                  itemColors={itemColors}
                  addItem={addItem}
                />
              );
            })}
          </div>
          <div className="py-6 bg-white w-full mx-auto px-4 sm:px-0 mt-2 sm:mt-8">
            <div className='flex justify-center items-center'>
              <Image src={"/companies.png"} alt='companies' width={1054} height={175} className="w-full max-w-[1054px] h-auto object-contain" />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOne;
