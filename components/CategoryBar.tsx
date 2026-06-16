"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const categories = [
  { name: "Laptops & Computers", icon: <Laptop size={18} /> },
  { name: "Cameras", icon: <Camera size={18} /> },
  { name: "Smartphones & Tablets", icon: <Smartphone size={18} /> },
  { name: "Gaming", icon: <Gamepad2 size={18} /> },
  { name: "TV & Audio", icon: <Tv size={18} /> },
  { name: "Headphones", icon: <Headphones size={18} /> },
  { name: "Virtual Reality", icon: <MonitorSmartphone size={18} /> },
  { name: "Gadgets", icon: <Watch size={18} /> },
  { name: "Super Deals", icon: <Tag size={18} /> },
];

export default function CategoryBar() {
  const duplicatedCategories = [...categories, ...categories];

  return (
    <>
    <section>
      <div className="container mx-auto px-4 md:px-16 ">
        <div className=" overflow-hidden border-y">
      <motion.div
        className="flex gap-10 py-4 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {duplicatedCategories.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center gap-2 whitespace-nowrap text-black hover:text-primary"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </motion.div>
    </div>
      </div>
    </section>
    </>
  );
}