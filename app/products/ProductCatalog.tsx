"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaCartArrowDown, FaHeart, FaSliders, FaXmark } from "react-icons/fa6";
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation"; 
import { AllProducts } from "@/lib/products"; 

// 1. Added TypeScript definitions for safety
interface Product {
  id: string | number;
  name: string;
  brand: string;
  image: string;
  sale_price: number;
  retail_price: number;
  has_variants?: boolean;
}

const getCategory = (product: Product): string => {
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
  category: getCategory(p as unknown as Product)
}));

export default function ProductCatalog() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter(); 

  // Core Config Constants
  const prices = productsWithCategories.map(p => p.sale_price);
  const maxProductPrice = Math.max(...prices, 0);
  const minProductPrice = Math.min(...prices, 0);

  const uniqueCategories = Array.from(new Set(productsWithCategories.map(p => p.category)));
  const uniqueBrands = Array.from(new Set(productsWithCategories.map(p => p.brand)));

  // State initialization
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [hasVariantsOnly, setHasVariantsOnly] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Read URL parameters on component mount safely to prevent hydration mismatches
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedBrand(searchParams.get('brand') || '');
    const priceParam = searchParams.get('maxPrice');
    if (priceParam) setMaxPrice(Number(priceParam));
    setHasVariantsOnly(searchParams.get('variants') === 'true');
  }, [searchParams]);

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  // Synchronize states to URL parameter strings smoothly
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategory) {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');
    }

    if (selectedBrand) {
      params.set('brand', selectedBrand);
    } else {
      params.delete('brand');
    }

    if (maxPrice < maxProductPrice) {
      params.set('maxPrice', maxPrice.toString());
    } else {
      params.delete('maxPrice');
    }

    if (hasVariantsOnly) {
      params.set('variants', 'true');
    } else {
      params.delete('variants');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }, [selectedCategory, selectedBrand, maxPrice, hasVariantsOnly, maxProductPrice, router, searchParams]);

  // Single Select Toggle Handlers
  const handleToggleCategory = (cat: string) => {
    setSelectedCategory(prev => (prev === cat ? '' : cat));
  };

  const handleToggleBrand = (brand: string) => {
    setSelectedBrand(prev => (prev === brand ? '' : brand));
  };

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setMaxPrice(maxProductPrice);
    setHasVariantsOnly(false);
  };

  // Filter Engine
  const filteredProducts = useMemo(() => {
    return productsWithCategories.filter(product => {
      if (searchQuery) {
        const matchesName = product.name?.toLowerCase().includes(searchQuery);
        const matchesBrand = product.brand?.toLowerCase().includes(searchQuery);
        if (!matchesName && !matchesBrand) return false;
      }
      if (selectedCategory && product.category !== selectedCategory) return false;
      if (selectedBrand && product.brand !== selectedBrand) return false;
      if (product.sale_price > maxPrice) return false;
      if (hasVariantsOnly && !product.has_variants) return false;
      
      return true;
    });
  }, [selectedCategory, selectedBrand, maxPrice, hasVariantsOnly, searchQuery]);

  // Reusable internal filter layout
  const FilterContent = () => (
    <>
    
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold tracking-tight text-text-primary">Filters</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleReset} 
            className="text-sm font-semibold text-destructive hover:text-destructive/50 transition"
          >
            Reset All
          </button>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-ring hover:text-text-primary p-1">
            <FaXmark className="text-xl text-text-primary" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Categories</h3>
        <div className="space-y-2">
          {uniqueCategories.map(cat => (
            <label key={cat} className="flex items-center text-sm font-medium text-ring cursor-pointer hover:text-text-primary transition">
              <input 
                type="checkbox" 
                checked={selectedCategory === cat} 
                onChange={() => handleToggleCategory(cat)}
                className="h-4 w-4 rounded-full border-ring/30 text-primary focus:ring-primary/50 mr-3 cursor-pointer"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Brands</h3>
        <div className="max-h-44 overflow-y-auto pr-2 space-y-2 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {uniqueBrands.map(brand => (
            <label key={brand} className="flex items-center text-sm font-medium text-ring cursor-pointer hover:text-ring/80 transition">
              <input 
                type="checkbox" 
                checked={selectedBrand === brand} 
                onChange={() => handleToggleBrand(brand)}
                className="h-4 w-4 rounded-full border-background text-primary focus:ring-primary/50 mr-3 cursor-pointer"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price Slider */}
      <div className="mb-6 border-b border-sidebar-ring pb-5">
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ring">Max Price</h3>
          <span className="text-base font-bold text-primary">৳{maxPrice.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min={minProductPrice} 
          max={maxProductPrice} 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-ring/10 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-xs font-semibold text-ring mt-2">
          <span>৳{minProductPrice.toLocaleString()}</span>
          <span>৳{maxProductPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ring mb-3">Specifications</h3>
        <label className="flex items-center text-sm font-medium text-ring cursor-pointer hover:text-slate-900 transition">
          <input 
            type="checkbox" 
            checked={hasVariantsOnly} 
            onChange={(e) => setHasVariantsOnly(e.target.checked)}
            className="h-4 w-4 rounded border-sidebar-ring text-primary focus:ring-primary/60 mr-3 cursor-pointer"
          />
          Multiple Variants
        </label>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background antialiased text-ring w-full">
      <div className="container mx-auto px-4 md:px-16 flex relative gap-8 sm:py-5 md:py-10">
        
        {/* DESKTOP SIDEBAR */}
        <aside className="w-64 bg-background p-6 border border-sidebar-ring rounded-2xl sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto hidden md:block select-none flex-shrink-0 shadow-sm scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <FilterContent />
        </aside>

        {/* MOBILE RESPONSIVE DRAWER */}
        <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div onClick={() => setIsMobileOpen(false)} className="absolute inset-0 bg-foreground backdrop-blur-sm" />
          <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-background p-6 shadow-2xl overflow-y-auto transition-transform duration-300 ease-out transform scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <FilterContent />
          </div>
        </div>

        {/* PRODUCT GRID SECTION */}
        <section className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary">Product Catalog</h1>
              {searchQuery && (
                <p className="text-sm text-primary font-medium">
                  Filtered by query: <span className="italic font-bold">"{searchQuery}"</span>
                </p>
              )}
              <p className="text-sm font-medium text-ring mt-1">Showing {filteredProducts.length} items available</p>
            </div>
            
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden flex items-center gap-2 bg-foreground text-text-secondary px-4 py-2.5 rounded-full font-semibold text-sm active:scale-95 shadow-md transition"
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
                className="group relative rounded-xl overflow-hidden bg-background hover:border-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-2 right-2 z-10 hidden md:flex items-center gap-2 bg-background px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                >
                  <FaHeart className="text-destructive" />
                  <span className="text-sm font-medium text-text-primary">Wishlist</span>
                </button>

                <Link href={`/products/${item.id}`} className="flex-grow flex flex-col">
                  <div className="p-4">
                    <p className="text-sm text-ring">{item.brand || "ElectricScooter"}</p>
                    <h3 className="text-sm md:text-lg font-semibold mt-1 whitespace-nowrap overflow-hidden text-ellipsis text-text-primary">
                      {item.name}
                    </h3>
                  </div>

                  <div className="h-52 bg-ring/10 flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                    />
                  </div>
                </Link>

                <div className="p-2 md:p-4 flex justify-between items-center mt-auto bg-background">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-sm text-ring line-through">
                      ৳{item.retail_price.toLocaleString()}
                    </span>
                    <span className="text-sm md:text-lg font-bold text-destructive">
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
                    className="p-2 md:p-3 rounded-full bg-black text-text-secondary hover:bg-primary active:scale-95 transition"
                  >
                    <FaCartArrowDown className="text-sm text-text-secondary md:text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback Layout */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-background border border-dashed border-sidebar-ring rounded-2xl mt-4">
              <p className="text-ring font-medium">No products found matching your current filter choices.</p>
              <button 
                onClick={handleReset} 
                className="mt-2 text-sm font-bold text-primary hover:text-primary/70 underline underline-offset-4"
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