"use client";

import { AllProducts } from "@/lib/products";
import { notFound } from "next/navigation"; 
import React, { useState } from "react";
import { useCart } from "../../context/CartContext"; 
import { CiStar } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi"; // Added intuitive icons for +/-
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>; 
}

export default function ViewProductPage({ params }: PageProps) {
  const { id } = React.use(params); 
  const { addToCart } = useCart();
  
  // State for Quantity Management
  const [quantity, setQuantity] = useState(1);
  
  // State for active info tab
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description");

  const product = AllProducts.find((p) => String(p.id) === String(id));

if (!product) {
  notFound();
}

  const identicalBrandProducts = AllProducts.filter(
  (p) => p.brand === product.brand && String(p.id) !== String(id)
);



const suggestedProducts = [...identicalBrandProducts].slice(0, 4); 

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };


  const [rating, setRating] = useState(0);
const [hoverRating, setHoverRating] = useState(0);
const [comment, setComment] = useState("");

const handleSubmitReview = (e) => {
  e.preventDefault();
  
  // Console log the submission data
  console.log("Review Submitted:", {
    productId: product.id,
    rating: rating,
    comment: comment,
    timestamp: new Date().toISOString()
  });

  // Optional: Reset form fields after submission
  setRating(0);
  setComment("");
};

  return (
    <div className="container mx-auto px-4 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* IMAGE SECTION */}
        <div className="bg-background rounded-2xl p-6  shadow-sm">
          <div className="relative w-full h-[350px] sm:h-[500px] flex items-center justify-center bg-background rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain hover:scale-125 transition-transform duration-300"
            />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-5">
          <p className="text-sm text-ring">{product.brand || "ElectricScooter"}</p>
          <h1 className="text-2xl sm:text-3xl text-text-primary font-bold">{product.name}</h1>

          {/* Rating + Sold */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-cart-5 font-semibold flex items-center gap-1">
              <CiStar className="text-lg text-text-star" /> {product.review || 4.5}
            </span>
            <span className="text-ring">
              {product.sold_amount || 120} Sold
            </span>
          </div>
          <div>
            <h1 className="text-text-primary font-semibold ">Description:</h1>
            <p className="text-sm text-text-primary leading-relaxed mb-4">
            Experience premium quality and exceptional performance with the{" "}
            <strong className="font-semibold text-blue-600">
              {product?.name || "this product"}
            </strong>
            . Engineered to deliver reliable efficiency and modern functionality, it is designed to seamlessly fit into your daily routine. Crafted with high-grade durability and user convenience in mind, it offers the perfect balance of value and excellence.
          </p>
          </div>
          {/* Price Box */}
          <div className="bg-bacground p-4 rounded-xl border">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-bold text-destructive">
                ৳{product.sale_price.toLocaleString()}
              </h2>
              {product.has_discount && (
                <span className="line-through text-ring">
                  ৳{product.retail_price.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-ring mt-2">Inclusive of all taxes</p>
          </div>

          {/* QUANTITY SELECTOR */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-primary">Quantity</label>
            <div className="flex items-center border border-sidebar-ring rounded-xl w-32 justify-between bg-background overflow-hidden">
              <button 
                onClick={handleDecrease}
                className="p-3 hover:bg-ring/10 transition active:scale-95 text-ring"
                aria-label="Decrease quantity"
              >
                <FiMinus />
              </button>
              <span className="font-semibold text-text-primary w-8 text-center">{quantity}</span>
              <button 
                onClick={handleIncrease}
                className="p-3 hover:bg-ring/10 transition active:scale-95 text-ring"
                aria-label="Increase quantity"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex-1 bg-primary hover:bg-primary/50 active::scale-95 text-text-secondary py-3 rounded-xl font-semibold transition">
              Wishlist
            </button>
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: Number(product.sale_price),
                  image: product.image,
                  // note: Pass `quantity` here if your Cart Context supports quantity scaling on insertion
                })
              }
              className="flex-1 border border-sidebar-ring bg-background hover:bg-ring/20 active:scale-[0.98] text-text-primary py-3 rounded-xl font-semibold transition"
            >
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="text-md text-text-primary space-y-2 pt-4 border-t">
            <p>✔ 100% Genuine Product</p>
            <p>✔ Fast Delivery Available</p>
            <p>✔ Cash on Delivery</p>
          </div>
        </div>
      </div>

      {/* TABBED INTERFACE SECTION */}
      <div className="mt-12 bg-background border rounded-2xl overflow-hidden shadow-sm">
        {/* Tab Headers */}
        <div className="flex border-b bg-ring/5 overflow-x-auto no-scrollbar whitespace-nowrap">
          {(["description", "specifications", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold text-sm capitalize transition-colors border-b-2 -mb-[2px] ${
                activeTab === tab
                  ? "border-primary text-primary bg-bacground"
                  : "border-transparent text-ring hover:text-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6">
          {activeTab === "description" && (
            <div>
              <h3 className="font-bold text-text-primary text-lg mb-3">Product Details</h3>
              <p className="text-muted-foreground text-text-primary leading-7">
                  Experience the perfect combination of performance, style, and reliability with the{" "}
                  <span className="font-semibold">{product.name}</span> from{" "}
                  <span className="font-semibold">{product.brand}</span>. Carefully designed to deliver
                  exceptional quality and everyday convenience, this product is built using premium
                  materials to ensure durability, comfort, and long-lasting performance.

                  Whether you're using it for work, entertainment, gaming, travel, or daily tasks,
                  the {product.name} provides a seamless experience with modern features and dependable
                  functionality. Its sleek design, user-friendly operation, and attention to detail
                  make it a valuable addition to your collection.

                  Manufactured by {product.brand}, a trusted name known for innovation and quality,
                  this product undergoes strict quality standards to ensure customer satisfaction.
                  The combination of advanced technology, premium craftsmanship, and practical
                  usability makes the {product.name} an excellent choice for users seeking both
                  performance and value.

                  Key highlights include superior build quality, enhanced efficiency, comfortable
                  usability, reliable operation, and a modern aesthetic that complements any setup.
                  Whether you are upgrading your current equipment or purchasing for the first time,
                  the {product.name} is designed to meet your expectations and provide a premium
                  experience for years to come.

                  Choose the {product.name} by {product.brand} and enjoy a product that balances quality,
                  functionality, and style in one complete package.
                </p>
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="max-w-xl">
              <h3 className="font-bold text-text-primary text-lg mb-3">Technical Specifications</h3>
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Brand</td>
                    <td className="py-2 text-text-primary">{product.brand || "Unknown"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Name</td>
                    <td className="py-2 text-text-primary">{product.name || "Nill"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Sold Amount</td>
                    <td className="py-2 text-text-primary">{product.sold_amount || "25"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3"> Discount Price</td>
                    <td className="py-2 text-text-primary">{product.discount_price || "Nill"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Price</td>
                    <td className="py-2 text-text-primary">{product.sale_price || "Nill"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring">Availability</td>
                    <td className="py-2 text-text-primary">In Stock</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring w-1/3">Review</td>
                    <td className="py-2 text-text-primary">{product.review || "4.5"}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium text-ring">Warranty</td>
                    <td className="py-2 text-text-primary">1 Year Official Warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
      <div>
        <h3 className="font-bold text-text-primary text-lg mb-3">Customer Reviews</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl text-text-primary font-bold">{product.review || "4.5"}</span>
          <span className="text-ring text-sm">out of 5 stars ({product.sold_amount || 120} responses)</span>
        </div>
        <p className="text-sm text-ring italic mb-6">No direct written user reviews yet. Be the first to write one!</p>

        <hr className="border-gray-200 mb-6" />

        {/* Leave a Review Form */}
        <form onSubmit={handleSubmitReview} className="space-y-4 bg-ring/1 p-4 rounded-lg">
          <h4 className="font-semibold text-text-primary text-md">Write a Review</h4>
          
      {/* Star Rating Selection */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1">Your Rating</label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-2xl transition-colors ${
                star <= (hoverRating || rating) ? "text-text-star" : "text-ring/50"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Comment Box */}
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-text-primary mb-1">
          Your Review
        </label>
        <textarea
          id="comment"
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-text-primary"
          placeholder="Share your thoughts about this product..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={rating === 0}
        className={`px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${
          rating === 0 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Submit Review
      </button>
    </form>
  </div>
)}
        </div>
      </div>

      {/* SUGGESTED PRODUCTS SECTION */}
      <div className="mt-16">
        <h2 className="font-bold text-2xl mb-6 text-text-primary">
          You May Also Like
        </h2>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {suggestedProducts.map((item) => (
            <div
              key={item.id}
              className="group relative min-w-[48%] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0 rounded-xl overflow-hidden bg-background border hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Wishlist Button */}
              <button
                onClick={(e) => e.preventDefault()}
                className="absolute top-2 right-2 z-10 hidden md:flex items-center gap-2 bg-background px-3 py-2 rounded-full shadow-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
              >
                <FaHeart className="text-destructive" />
                <span className="text-sm font-medium text-text-primary">
                  Wishlist
                </span>
              </button>

              {/* Product Link */}
              <Link
                href={`/products/${item.id}`}
                className="flex-grow flex flex-col"
              >
                {/* Product Info */}
                <div className="p-3 md:p-4">
                  <p className="text-xs md:text-sm text-ring">
                    {item.brand || "ElectricScooter"}
                  </p>

                  <h3 className="text-sm md:text-lg font-semibold mt-1 line-clamp-2 text-text-primary min-h-[40px] md:min-h-[56px]">
                    {item.name}
                  </h3>
                </div>

                {/* Product Image */}
                <div className="h-40 md:h-52 bg-ring/10 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
                  />
                </div>
              </Link>

              {/* Price + Cart */}
              <div className="p-3 md:p-4 flex justify-between items-center bg-background">
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
                  className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-primary active:scale-95 transition"
                >
                  <FaCartArrowDown className="text-sm md:text-lg" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}