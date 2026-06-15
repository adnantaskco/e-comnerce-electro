"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiRefreshCw,
  FiMenu,
  FiSearch,
  FiX,
} from "react-icons/fi";

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
} from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {

   const { totalItems,totalPrice } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  const categories = [
    {
      name: "Laptops & Computers",
      icon: <Laptop size={18} />,
    },
    {
      name: "Cameras",
      icon: <Camera size={18} />,
    },
    {
      name: "Smartphones & Tablets",
      icon: <Smartphone size={18} />,
    },
    {
      name: "Gaming",
      icon: <Gamepad2 size={18} />,
    },
    {
      name: "TV & Audio",
      icon: <Tv size={18} />,
    },
    {
      name: "Headphones",
      icon: <Headphones size={18} />,
    },
    {
      name: "Virtual Reality",
      icon: <MonitorSmartphone size={18} />,
    },
    {
      name: "Gadgets",
      icon: <Watch size={18} />,
    },
    {
      name: "Super Deals",
      icon: <Tag size={18} />,
    },
  ];

  return (
    <header className="w-full bg-white ">
      {/* TOP BAR */}
      <div className="  text-xs md:text-sm">
        <div className="container border-y text-gray-600 mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between py-2">
            {/* LEFT */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FiPhone size={14} />
                <span>+060 (800) 801-858</span>
              </div>

              <div className="flex items-center gap-2">
                <FiMail size={14} />
                <span>info@taskco.com</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 md:gap-6 ml-auto">
              <Link
                href="#"
                className="hidden md:flex items-center gap-2 hover:text-primary"
              >
                <FiMapPin />
                Store Locator
              </Link>

              <Link
                href="#"
                className="hidden md:block hover:text-primary"
              >
                Track Your Order
              </Link>

              <Link
                href="#"
                className="hidden md:block hover:text-primary"
              >
                Shop
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 hover:text-primary"
              >
                <FiUser />
                <span className="hidden sm:block">
                  My Account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="container border-y  mx-auto px-4 lg:px-16 py-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(true)}
            className="md:hidden"
          >
            <FiMenu size={24} />
          </button>

          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <img src="https://taskco.io/assets/taskco.svg" alt="" />
          </Link>

          {/* DESKTOP MENU BUTTON */}
          <button className="hidden md:flex"
          onClick={() => setMobileMenu(true)}>
            <FiMenu size={24} />
          </button>

          {/* SEARCH */}
          <div className="order-3 lg:order-none w-full lg:flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-11 md:h-12 rounded-full border-2 border-primary pl-5 pr-16 md:pr-20 text-sm md:text-base outline-none"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                <FiSearch size={16} />
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 md:gap-6 ml-auto ">
            <button className="hidden md:block cursor-pointer">
              <FiRefreshCw size={22} />
            </button>

            <button className="cursor-pointer">
              <FiHeart size={22} />
            </button>

            <button  className="relative flex items-center cursor-pointer gap-2">
              <a href="/cart">
                <div className="relative">
                <FiShoppingBag size={24} />
               
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              
              </div>
              </a>

              <span className="hidden md:block font-medium">
                ৳ {totalPrice}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex items-center gap-10 overflow-x-auto whitespace-nowrap py-4 no-scrollbar">
            {categories.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="flex items-center gap-2 text-sm md:text-base text-gray-600 hover:text-primary flex-shrink-0"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenu(false)}
          />

          <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-xl">
                Menu
              </h2>

              <button
                onClick={() => setMobileMenu(false)}
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {categories.map((item) => (
                <Link
                  key={item.name}
                  href="#"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-primary"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}