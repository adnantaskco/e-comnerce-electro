"use client";

import { useState } from "react";

import FeaturdCard from "./productSection/FeaturdCard";
import OnsaleCard from "./productSection/OnsaleCard";
import TopSaleCard from "./productSection/TopSaleCard";

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    {
      id: "featured",
      label: "Featured",
    },
    {
      id: "onsale",
      label: "On Sale",
    },
    {
      id: "toprated",
      label: "Top Rated",
    },
  ];

  return (
    <section className="bg-ring/5 py-10">
      <div className="container mx-auto px-4 md:px-16">
        {/* Tabs */}
        <div className="rounded-t-3xl bg-background shadow-sm">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex min-w-max md:min-w-0 md:justify-start border-b border-ring/20 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative whitespace-nowrap px-5 py-5 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-ring hover:text-primary"
                  }`}
                >
                  {tab.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-primary"
                        : "bg-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-background rounded-b-3xl p-4 sm:p-6 md:p-8">
            {activeTab === "featured" && <FeaturdCard />}

            {activeTab === "onsale" && <OnsaleCard />}

            {activeTab === "toprated" && <TopSaleCard />}
          </div>
        </div>
      </div>
    </section>
  );
}