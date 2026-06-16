"use client";

import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="text-xs md:text-sm">
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
              href="/loginpage"
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
  );
}