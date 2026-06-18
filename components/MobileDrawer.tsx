"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiX,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMapPin,
  FiChevronRight,
  FiChevronDown,
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
  {
    name: "Laptop",
    icon: Laptop,
    brands: ["Dell", "HP"],
  },
  {
    name: "Smartphones",
    icon: Smartphone,
    brands: ["Apple", "Samsung"],
  },
  {
    name: "Headphones",
    icon: Headphones,
    brands: ["Sony", "JBL"],
  },
  {
    name: "Cameras",
    icon: Camera,
    brands: ["Canon", "Nikon"],
  },
  {
    name: "TV & Audio",
    icon: Tv,
    brands: ["Sony", "LG"],
  },
  {
    name: "Smart Watches",
    icon: Watch,
    brands: ["Xiaomi", "Apple"],
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    brands: ["Asus", "MSI"],
  },
];

export default function MobileDrawer({
  mobileMenu,
  setMobileMenu,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!mobileMenu) return null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setMobileMenu(false)}
      />

      {/* Drawer */}
      <div className="fixed left-0 top-0 h-screen w-80 bg-white z-50 shadow-xl overflow-y-auto">

        {/* Header */}
        <div className="bg-primary text-white p-5">
          <div className="flex justify-between items-center">
            <img src="https://taskco.io/assets/taskco.svg" alt="" />
            <button onClick={() => setMobileMenu(false)}>
              <FiX size={24} />
            </button>
          </div>

          <Link href="/loginpage" className="flex items-center gap-3 mt-6">
            <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">
              <FiUser size={22} />
            </div>

            <div>
              <h3 className="font-semibold">Sign In</h3>
              <p className="text-sm opacity-90">My Account & Orders</p>
            </div>
          </Link>
        </div>

        {/* Quick Menu */}
        <div className="p-4 border-b">
          <div className="grid grid-cols-3 gap-4 text-center">

            <Link href="/cart">
              <FiShoppingBag className="mx-auto mb-2" size={22} />
              <span className="text-sm">Cart</span>
            </Link>

            <Link href="/wishlist">
              <FiHeart className="mx-auto mb-2" size={22} />
              <span className="text-sm">Wishlist</span>
            </Link>

            <Link href="/stores">
              <FiMapPin className="mx-auto mb-2" size={22} />
              <span className="text-sm">Stores</span>
            </Link>

          </div>
        </div>

        {/* Categories Dropdown */}
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-4">
            Categories
          </h3>

          <div className="space-y-2">
            {categories.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;

              return (
                <div key={item.name} className="border rounded-lg">

                  {/* Button */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-3 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />
                      <span>{item.name}</span>
                    </div>

                    {isOpen ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronRight />
                    )}
                  </button>

                  {/* Dropdown */}
                  {isOpen && (
                    <div className="px-5 pb-3 space-y-2">
                      {item.brands.map((brand) => (
                        <Link
                          key={brand}
                          href={`/products?brand=${brand}`}
                          className="block text-sm text-gray-600 hover:text-black"
                        >
                          • {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Extra Links */}
        <div className="border-t p-4">
          <h3 className="font-bold mb-3">More</h3>

          <div className="space-y-3 text-sm">
            <Link href="/offers">Today's Deals</Link>
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/track-order">Track Order</Link>
            <Link href="/support">🎧 Customer Support</Link>
          </div>
        </div>
      </div>
    </>
  );
}