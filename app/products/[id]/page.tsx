
import { AllProducts } from "@/lib/products";
import { notFound } from "next/navigation"; // Automatically triggers a 404 page if product doesn't exist

import Image from "next/image";


export default async function ViewProductPage({ params }) {
  // Await the params object (Required in Next.js 15+)
  const { id } = await params; 
 


  const product = AllProducts.find((p) => String(p.id) === String(id));

  // If the product isn't found, safely return a 404 error page
  if (!product) {
    notFound();
  }

  return (
 <div className="container mx-auto px-4 md:;px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="relative w-full h-[400px] flex items-center justify-center bg-white rounded-2xl overflow-hidden border">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain p-6"
            />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="space-y-5">
          {/* Brand */}
          <p className="text-sm text-gray-500">{product.brand}</p>

          {/* Name */}
          <h1 className="text-2xl font-bold">{product.name}</h1>

          {/* Rating + Sold */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.review}
            </span>
            <span className="text-gray-500">
              {product.sold_amount} Sold
            </span>
          </div>

          {/* Price Box */}
          <div className="bg-gray-50 p-4 rounded-xl border">
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-bold text-red-600">
                ৳{product.sale_price}
              </h2>

              {product.has_discount && (
                <>
                  <span className="line-through text-gray-400">
                    ৳{product.retail_price}
                  </span>

                  {/* <span className="text-green-600 font-semibold">
                    -{product.}%
                  </span> */}
                </>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Inclusive of all taxes
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="flex-1 bg-primary hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
              Wishlist
            </button>

            <button
            
            className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold">
              Add to Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="text-sm text-gray-600 space-y-2 pt-4">
            <p>✔ 100% Genuine Product</p>
            <p>✔ Fast Delivery Available</p>
            <p>✔ Cash on Delivery</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="mt-12 bg-white border rounded-2xl p-6">
        <h2 className="font-bold text-lg mb-3">Product Details</h2>
        <p className="text-gray-600 leading-relaxed">
          Experience powerful bass with Bass Boost Earbuds X1.
          Designed for comfort, deep sound quality, and long usage.
          Perfect for music lovers and gamers.
        </p>
      </div>
    </div>
  );
}