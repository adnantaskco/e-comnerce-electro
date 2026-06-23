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
  ChevronDown,
} from "lucide-react";
import { FaCameraRetro } from "react-icons/fa";
import { LuTabletSmartphone } from "react-icons/lu";
import { PiGameControllerBold } from "react-icons/pi";
import { MdOutlineSmartDisplay } from "react-icons/md";

export default function CategoryBar() {
  return (
   
    <section className="relative z-40  bg-background w-full text-ring">

      <div className="container mx-auto px-4 md:px-16">
        <div className="flex items-center gap-4 lg:gap-8 py-4 overflow-x-auto xl:overflow-visible no-scrollbar">

          {/* Laptops */}
          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
          >
            <Laptop size={18} />
            <span className="hidden lg:inline">
              Laptops & Computers
            </span>
            <span className="lg:hidden">Laptops</span>
          </Link>

          {/* Cameras */}
          <div className="relative group flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-primary transition-colors">
              <FaCameraRetro size={18} />
              <span>Cameras</span>
              <ChevronDown size={16} />
            </div>

            <div className="absolute left-0 top-full mt-3 w-52 bg-background border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                DSLR
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                Mirrorless
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                Action Camera
              </Link>
            </div>
          </div>

          {/* Smartphones */}
          <div className="relative group flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-primary transition-colors">
              <LuTabletSmartphone size={18} />
              <span className="hidden lg:inline">
                Smartphones & Tablets
              </span>
              <span className="lg:hidden">
                Smartphones
              </span>
              <ChevronDown size={16} />
            </div>

            <div className="absolute left-0 top-full mt-3 w-52 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                Android Phones
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                iPhones
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Tablets
              </Link>
            </div>
          </div>

          {/* Gaming */}
          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
          >
            <PiGameControllerBold size={18} />
            Gaming
          </Link>

          {/* TV */}
          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
          >
            <MdOutlineSmartDisplay size={18} />
            TV & Audio
          </Link>

          {/* Headphones */}
          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
          >
            <Headphones size={18} />
            Headphones
          </Link>

          {/* VR */}
          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
          >
            <MonitorSmartphone size={18} />
            <span className="hidden lg:inline">
              Virtual Reality
            </span>
            <span className="lg:hidden">VR</span>
          </Link>

          {/* Gadgets */}
          <Link
            href="/gadgets"
            className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
          >
            <Watch size={18} />
            Gadgets
          </Link>

          {/* Super Deal */}
          <div className="relative group flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer text-destructive hover:text-primary transition-colors">
              <span>Super Deal</span>
              <ChevronDown size={16} />
            </div>

            {/* Changed from left-0 to right-0 so the final drop panel doesn't stretch past screen view bounds */}
            <div className="absolute right-0 top-full mt-3 w-60 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                New Feature of the Week
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                On Sale Products of the Year
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-ring/5"
              >
                Top Rated Products
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}