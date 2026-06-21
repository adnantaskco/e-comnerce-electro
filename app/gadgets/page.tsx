"use client"

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaCartArrowDown, FaHeart, FaSliders, FaXmark } from "react-icons/fa6";
import React, { useState, useMemo } from 'react';
import { AllProducts } from "@/lib/products"; 

const getCategory = (product) => {
  const name = product.name.toLowerCase();
  const brand = product.brand.toLowerCase();
  
  if (name.includes('scooter') || name.includes('bike')) return 'Vehicles';
  if (name.includes('earbuds') || name.includes('earphones') || name.includes('buds') || name.includes('speaker') || name.includes('audio') || brand.includes('sound')) return 'Audio';
  if (name.includes('camera') || name.includes('drone')) return 'Photography';
  if (name.includes('watch')) return 'Wearables';
  if (name.includes('tv')) return 'Entertainment';
  if (name.includes('keyboard') || name.includes('pc')) return 'Computing';
  return 'Electronics';
};

const productsWithCategories = AllProducts.map(p => ({
  ...p,
  category: getCategory(p)
}));

export default function ProductCatalog() {
  const { addToCart } = useCart();

  // Dynamic values extraction
  const uniqueCategories = [...new Set(productsWithCategories.map(p => p.category))];
  const uniqueBrands = [...new Set(productsWithCategories.map(p => p.brand))];
  const prices = productsWithCategories.map(p => p.sale_price);
  const maxProductPrice = Math.max(...prices);
  const minProductPrice = Math.min(...prices);

  // States for filters & Mobile Drawer layout
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [hasVariantsOnly, setHasVariantsOnly] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Handlers
  const handleToggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleToggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMaxPrice(maxProductPrice);
    setHasVariantsOnly(false);
  };

  // Filter Engine
  const filteredProducts = useMemo(() => {
    return productsWithCategories.filter(product => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      if (product.sale_price > maxPrice) return false;
      if (hasVariantsOnly && !product.has_variants) return false;
      return true;
    });
  }, [selectedCategories, selectedBrands, maxPrice, hasVariantsOnly]);

  // Reusable internal filter component layout
  const FilterContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">Filters</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleReset} 
            className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition"
          >
            Reset All
          </button>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-slate-500 hover:text-slate-800 p-1">
            <FaXmark className="text-xl" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6 border-b border-slate-100 pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Categories</h3>
        <div className="space-y-2">
          {uniqueCategories.map(cat => (
            <label key={cat} className="flex items-center text-sm font-medium text-slate-600 cursor-pointer hover:text-slate-900 transition">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(cat)} 
                onChange={() => handleToggleCategory(cat)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mr-3 cursor-pointer"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6 border-b border-slate-100 pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Brands</h3>
        <div className="max-h-44 overflow-y-auto pr-2 space-y-2 scrollbar-thin">
          {uniqueBrands.map(brand => (
            <label key={brand} className="flex items-center text-sm font-medium text-slate-600 cursor-pointer hover:text-slate-900 transition">
              <input 
                type="checkbox" 
                checked={selectedBrands.includes(brand)} 
                onChange={() => handleToggleBrand(brand)}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mr-3 cursor-pointer"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price Slider */}
      <div className="mb-6 border-b border-slate-100 pb-5">
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Max Price</h3>
          <span className="text-base font-bold text-blue-600">৳{maxPrice.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min={minProductPrice} 
          max={maxProductPrice} 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
          <span>৳{minProductPrice.toLocaleString()}</span>
          <span>৳{maxProductPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Specifications</h3>
        <label className="flex items-center text-sm font-medium text-slate-600 cursor-pointer hover:text-slate-900 transition">
          <input 
            type="checkbox" 
            checked={hasVariantsOnly} 
            onChange={(e) => setHasVariantsOnly(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mr-3 cursor-pointer"
          />
          Multiple Variants
        </label>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800 w-full">
      
      {/* GLOBAL ALIGNED CONTAINER */}
      <div className="container mx-auto px-4 md:px-16 flex relative gap-8 py-10">
        
        {/* 1. PERMANENT DESKTOP SIDEBAR */}
        <aside className="w-64 bg-white p-6 border border-slate-200 rounded-2xl sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto hidden md:block select-none flex-shrink-0 shadow-sm">
          <FilterContent />
        </aside>

        {/* 2. MOBILE RESPONSIVE SLIDEOUT DRAWER */}
        <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div onClick={() => setIsMobileOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-white p-6 shadow-2xl overflow-y-auto transition-transform duration-300 ease-out transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <FilterContent />
          </div>
        </div>

        {/* PRODUCT GRID SECTION */}
        <section className="flex-1">
          {/* Header Row & Filter Button */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Product Catalog</h1>
              <p className="text-sm font-medium text-slate-500 mt-1">Showing {filteredProducts.length} items available</p>
            </div>
            
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-full font-semibold text-sm active:scale-95 shadow-md transition"
            >
              <FaSliders className="text-xs" />
              Filters
            </button>
          </div>

          {/* Products Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden bg-white border hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Wishlist Button */}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-2 right-2 z-10 hidden md:flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                >
                  <FaHeart className="text-red-500" />
                  <span className="text-sm font-medium">Wishlist</span>
                </button>

                {/* Navigational Wrapper */}
                <Link href={`/products/${item.id}`} className="flex-grow flex flex-col">
                  <div className="p-4">
                    <p className="text-sm text-gray-500">
                      {item.brand || "ElectricScooter"}
                    </p>
                    <h3 className="text-sm md:text-lg font-semibold mt-1 whitespace-nowrap overflow-hidden text-ellipsis text-slate-800">
                      {item.name}
                    </h3>
                  </div>

                  <div className="h-52 bg-gray-100 flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                    />
                  </div>
                </Link>

                {/* Prices & Actions markup mapping */}
                <div className="p-2 md:p-4 flex justify-between items-center mt-auto border-t border-slate-50 bg-white">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-sm text-gray-400 line-through">
                      ৳{item.retail_price.toLocaleString()}
                    </span>
                    <span className="text-sm md:text-lg font-bold text-red-600">
                      ৳{item.sale_price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: Number(item.sale_price),
                        image: item.image,
                      })
                    }
                    className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-red-600 active:scale-95 transition"
                  >
                    <FaCartArrowDown className="text-sm md:text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback Zero Match Layout */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-2xl mt-4">
              <p className="text-slate-500 font-medium">No products found matching your current filter choices.</p>
              <button 
                onClick={handleReset} 
                className="mt-2 text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}