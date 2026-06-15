"use client";

import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import PaymentButton from "@/components/ui/payment";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Shopping Cart
      </h1>

      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-5 text-sm font-semibold border-b pb-3">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
        <span>Action</span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 md:space-y-6 mt-6">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 md:border-b md:rounded-none md:p-0 md:grid md:grid-cols-5 md:items-center md:gap-4 md:pb-4"
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 md:w-[70px] md:h-[70px] border rounded object-cover"
                />

                <div>
                  <p className="text-sm md:text-base font-medium line-clamp-2">
                    {item.name}
                  </p>

                  {/* Mobile subtotal */}
                  <p className="md:hidden text-green-600 font-semibold mt-1">
                    ৳{(item.price * item.qty).toLocaleString("en-BD")}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex justify-between md:block mt-3 md:mt-0">
                <span className="md:hidden font-medium">Price:</span>
                <span>
                  ৳{item.price.toLocaleString("en-BD")}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex justify-between md:justify-start items-center mt-3 md:mt-0">
                <span className="md:hidden font-medium">Quantity:</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 border rounded hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="w-8 text-center font-medium">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Desktop Subtotal */}
              <div className="hidden md:block font-semibold text-green-600">
                ৳{(item.price * item.qty).toLocaleString("en-BD")}
              </div>

              {/* Remove */}
              <div className="flex justify-end md:justify-start mt-3 md:mt-0">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Totals */}
      {cart.length > 0 && (
        <div className="mt-8 md:mt-10 flex justify-center md:justify-end">
          <div className="w-full md:max-w-sm border p-5 rounded-lg shadow-sm bg-white">
            <h2 className="text-lg font-bold mb-4">
              Cart Totals
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>
                ৳{totalPrice.toLocaleString("en-BD")}
              </span>
            </div>

            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-green-600">
                ৳{totalPrice.toLocaleString("en-BD")}
              </span>
            </div>

            <div className="mt-5">
              <PaymentButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}