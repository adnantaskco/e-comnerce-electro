"use client";

import Link from "next/link";
import {
  Laptop,
  Headphones,
  MonitorSmartphone,
  Watch,
  ChevronDown,
} from "lucide-react";

import { FaCameraRetro } from "react-icons/fa";
import { LuTabletSmartphone } from "react-icons/lu";
import { PiGameControllerBold } from "react-icons/pi";
import { MdOutlineSmartDisplay } from "react-icons/md";

const categories = [
  {
    title: "Laptops & Computers",
    shortTitle: "Laptops",
    brand: "Laptop",
    icon: Laptop,
  },
  {
    title: "Cameras",
    brand: "Camera",
    icon: FaCameraRetro,
    dropdown: [
      { title: "DSLR", brand: "DSLR" },
      { title: "Mirrorless", brand: "Mirrorless" },
      { title: "Action Camera", brand: "Action Camera" },
    ],
  },
  {
    title: "Smartphones & Tablets",
    shortTitle: "Smartphones",
    brand: "Smartphone",
    icon: LuTabletSmartphone,
    dropdown: [
      { title: "Android Phones", brand: "Android" },
      { title: "iPhones", brand: "Apple" },
      { title: "Tablets", brand: "Tablet" },
    ],
  },
  {
    title: "Gaming",
    brand: "Gaming",
    icon: PiGameControllerBold,
  },
  {
    title: "TV & Audio",
    brand: "TV",
    icon: MdOutlineSmartDisplay,
  },
  {
    title: "Headphones",
    brand: "Headphones",
    icon: Headphones,
  },
  {
    title: "Virtual Reality",
    shortTitle: "VR",
    brand: "VR",
    icon: MonitorSmartphone,
  },
  {
    title: "Gadgets",
    brand: "Gadgets",
    icon: Watch,
  },
  {
    title: "Super Deal",
    brand: "Super Deal",
    special: true,
    dropdown: [
      {
        title: "New Feature of the Week",
        brand: "New Feature",
      },
      {
        title: "On Sale Products of the Year",
        brand: "On Sale",
      },
      {
        title: "Top Rated Products",
        brand: "Top Rated",
      },
    ],
  },
];

export default function CategoryBar() {
  return (
    <section className="relative z-40 bg-background w-full text-ring">
      <div className="container mx-auto px-4 md:px-16">
        <div className="flex items-center gap-4 lg:gap-8 py-4 overflow-x-auto xl:overflow-visible no-scrollbar">

          {categories.map((item) => {
            const Icon = item.icon;

            if (item.dropdown) {
              return (
                <div
                  key={item.title}
                  className="relative group flex-shrink-0"
                >
                  <div
                    className={`flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                      item.special
                        ? "text-destructive hover:text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {Icon && <Icon size={18} />}

                    <span className="hidden lg:inline">
                      {item.title}
                    </span>

                    {item.shortTitle && (
                      <span className="lg:hidden">
                        {item.shortTitle}
                      </span>
                    )}

                    {!item.shortTitle && (
                      <span className="lg:hidden">
                        {item.title}
                      </span>
                    )}

                    <ChevronDown size={16} />
                  </div>

                  <div
                    className={`absolute top-full mt-3 w-56 bg-background border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                      item.special ? "right-0" : "left-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.title}
                        href={`/products?brand=${encodeURIComponent(
                          sub.brand
                        )}`}
                        className="block px-4 py-3 hover:bg-ring/5"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={`/products?brand=${encodeURIComponent(
                  item.brand
                )}`}
                className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 hover:text-primary transition-colors"
              >
                {Icon && <Icon size={18} />}

                {item.shortTitle ? (
                  <>
                    <span className="hidden lg:inline">
                      {item.title}
                    </span>
                    <span className="lg:hidden">
                      {item.shortTitle}
                    </span>
                  </>
                ) : (
                  <span>{item.title}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}