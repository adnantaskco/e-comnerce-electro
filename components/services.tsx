"use client";

import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { TbTruckReturn } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";

const services = [
  {
    icon: <MdOutlineLocalShipping />,
    title: "Free Shipping",
    description: "Form  ৳ 1000",
  },
  {
    icon: <TbTruckReturn />,
    title: "30 Days",
    description: "For free return",
  },
  {
    icon: <GiWallet />,
    title: " Payment",
    description: "Secure Payment system",
  },
  {
    icon: <FaHeadphonesSimple />,
    title: "24/7 Support",
    description: "Contact us anytime",
  },
  {
    icon: <IoPricetagsOutline />,
    title: "Only Best",
    description: "Brands",
  },
];

function Services() {
  return (
    <section className=" py-2 bg-ring/5 ">
      <div className="container mx-auto px-4 lg:px-16  ">
        
        <div className="flex gap-6 overflow-x-auto lg:overflow-visible no-scrollbar">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                flex items-center gap-4
                min-w-[260px] sm:min-w-0 sm:flex-1
                md:px-5 md:py-4
               
                backdrop-blur-xl
                transition-all duration-300
                border-r-2
                
              "
            >
              {/* Icon bubble */}
              <div
                className="
                  flex items-center justify-center
                  w-12 h-12
                  rounded-full
                  bg-ring/10
                  text-text-primary
                  text-2xl
                  group-hover:scale-110
                  transition
                "
              >
                {service.icon}
              </div>

              {/* Text */}
              <div className="leading-tight">
                <h6 className="text-text-primary font-semibold  group-hover:text-primary transition">
                  {service.title}
                </h6>

                <p className="hidden  sm:block text-sm text-ring">
                  {service.description}
                </p>
              </div>

              {/* glow line effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-primary/10 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;