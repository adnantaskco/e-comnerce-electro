"use client";

import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import GadgetProducts from "./productcard";

export default function GadgetsPage() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      {/* Mobile Filter Navbar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h2 className="font-bold text-lg">All Gadgets</h2>

          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg"
          >
            <FaFilter />
            Filters
          </button>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilter && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowFilter(false)}
          />

          <div className="fixed top-0 left-0 h-screen w-80 bg-white z-50 overflow-y-auto p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Filters</h2>

              <button
                onClick={() => setShowFilter(false)}
                className="text-2xl"
              >
                ×
              </button>
            </div>

            {/* Category */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Category</h3>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Electric Scooter (25)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  E-Bike (18)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Camera (12)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  AirPhone (10)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Gaming PC (12)
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Drone (2)
                </label>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Price Range</h3>

              <input
                type="range"
                min="0"
                max="500000"
                className="w-full"
              />

              <div className="flex justify-between text-sm mt-2">
                <span>৳0</span>
                <span>৳500,000</span>
              </div>
            </div>

            {/* Brand */}
            <div>
              <h3 className="font-semibold mb-3">Brand</h3>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Xiaomi
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Segway
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  E-Bike
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Excel
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Neo Audio
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Honda
                </label>
              </div>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-lg">
              Apply Filters
            </button>
          </div>
        </>
      )}

      {/* Main Layout */}
      <section className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="bg-white border rounded-xl p-5 sticky top-24">

              <h2 className="text-lg font-bold mb-5">
                Filters
              </h2>

              {/* Category */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">
                  Category
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Electric Scooter (25)
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    E-Bike (18)
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Camera (12)
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    AirPhone (10)
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Gaming PC (12)
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Drone (2)
                  </label>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">
                  Price Range
                </h3>

                <input
                  type="range"
                  min="0"
                  max="500000"
                  className="w-full"
                />

                <div className="flex justify-between text-sm mt-2">
                  <span>৳0</span>
                  <span>৳500,000</span>
                </div>
              </div>

              {/* Brand */}
              <div>
                <h3 className="font-semibold mb-3">
                  Brand
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Xiaomi
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Segway
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Honda
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Neo Audio
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <main className="lg:col-span-9">
            <div className="bg-white border rounded-xl p-4 md:p-5">

              <div className="hidden lg:flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  All Gadgets
                </h2>

                <select className="border rounded-lg px-3 py-2">
                  <option>Newest</option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                  <option>Best Selling</option>
                </select>
              </div>

              <GadgetProducts />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}