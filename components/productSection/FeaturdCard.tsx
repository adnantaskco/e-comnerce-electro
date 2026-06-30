"use client";
import useEmblaCarousel from "embla-carousel-react";

import { DataFeatured } from "@/lib/Data/featured";
import { useCart } from "../../app/context/CartContext";
import {
  FaAnglesRight,
  FaCartArrowDown,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import Link from "next/link";

export default function FeaturedCard() {
   const { addToCart } = useCart();
      const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        dragFree: true,
      });
    
      const scrollPrev = () => emblaApi?.scrollPrev();
      const scrollNext = () => emblaApi?.scrollNext();
    
  

  return (
    <>
        <section className="">
            {/* <div className="flex items-center justify-between border-b-2  mb-6">
        <h2 className="text-lg md:text-xl font-bold border-b-2 text-text-primary border-primary pb-3">
          New Featured Products
        </h2>

        <button className="flex items-center gap-2 text-sm text-ring font-medium hover:text-primary">
          View All Product
          <FaAnglesRight />
        </button>
      </div> */}
    
          {/* Slider */}
          <div className="relative">
            {/* Left */}
            <button
              onClick={scrollPrev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-background shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
    
            {/* Right */}
            <button
              onClick={scrollNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-background shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
    
            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-2">
                
                {DataFeatured.map((item) => (
                 
                  <div
                    key={item.id}
                    className="
                      flex-[0_0_50%]
                  md:flex-[0_0_33.33%]
                  lg:flex-[0_0_20%]
                  min-w-0
                    "
                  >
                    <div className="group relative rounded-xl overflow-hidden bg-background hover:border-2 hover:shadow-xl transition-all duration-300">
                      
                   <button className="absolute top-3 right-3 z-10 flex items-center gap-2  bg-background px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <FaHeart className="text-destructive" />
                      <span className="text-sm font-medium cursor-pointer text-text-primary">Wishlist</span>
                    </button>
                       <Link key={item.id} href={`/products/${item.id}`}>
                      {/* Product Info */}
                      <div className="p-4">
                        <p className="text-sm text-ring">
                          {item.brand}
                        </p>
    
                        <h3 className="text-sm md:text-base  text-text-primary font-semibold truncate">
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
                          <p className="text-xs text-ring line-through">
                            ৳{item.retail_price}
                          </p>
    
                          <p className="font-bold text-destructive ">
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
                      
                      className="p-3 rounded-full bg-foreground cursor-pointer text-text-secondary hover:bg-primary active:scale-95 transition">
                        <FaCartArrowDown size={18} />
                      </button>
                      </div>
                    </div>
                  </div>
                 
                ))}
              </div>
            </div>
    
            {/* Bottom Scroll Hint */}
            <div className="flex justify-center mt-5 text-sm text-ring">
              ← Drag with mouse →
            </div>
          </div>
        </section>
    
    </>
  );
}