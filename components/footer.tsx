"use client";

import Link from "next/link";
import { Headset, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 bg-white ">
      {/* TOP SUPPORT SECTION */}
      <div className="border-y py-5">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start lg:items-center">

            {/* Help */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Headset size={42} className="text-slate-700 shrink-0" />
              <div>
                <h3 className="font-bold text-lg sm:text-xl uppercase">
                  You Need Help?
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Do not hesitate to ask, our specialists will help you choose proper products.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Phone size={30} className="shrink-0" />
              <div>
                <h4 className="text-lg sm:text-xl font-medium">
                  +06 (800) 801-858
                </h4>
                <p className="text-gray-500 text-sm">
                  Mon–Fri: 8:00 am - 4:00 pm
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Mail size={30} className="shrink-0" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold break-all">
                  info@electro.com
                </h4>
                <p className="text-gray-500 text-sm">
                  Mail to us directly
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="flex sm:justify-start lg:justify-end">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary transition px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold uppercase text-sm sm:text-base">
                Start New Chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-center">

          <div className="text-center lg:text-left">
            <h3 className="font-bold text-2xl sm:text-3xl uppercase">
              Newsletter
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Subscribe to get the latest deals, promotions and offering.
            </p>
          </div>

          <div className="w-full lg:w-[600px]">
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-12 sm:h-14 rounded-full border bg-white px-5 sm:pl-6 sm:pr-40 outline-none"
              />
              <button className="sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 bg-primary hover:bg-yellow-500 transition px-6 sm:px-8 h-12 sm:h-12 rounded-full font-bold uppercase text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <div >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">

          {[
            {
              title: "Shop",
              items: [
                "Super Deals",
                "Value of the Day",
                "New Arrivals",
                "Computer & Accessories",
                "Mobiles & Tablets",
                "Gift Cards",
              ],
            },
            {
              title: "Help",
              items: [
                "Track My Order",
                "My Account",
                "Return Policies",
                "FAQs",
                "Product Recalls",
              ],
            },
            {
              title: "About Us",
              items: [
                "About company",
                "Delivery with assembly",
                "Affiliate Program",
                "Cooperation",
                "Contact Us",
                "Careers",
              ],
            },
            {
              title: "Regulations",
              items: [
                "Privacy Policy",
                "Terms of Use",
                "Help",
                "Submit a complaint",
              ],
            },
            {
              title: "Services",
              items: [
                "Test Drive Product",
                "Repair Help",
                "Find a Repair Shop",
                "Pick Up in Store",
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 sm:space-y-2 text-gray-700  hover:transition-x-2 text-sm sm:text-base">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
     <div className="border-t">
  <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

      <p className="text-gray-600 text-sm sm:text-base">
        © Electro: Buy electronics products and gadgets online
      </p>

      <div className="flex justify-center md:justify-end">
        <img
          src="https://freepngimg.com/download/credit_card/25504-6-major-credit-card-logo-transparent-background.png"
          alt="Payment methods"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />
      </div>

    </div>
  </div>
</div>
    </footer>
  );
}