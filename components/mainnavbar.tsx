"use client";

import Link from "next/link";
import {
  FiMenu,
  FiSearch,
  FiRefreshCw,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

import { useCart } from "@/app/context/CartContext";

interface MainNavProps {
  setMobileMenu: (value: boolean) => void;
}

export default function MainNav({
  setMobileMenu,
}: MainNavProps) {

  const { totalItems, totalPrice } = useCart();

  return (
    <>
    <section className="sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 lg:px-16 py-4">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 text-text-primary">

        {/* MOBILE MENU */}
        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-ring"
        >
          <FiMenu size={24} />
        </button>

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <img
            src="https://taskco.io/assets/taskco.svg"
            alt="Taskco"
          />
        </Link>

        {/* DESKTOP MENU */}
        <button
          className="hidden md:flex"
          onClick={() => setMobileMenu(true)}
        >
          <FiMenu size={24} />
        </button>

        {/* SEARCH */}
        <div className="order-3 lg:order-none w-full lg:flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-11 md:h-12 rounded-full border-2 border-primary pl-5 pr-16 md:pr-20 outline-none"
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full  bg-primary flex items-center justify-center">
              <FiSearch className="text-secondary" size={16} />
            </button>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          <Link  href="/">
          <button  className="hidden md:block cursor-pointer hover:text-primary text-text-primary ">
            <FiRefreshCw size={22} />
          </button></Link>

          <button className="cursor-pointer text-text-primary">
            <FiHeart size={22}  />
          </button>

          <Link
            href="/cart"
            className="relative flex items-center gap-2"
          >
            <div className="relative text-text-primary">
              <FiShoppingBag size={24} />

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-secondary text-xs font-bold flex items-center justify-center">
                {totalItems}
              </span>
            </div>

            <span className="hidden md:block font-medium text-text-primary">
              ৳ {totalPrice}
            </span>
          </Link>

        </div>

      </div>
    </div>
    </section>
    
    </>
  );
}