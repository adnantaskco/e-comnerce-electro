"use client";

import Image from "next/image";
import Link from "next/link";
import { Headset, Mail, Phone, Search } from "lucide-react";
import { SlEarphonesAlt } from "react-icons/sl";

export default function BlogSection() {
  const categories = [
    "Tablets",
    "Action Camera",
    "Game Pad",
    "Smart Watch",
    "Vacuums",
    "Digital Clock",
    "Virtual Reality",
    "Wifi Routers",
    "All in one PC",
    "Game Consoles",
    "Keyboards",
    "Earphones",
  ];

  const blogs = [
    {
      title: "New Smartphone Design Trends",
      desc: "Smartphone design is shifting toward sleeker, more intelligent hardware and highly minimalist, intuitive software.",
      image: "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-3.jpg",
    },
    {
      title: "USB-C Type is Now a Must Have",
      desc: "USB-C is no longer just a premium feature; it is the universal standard. Driven by convenience, technological versatility, and global . ",
      image: "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-2.jpg",
    },
    {
      title: "Why All-Season Headphones are Good",
      desc: "All-season headphones are designed to withstand varying weather conditions while delivering consistent audio.",
      image: "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/blog-1.jpg",
    },
  ];

  return (
    <section className="bg-ring/5" >

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div>
           <h2 className="text-center text-text-primary text-2xl sm:text-3xl font-bold mb-6">
        Looking for something else?
      </h2>
        </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-12 sm:h-14 border bg-background rounded-full pl-5 pr-14 outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-text-secondary hover:primary transition p-3 rounded-full">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base text-ring mb-12">
        {categories.map((item, i) => (
          <Link
            key={i}
            href="#"
            className="hover:text-primary border-r border-ring pr-4 transition whitespace-nowrap"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* BLOG TITLE */}
      <h3 className="text-xl sm:text-2xl text-text-primary font-bold mb-6 border-b pb-2">
        News From Our Blog
      </h3>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-background rounded-xl text-text-primary overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* IMAGE */}
            <div className="relative h-52 sm:h-60 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h4 className="font-semibold text-text-primary text-lg mb-2">
                {blog.title}
              </h4>
              <p className="text-ring text-sm mb-4">
                {blog.desc}
              </p>

              <Link
                href="#"
                className="text-sm font-semibold text-text-primary hover:text-primary hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}

      </div>
      {/* Help */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center border-t-2 pt-6 mt-10">
  {/* Help Header */}
  <div className="flex items-center gap-4">
    <SlEarphonesAlt size={42} className="text-ring shrink-0" />
    <div>
      <h3 className="font-bold text-text-primary text-lg uppercase leading-tight">
        You Need Help?
      </h3>
      <p className="text-ring text-sm mt-1 leading-relaxed">
        Do not hesitate to ask, our specialists will help you choose proper products.
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4">
    <Phone size={30} className="text-text-primary shrink-0" />
    <div>
      <h4 className="text-lg font-semibold text-text-primary">
        +06 (800) 801-858
      </h4>
      <p className="text-ring text-sm">
        Mon–Fri: 8:00 am - 4:00 pm
      </p>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-center gap-4">
    <Mail size={30} className="text-text-primary shrink-0" />
    <div>
      <h4 className="text-lg font-bold text-text-primary break-all">
        info@taskco.com
      </h4>
      <p className="text-ring text-sm">
        Mail to us directly
      </p>
    </div>
  </div>

  {/* Button */}
  <div className="flex sm:justify-start lg:justify-end w-full">
    <button className="w-full sm:w-auto bg-primary text-text-secondary hover:bg-primary-dark active:scale-95 transition px-6 py-3 rounded-full font-bold uppercase text-sm whitespace-nowrap">
      Start New Chat
    </button>
  </div>
</div>

      </div>
     
    </section>
  );
}