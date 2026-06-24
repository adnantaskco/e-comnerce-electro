"use client";

import React, { useMemo } from "react";
import { DataElectricScooter } from "@/lib/Data/Electricscooter";
import Autoplay from "embla-carousel-autoplay";

import { useCart } from "../../app/context/CartContext";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  FaAnglesRight,
  FaCartArrowDown,
  FaHeart,
} from "react-icons/fa6";
import Link from "next/link";

function EScooter() {
  const { addToCart } = useCart();

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    []
  );

  return (
    <section className="md:my-10 rounded-3xl p-4 bg-background ">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 text-text-primary  mb-6">
        <h2 className="text-xl font-semibold border-b-4 border-primary pb-3 ">Electric Mobility</h2>

        <button className="flex items-center text-ring gap-2 text-sm hover:text-primary">
          View All Product <FaAnglesRight />
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[autoplay]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {DataElectricScooter.map((item) => (
           

            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/3"
            >
              <div className="group relative rounded-xl overflow-hidden hover:border-2 bg-background hover:shadow-xl transition-all duration-300">

                {/* Wishlist */}
                <button className="absolute top-3 right-3 z-10 flex items-center gap-2 bg-background px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <FaHeart className="text-destructive " />
                  <span className="text-sm font-medium">Wishlist</span>
                </button>
                <Link href={`/products/${item.id}`}>
                {/* Name */}
                <div className="p-4">
                  <p className="text-sm text-ring">
                    {item.brand || "Electric Scooter"}
                  </p>

                  <h3 className="text-lg font-semibold mt-1 whitespace-nowrap">
                    {item.name}
                  </h3>
                </div>

                {/* Image */}
                <div className="h-52 bg-ring/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                  </Link>
                {/* Price + Cart */}
                <div className="p-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm text-ring line-through">
                      ৳{item.retail_price}
                    </span>

                    <span className="text-lg font-bold text-destructive ">
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
                    className="p-3 rounded-full bg-text-primary text-secondary hover:bg-primary active:scale-95 transition"
                  >
                    <FaCartArrowDown size={18} />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background shadow-md" />
       <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background shadow-md" />
      </Carousel>
    </section>
  );
}

export default EScooter;