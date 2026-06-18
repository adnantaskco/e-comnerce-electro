"use client";

import React from "react";
import { DataAirPhones } from "@/lib/Data/AirPhone";
import Autoplay from "embla-carousel-autoplay";
import { useCart } from "../../app/context/CartContext";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaAnglesRight, FaCartArrowDown, FaHeart, FaUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

function EarPhoneCard() {
 const { addToCart } = useCart();

  // ✅ FIX: no useRef needed
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section className="py-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2  mb-6">
        <h2 className="text-xl font-bold border-b-2 border-primary pb-3">Earphones</h2>

        <button className="flex items-center gap-2  text-sm hover:text-blue-600">
          
      View All Product <FaAnglesRight/>
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[autoplay]}  
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {DataAirPhones.map((item) => (
             <Link key={item.id} href={`/products/${item.id}`}>
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/3"
            >
              <div className="group relative  rounded-xl overflow-hidden bg-white  hover:shadow-xl transition-all duration-300">

                {/* Wishlist */}
                <button className="absolute top-3 right-3 z-10 flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <FaHeart className="text-red-500" />
                  <span className="text-sm font-medium cursor-pointer">Wishlist</span>
                </button>

                {/* Name */}
                <div className="p-4">
                  <p className="text-sm text-gray-500">
                    {item.brand || "ElectricScooter"}
                  </p>

                  <h3 className="text-lg font-semibold mt-1 whitespace-nowrap">
                    {item.name}
                  </h3>
                </div>

                {/* Image */}
                <div className="h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Price + Cart */}
                <div className="p-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                      ৳{item.retail_price}
                    </span>

                    <span className="text-lg font-bold text-red-600">
                      ৳{item.sale_price}
                    </span>
                  </div>
                  
                  <button
                   onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                         price: Number(item.sale_price),
                        image: item.image,
                      })
                    }
                  className="p-3 rounded-full bg-black text-white cursor-pointer hover:bg-primary active:scale-95 transition">
                    <FaCartArrowDown size={18} />
                  </button>
                </div>

              </div>
            </CarouselItem>
            </Link>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md" />
      </Carousel>
    </section>
  );
}

export default EarPhoneCard;