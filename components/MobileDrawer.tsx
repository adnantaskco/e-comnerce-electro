"use client";

import Link from "next/link";
import {
  FiX,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMapPin,
  FiChevronRight,
} from "react-icons/fi";


import {
  
  Laptop,
  Smartphone,
  Headphones,
  Camera,
  Tv,
  Watch,
  Gamepad2,
} from "lucide-react";


interface Props {
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}

const categories = [
  { name: "Laptop", icon: Laptop },
  { name: "Smartphones", icon: Smartphone },
  { name: "Headphones", icon: Headphones },
  { name: "Cameras", icon: Camera },
  { name: "TV & Audio", icon: Tv },
  { name: "Smart Watches", icon: Watch },
  { name: "Gaming", icon: Gamepad2 },
];

export default function MobileDrawer({
  mobileMenu,
  setMobileMenu,
}: Props) {
  if (!mobileMenu) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setMobileMenu(false)}
      />

      <div className="fixed left-0 top-0 h-screen w-80 bg-white z-50 shadow-xl overflow-y-auto">
        
        {/* Header */}
        <div className="bg-primary text-white p-5">
          <div className="flex justify-between items-center">
            <img src="https://taskco.io/assets/taskco.svg" alt="" />

            <button onClick={() => setMobileMenu(false)}>
              <FiX size={24} />
            </button>
          </div>

          {/* Profile */}
          <Link
            href="/loginpage"
            className="flex items-center gap-3 mt-6"
          >
            <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">
              <FiUser size={22} /> 
            </div>

            <div>
              <h3 className="font-semibold">
                Sign In
              </h3>
              <p className="text-sm opacity-90">
                My Account & Orders
              </p>
            </div>
          </Link>
        </div>

        {/* Quick Menu */}
        <div className="p-4 border-b">
          <div className="grid grid-cols-3 gap-4 text-center">

            <Link href="/cart">
              <FiShoppingBag
                size={22}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Cart</span>
            </Link>

            <Link href="/wishlist">
              <FiHeart
                size={22}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Wishlist</span>
            </Link>

            <Link href="/stores">
              <FiMapPin
                size={22}
                className="mx-auto mb-2"
              />
              <span className="text-sm">Stores</span>
            </Link>

          </div>
        </div>

        {/* Categories */}
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-4">
            Categories
          </h3>

          <div className="space-y-1">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href="#"
                  className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </div>

                  <FiChevronRight />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Extra Links */}
        <div className="border-t p-4">
          <h3 className="font-bold mb-3">
            More
          </h3>

          <div className="space-y-3">
            <Link
              href="/offers"
              className="block"
            >
               Today's Deals
            </Link>

            <Link
              href="/new-arrivals"
              className="block"
            >
               New Arrivals
            </Link>

            <Link
              href="/track-order"
              className="block"
            >
               Track Order
            </Link>

            <Link
              href="/support"
              className="block"
            >
              🎧 Customer Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}