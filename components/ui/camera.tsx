"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CameraPoster() {
  return (
    <section className="w-full flex justify-center items-center py-10 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[95%] max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-pink-600/20 blur-2xl" />

        <div className="relative grid md:grid-cols-2 gap-8 p-10 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-5">
            <p className="text-sm tracking-widest text-blue-400 uppercase">
              New Arrival 2026
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Ultra HD <span className="text-blue-400">Mirrorless Camera</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base">
              Capture every moment with stunning clarity, cinematic color grading,
              and AI-powered autofocus designed for professionals & creators.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                📸 108MP Sensor
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                🎥 8K Video Recording
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                ⚡ AI Autofocus
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                🔋 48H Battery
              </div>
            </div>

            {/* Model Info */}
            <div className="flex gap-3 text-xs text-gray-300">
              <span className="px-3 py-1 bg-white/10 rounded-full">
                Model: X-Pro 12
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full">
                2026 Edition
              </span>
            </div>

            <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl font-semibold shadow-lg">
              Buy Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="relative w-[320px] h-[320px]"
            >
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
                alt="Camera"
                
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}