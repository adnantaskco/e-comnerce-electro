"use client";
import { useRouter } from "next/navigation";



import Image from "next/image";
import {
  FaTrash,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function CheckoutPage() {
const [location, setLocation] = useState("dhaka"); 

  const router = useRouter();

  const handlePlaceOrder = () => {
  // save order, api call, etc.

  router.push("/order-success");
};

const [useDifferentBilling, setUseDifferentBilling] =
  useState(false);



  const {
    cart,
    totalItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();
  const [paymentMethod, setPaymentMethod] =
  useState("cod");

  const [couponOpen, setCouponOpen] = useState(false);
 
  const deliveryCharge =
  totalItems > 0 ? (location === "dhaka" ? 100 : 180) : 0;
const grandTotal = totalPrice + deliveryCharge;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto py-8 text-center">
          <h1 className="text-4xl font-bold">Checkout</h1>

          <div className="mt-3 text-sm text-gray-500 "><span><a href="/home"> Home &gt;{" "}</a></span>
           
            <span className="text-primary">
              Checkout
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Login Register */}
        <div className="bg-white border rounded-xl px-5 py-3 flex justify-between items-center mb-6">
          <p className="text-sm">
            Have any account? please login or register
          </p>

          <div className="flex gap-3">
            <Link href="/loginpage">
            <button className="border cursor-pointer border-primary text-primary px-5 py-2 rounded-md text-sm">
              Login
            </button>
            </Link>
             <Link
              href="/signup"
              className="bg-primary text-white cursor-pointer px-5 py-2 rounded-md text-sm"
            >
              Register
            </Link>
            
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* LEFT SIDE */}
          <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-5 lg:self-start">



            {/* Shipping Address */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="font-semibold text-lg border-l-4 border-primary pl-3 mb-5">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className="h-12 border rounded-lg px-4 outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="017********"
                  className="h-12 border rounded-lg px-4 outline-none focus:border-parmary"
                />

                <input
                  type="text"
                  placeholder="ex: House no. / building / street / area"
                  className="md:col-span-2 h-12 border rounded-lg px-4 outline-none focus:border-primary"
                />

                <select className="h-12 border rounded-lg px-4 outline-none">
                  <option>
                    Select District
                  </option>
                </select>

                <select className="h-12 border rounded-lg px-4 outline-none">
                  <option>
                    Select Thana 
                  </option>
                </select>
              </div>
            </div>

            {/* Billing Address */}
{/* Billing Address */}
<div className="bg-white rounded-2xl border overflow-hidden">

  <div className="p-5">

    <label className="flex items-center justify-between cursor-pointer">

      <div>
        <h2 className="font-semibold text-lg border-l-4 border-primary pl-3">
          Billing Address
        </h2>

        <p className="text-sm text-gray-500 mt-1 ml-4">
          Use a different billing address
        </p>
      </div>

      <input
        type="checkbox"
        checked={useDifferentBilling}
        onChange={(e) =>
          setUseDifferentBilling(e.target.checked)
        }
        className="w-5 h-5 accent-"
      />
    </label>

      </div>

        {useDifferentBilling && (
            <div className="grid md:grid-cols-2 gap-4 p-5">

                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        className="h-12 border rounded-lg px-4 outline-none focus:border-primary"
                      />

                      <input
                        type="text"
                        placeholder="017********"
                        className="h-12 border rounded-lg px-4 outline-none focus:border-parmary"
                      />

                      <input
                        type="text"
                        placeholder="ex: House no. / building / street / area"
                        className="md:col-span-2 h-12 border rounded-lg px-4 outline-none focus:border-primary"
                      />

                      <select className="h-12 border rounded-lg px-4 outline-none">
                        <option>
                          Select District
                        </option>
                      </select>

                      <select className="h-12 border rounded-lg px-4 outline-none">
                        <option>
                          Select Thana 
                        </option>
                      </select>
            </div>
        )}
      </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2  space-y-5">

            {/* Payment */}
          <div className="space-y-3 grid grid-cols-2 sm:grid-cols-2 gap-2 border p-4 rounded-3xl">

            {/* COD */}
            <label
              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${
                paymentMethod === "cod"
                  ? "border-primary bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://ghorerbazar.com/assets/img/cod.svg"
                  alt="COD"
                  className="w-10 h-10 object-contain"
                />
                <span>Cash On Delivery</span>
              </div>

              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="w-5 h-5 accent-"
              />
            </label>

            {/* Online */}
            <label
              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${
                paymentMethod === "online"
                  ? "border-primary bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://ghorerbazar.com/assets/img/online-payment.svg"
                  alt="Online Payment"
                  className="w-10 h-10 object-contain"
                />
                <span>Online Payment</span>
              </div>

              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "online"}
                onChange={() => setPaymentMethod("online")}
                className="w-5 h-5 accent-"
              />
            </label>

            {/* bKash */}
            <label
              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${
                paymentMethod === "bkash"
                  ? "border-primary bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://ghorerbazar.com/assets/img/bkash.png"
                  alt="bKash"
                  className="w-10 h-10 object-contain"
                />
                <span>bKash</span>
              </div>

              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "bkash"}
                onChange={() => setPaymentMethod("bkash")}
                className="w-5 h-5 accent-"
              />
            </label>

          </div>

            {/* Coupon */}
            <div className="bg-white rounded-2xl border overflow-hidden">

              <button
                onClick={() =>
                  setCouponOpen(!couponOpen)
                }
                className="w-full px-5 py-4 flex items-center justify-between font-medium"
              >
                <span>
                  Have any coupon or gift voucher?
                </span>

                {couponOpen ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {couponOpen && (
                <div className="border-t p-5">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="flex-1 border rounded-lg px-4 py-3"
                    />

                    <button className="bg-primary text-white px-5 rounded-lg">
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Review */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="font-semibold text-lg border-l-4 border-primary pl-3 mb-5">
                Order review
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  Cart is empty
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-5 border-b"
                  >
                    <div className="flex gap-4">

                      <div className="w-14 h-14 border rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                      </div>

                      <div>
                        <h3 className="text-[15px] font-bold sm:font-semibold">
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-3 mt-2">

                          <span className="text-sm hidden sm:block">
                            Qty:
                          </span>

                          <div className="flex items-center border rounded-lg overflow-hidden">

                            <button
                              onClick={() =>
                                decreaseQty(item.id)
                              }
                              className="px-3 py-1 bg-gray-100 text-black text-lg font-bold"
                            >
                              <FaMinus/>
                            </button>

                            <span className="px-4">
                              {item.qty}
                            </span>

                            <button
                              onClick={() =>
                                increaseQty(item.id)
                              }
                              className="px-3 py-1 bg-gray-100 text-black text-lg font-bold"
                            >
                              <FaPlus/>
                            </button>
                          </div>

                          <span className="font-medium">
                            ৳
                            {(
                              item.price * item.qty
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>


            {/* Summary */}
          <div className="bg-white rounded-2xl border p-5 space-y-3">

            {/* Total Items */}
            <div className="flex justify-between text-gray-600">
              <span>Total Items</span>
              <span>{totalItems.toLocaleString()}</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between text-gray-600">
              <span>Sub total</span>
              <span>৳ {totalPrice.toLocaleString()}</span>
            </div>

            {/* Delivery Selection */}
            <div className="flex justify-between items-center text-gray-600">
              <span>Delivery Area</span>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border rounded-md px-2 py-1 text-sm"
              >
                <option value="dhaka">Inside Dhaka (৳100)</option>
                <option value="outside">Outside Dhaka (৳180)</option>
              </select>
            </div>

            {/* Delivery Cost */}
            <div className="flex justify-between text-gray-600">
              <span>Delivery cost</span>
              <span>৳ {deliveryCharge}</span>
            </div>

            {/* Total */}
            <div className="border-t mt-3 pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>৳ {grandTotal.toLocaleString()}</span>
            </div>
          </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl border p-6">

              <h2 className="font-semibold text-lg border-l-4 border-primary pl-3 mb-4">
                Special notes
                <span className="text-sm text-gray-500 ml-2">
                  (Optional)
                </span>
              </h2>

              <textarea
                rows={4}
                maxLength={90}
                className="w-full border rounded-lg p-4 resize-none"
              />

              <p className="text-xs text-gray-400 mt-2">
                0 / 90 characters
              </p>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1"
              />

              <span>
                I have read and agree to the
                <span className="text-primary">
                  {" "}
                  Terms and Conditions,
                  Privacy Policy &
                  Refund and Return Policy
                </span>
              </span>
            </label>

            {/* Order Button */}
            <button   onClick={handlePlaceOrder} className="w-full bg-primary hover:bg-orange-600 text-white py-4 rounded-lg font-semibold">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}