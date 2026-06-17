"use client";

import Link from "next/link";

import {
  Laptop,
  Camera,
  Smartphone,
  Gamepad2,
  Tv,
  Headphones,
  MonitorSmartphone,
  Watch,
  Tag,
  ChevronDown,
} from "lucide-react";
import CameraPoster from "./ui/camera";

export default function CategoryBar() {
  return (
    <section className="relative hidden md:block z-50 border-y bg-white">
      <div className="container mx-auto px-4 md:px-16">
        
        <div className="flex gap-8 py-4 ">

          {/* Laptops */}
          <Link href="#" className="flex items-center gap-2 whitespace-nowrap hover:text-primary">
            <Laptop size={18} />
            Laptops & Computers
          </Link>

          {/* Cameras (Dropdown) */}
          <div className="relative group flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-primary">
              <Camera size={18} />
              Cameras
              <ChevronDown size={16} />
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-3 w-52 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              
              {/* <CameraPoster></CameraPoster> */}
              
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                DSLR
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Mirrorless
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Action Camera
              </Link>
            </div>
          </div>

          {/* Smartphones (Dropdown) */}
          <div className="relative group flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-primary">
              <Smartphone size={18} />
              Smartphones & Tablets
              <ChevronDown size={16} />
            </div>

            <div className="absolute left-0 top-full mt-3 w-52 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Android Phones
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                iPhones
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Tablets
              </Link>
            </div>
          </div>

          {/* Gaming */}
          <Link href="#" className="flex items-center gap-2 whitespace-nowrap hover:text-primary">
            <Gamepad2 size={18} />
            Gaming
          </Link>

          {/* TV */}
          <Link href="#" className="flex items-center gap-2 whitespace-nowrap hover:text-primary">
            <Tv size={18} />
            TV & Audio
          </Link>

          {/* Headphones */}
          <Link href="#" className="flex items-center gap-2 whitespace-nowrap hover:text-primary">
            <Headphones size={18} />
            Headphones
          </Link>

          {/* VR */}
          <Link href="#" className="flex items-center gap-2 whitespace-nowrap hover:text-primary">
            <MonitorSmartphone size={18} />
            Virtual Reality
          </Link>

          {/* Gadgets */}
          <Link href="#" className="flex items-center gap-2 whitespace-nowrap hover:text-primary">
            <Watch size={18} />
            Gadgets
          </Link>

          {/* Deals */}
          <div className="relative group flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer text-red-400 hover:text-primary">
             
              Super Deal
              <ChevronDown size={16} />
            </div>

            <div className="absolute left-0 top-full mt-3 w-52 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                New Feature of the week
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                On Sale Products of the Years
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Top Rated Products
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}