"use client";

import Link from "next/link";
import { FaPhoneAlt, FaShopify, FaTruck } from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="text-xs md:text-sm">
      <div className="container text-ring mx-auto px-4 lg:px-16 text-normal font-medium">
        <div className="flex items-center justify-between py-2">

          {/* LEFT */}
          <div className="hidden md:flex items-center gap-6 ">
            <div className="flex items-center gap-4 hover:underline cursor-pointer hover:text-primary">
              <FaPhoneAlt size={16} />
              <span>+060 (800) 801-858</span>
            </div>

            <div className="flex items-center gap-4 hover:text-primary hover:underline cursor-pointer">
              <FiMail size={16} />
              <span>info@taskco.com</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 md:gap-6 ml-auto ">
            <Link
              href="#"
              className="hidden md:flex items-center gap-2 hover:text-primary border-r-2 pr-4 hover:underline cursor-pointer"
            >
              <FiMapPin />
              Store Locator
            </Link>

            <Link
              href="#"
              className="hidden md:flex items-center gap-2 hover:text-primary border-r-2 pr-4 hover:underline cursor-pointer"
            >
              <FaTruck/>
              Track Your Order
            </Link>

            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 hover:text-primary border-r-2 pr-4 hover:underline cursor-pointer"
            >
              <FaShopify/>
              Shop
            </Link>

            <Link
              href="/loginpage"
              className="flex items-center gap-2 hover:text-primary hover:underline cursor-pointer"
            >
              <FiUser size={16} />
              <span className="hidden sm:block">
                My Account
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}