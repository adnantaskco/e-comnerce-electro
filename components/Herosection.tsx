"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const products = [
  {
    title: "Smart Watch Pro",
    subtitle: "Next gen fitness tracking",
    price: 199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    title: "Wireless Headphone",
    subtitle: "Deep bass sound experience",
    price: 129,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    title: "Gaming Laptop",
    subtitle: "High performance beast",
    price: 1299,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    title: "Smart Phone",
    subtitle: "AI powered camera system",
    price: 899,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "VR Headset",
    subtitle: "Immersive virtual reality",
    price: 499,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac",
  },
]

export function HeroCarousel() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 2500, stopOnInteraction: true }),
    []
  )

  return (
    <section className="w-full flex justify-center items-center py-5 bg-gray-100">
      <Carousel
        plugins={[plugin]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        // onMouseEnter={() => plugin.stop?.()}
        // onMouseLeave={() => plugin.reset?.()}
      >
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%]"
            >
              <Card className="relative h-[380px] overflow-hidden rounded-2xl shadow-xl group">
                
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <CardContent className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                  <h2 className="text-2xl font-bold">{product.title}</h2>
                  <p className="text-sm text-gray-200">{product.subtitle}</p>

                  <div className="mt-2 text-lg font-semibold">
                    Up to ${product.price}
                  </div>

                  <button className="mt-4 bg-white text-black px-4 py-2 w-28 rounded-lg font-medium hover:bg-primary transition">
                    Start Buying
                  </button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}