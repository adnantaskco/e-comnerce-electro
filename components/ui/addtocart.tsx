"use client";

import React from "react";
import { useCart } from "../../app/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function AddToCartButton({ item }: { item: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="p-2 md:p-3 rounded-lg bg- w-fit  hover:bg-orange-500 active:scale-95 transition flex items-center justify-center"
    >
      Add To Cary
    </button>
  );
}