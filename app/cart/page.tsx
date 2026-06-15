"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Cart</h1>

      {/* TABLE HEADER */}
      <div className="hidden md:grid grid-cols-5 text-sm font-semibold border-b pb-3">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
        <span></span>
      </div>

      {/* CART ITEMS */}
      <div className="space-y-6 mt-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 border-b pb-4"
            >
              {/* PRODUCT */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="border rounded"
                />
                <p className="text-sm font-medium">{item.name}</p>
              </div>

              {/* PRICE */}
              <p className="text-gray-700">
                ৳{item.price.toLocaleString("en-BD")}
              </p>

              {/* QUANTITY */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 border"
                >
                  -
                </button>

                <span className="px-3">{item.qty}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-1 border"
                >
                  +
                </button>
              </div>

              {/* SUBTOTAL */}
              <p className="font-semibold text-green-600">
                ৳{(item.price * item.qty).toLocaleString("en-BD")}
              </p>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

      {/* TOTAL SECTION */}
      {cart.length > 0 && (
        <div className="mt-10 flex justify-end">
          <div className="w-full md:w-1/3 border p-5 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-4">Cart totals</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>৳{totalPrice.toLocaleString("en-BD")}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>৳{totalPrice.toLocaleString("en-BD")}</span>
            </div>

            <button className="w-full mt-5 bg-black text-white py-2 rounded">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}