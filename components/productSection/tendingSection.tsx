"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DataTrandingProduct } from "@/lib/Data/trendingproduct";
import { useCart } from "../../app/context/CartContext";
import {
  FaAnglesRight,
  FaCartArrowDown,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import Link from "next/link";

export default function TendingSections() {

   const { addToCart } = useCart();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className=" bg-ring/5  py-5">
      <div className="container mx-auto  rounded-4xl  px-4 md:px-16">
          <div className="bg-background p-2 sm:p-4 rounded-3xl md:p-10">
            {/* Header */}
      <div className="flex items-center justify-between border-b-2 py-5 bg-background mb-3">
        <h2 className="text-lg md:text-xl font-bold  text-text-primary border-primary ">
          Trending Products This Week
        </h2>

        <button className="flex items-center text-ring gap-2 text-sm font-medium hover:text-primary">
          View All Product
          <FaAnglesRight />
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left */}
        <button
          onClick={scrollPrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-background shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>

        {/* Right */}
        <button
          onClick={scrollNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-background shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
        >
          <FaChevronRight />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2">
            {DataTrandingProduct.map((item) => (
              
              <div
                key={item.id}
                className="
                  flex-[0_0_50%]
                  md:flex-[0_0_33.33%]
                  lg:flex-[0_0_20%]
                  min-w-0
                "
              >
                <div className="group relative hover:border-2 rounded-xl overflow-hidden bg-background  hover:shadow-xl transition-all duration-300">
                  
               <button className="absolute top-3 right-3 z-10 flex items-center gap-2  bg-background px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <FaHeart className="text-destructive" />
                  <span className="text-sm text-text-primary font-medium cursor-pointer">Wishlist</span>
                </button>
                  <Link key={item.id} href={`/products/${item.id}`}>
                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-sm text-ring">
                      {item.brand}
                    </p>

                    <h3 className="text-sm text-text-primary md:text-base font-semibold truncate">
                      {item.name}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="h-52  flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                  </Link>
                  {/* Price */}
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-text-secondary line-through">
                        ৳{item.retail_price}
                      </p>

                      <p className="font-bold text-destructive">
                        ৳{item.sale_price}
                      </p>
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
                  
                  className="p-3 rounded-full bg-black cursor-pointer text-white hover:bg-primary active:scale-95 transition">
                    <FaCartArrowDown size={18} />
                  </button>
                  </div>
                </div>
              </div>
             
            ))}
          </div>
        </div>

        {/* Bottom Scroll Hint */}
        <div className="flex justify-center mt-5 text-sm text-gray-500">
          ← Drag with mouse →
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}