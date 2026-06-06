"use client";

import React, { useState } from "react";
import { Product } from "../../../../types";
import ProductCard from "@/app/components/ProductCard";

interface CardsProps {
  products: Product[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  const staticProducts: Product[] = [
    {
      _id: "shop-1",
      slug: "graphic-design-1",
      imageUrl: "/card1.png",
      name: "BROWN Shirt",
      department: "Men's Fashion",
      price: 3500,
      discountPercentage: 0,
      stock: 50,
      description: "A premium quality brown shirt perfect for casual and semi-formal wear. Made with breathable fabric to ensure comfort all day long.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-2",
      slug: "web-design-2",
      imageUrl: "/card2.png",
      name: "Classic White T-Shirt",
      department: "Men's Fashion",
      price: 2000,
      discountPercentage: 10,
      stock: 30,
      description: "Essential white t-shirt for your everyday wardrobe. Features a comfortable fit and durable cotton material.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-3",
      slug: "logo-design-3",
      imageUrl: "/card3.png",
      name: "Vintage Denim Jacket",
      department: "Outerwear",
      price: 5500,
      discountPercentage: 15,
      stock: 20,
      description: "Classic vintage style denim jacket. A timeless piece that adds an edge to any casual outfit.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-4",
      slug: "ui-ux-design-4",
      imageUrl: "/card4.png",
      name: "Black Formal Suit",
      department: "Men's Formal",
      price: 12000,
      discountPercentage: 0,
      stock: 10,
      description: "Elegant black formal suit for special occasions. Tailored for a sharp, modern silhouette.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-5",
      slug: "branding-design-5",
      imageUrl: "/card5.png",
      name: "Casual Striped Sweater",
      department: "Winter Wear",
      price: 2800,
      discountPercentage: 5,
      stock: 45,
      description: "Comfortable striped sweater perfect for chilly evenings. Soft knit material for maximum coziness.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-6",
      slug: "app-design-6",
      imageUrl: "/card6.png",
      name: "Summer Floral Dress",
      department: "Women's Fashion",
      price: 4200,
      discountPercentage: 20,
      stock: 15,
      description: "Light and breezy floral dress, ideal for summer outings and beach days. Stand out with vibrant colors.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-7",
      slug: "product-strategy-7",
      imageUrl: "/card7.png",
      name: "Leather Crossbody Bag",
      department: "Accessories",
      price: 3800,
      discountPercentage: 0,
      stock: 25,
      description: "Stylish and practical leather crossbody bag with multiple compartments for all your daily essentials.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      _id: "shop-8",
      slug: "marketing-strategy-8",
      imageUrl: "/card8.png",
      name: "Sports Running Shoes",
      department: "Footwear",
      price: 6500,
      discountPercentage: 10,
      stock: 60,
      description: "High-performance running shoes with breathable mesh and responsive cushioning for your daily workouts.",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  const allProducts = [...staticProducts, ...products];

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  // Calculate normal total pages based on items
  const actualTotalPages = Math.ceil(allProducts.length / itemsPerPage);
  
  // Force at least 3 pages to show up as per user request
  const displayTotalPages = Math.max(actualTotalPages, 3);

  // Logic to show images based on page
  let currentProducts: Product[] = [];
  
  if (currentPage === 3) {
    // Show all products on page 3 ("full images")
    currentProducts = allProducts;
  } else {
    // Normal pagination for other pages
    const startIndex = (currentPage - 1) * itemsPerPage;
    currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);
  }

  const handleNext = () => {
    if (currentPage < displayTotalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers to display (at least 1, 2, 3)
  const pageNumbers = [];
  for (let i = 1; i <= displayTotalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-center text-center mt-5 mb-7 overflow-x-hidden">
      {/* Product Cart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {currentProducts.map((product, index) => (
          <ProductCard key={product._id || index} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      {displayTotalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-0 mt-16 sm:border-[#BDBDBD] sm:border-2 rounded-md mx-4">
          <button 
            onClick={handleFirst}
            disabled={currentPage === 1}
            className={`px-4 py-3 sm:px-8 sm:py-6 rounded-md sm:rounded-none sm:rounded-l-md text-sm font-bold w-full sm:w-auto transition-colors ${
              currentPage === 1 
                ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed" 
                : "bg-white text-[#23A6F0] hover:bg-gray-100"
            }`}
          >
            First
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1 sm:space-x-0">
            {pageNumbers.map((number, index) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={`px-4 py-3 sm:px-8 sm:py-6 font-bold text-sm transition-colors rounded-md sm:rounded-none shadow-sm sm:shadow-none sm:border-r border-[#BDBDBD] ${
                  currentPage === number
                    ? "bg-[#23A6F0] text-white"
                    : "bg-white text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                } ${index === pageNumbers.length - 1 ? "sm:border-r-0" : ""}`}
              >
                {number}
              </button>
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentPage === displayTotalPages}
            className={`px-4 py-3 sm:px-8 sm:py-6 sm:border-l border-[#BDBDBD] rounded-md sm:rounded-none sm:rounded-r-md text-sm font-bold w-full sm:w-auto shadow-sm sm:shadow-none transition-colors ${
              currentPage === displayTotalPages
                ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
                : "bg-white text-[#23A6F0] hover:bg-[#1D8CC8] hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;