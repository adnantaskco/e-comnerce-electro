
"use client";
import React from "react";
import { useCart } from "../context/CartContext";



import {
  FaAnglesRight,
  FaCartArrowDown,
  FaHeart,
} from "react-icons/fa6";
import Link from "next/link";


import { AllProducts } from '@/lib/products'

function GadgetProducts() {
     const { addToCart } = useCart();
  return (
<section className="py-10">
  <div className="container mx-auto px-2 sm:px-4">

    {/* Products Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {AllProducts.map((item) => (
        <Link key={item.id} href={`/products/${item.id}`}>
          <div className="group relative rounded-xl overflow-hidden bg-white border hover:shadow-xl transition-all duration-300">

            {/* Wishlist */}
            <button
              onClick={(e) => e.preventDefault()}
              className="absolute top-2 right-2 z-10 hidden md:flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
            >
              <FaHeart className="text-red-500" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>

            {/* Product Info */}
                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {item.brand || "ElectricScooter"}
                  </p>

                  <h3 className="text-lg font-semibold mt-1 whitespace-nowrap">
                    {item.name}
                  </h3>
                </div>

            {/* Product Image */}
            <div className="h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

            {/* Price + Cart */}
            <div className="p-2 md:p-4 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-sm text-gray-400 line-through">
                  ৳{item.retail_price}
                </span>

                <span className="text-sm md:text-lg font-bold text-red-600">
                  ৳{item.sale_price}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();

                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: Number(item.sale_price),
                    image: item.image,
                  });
                }}
                className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-primary active:scale-95 transition"
              >
               <FaCartArrowDown className="text-sm md:text-lg" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
  )
}

export default GadgetProducts