import React from "react";
import EScooter from "./EScootercard";
import EarPhoneCard from "./EarPhoneCard";

function EarSection() {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* LEFT BANNER */}
         
          <div>
            <EarPhoneCard/>
          </div>
          {/* RIGHT SECTION */}
           <div
            className="relative w-full h-[320px] md:h-[420px] flex items-center rounded-xl overflow-hidden bg-no-repeat bg-cover "
                style={{
                  backgroundImage:
                    "url('https://cdn.shopify.com/s/files/1/0508/7461/3942/files/20.jpg?v=1665644693')",
                }}
                          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5"></div>

            {/* Content */}
            <div className="relative px-6 text-">
              
                
              <h1 className="text-2xl md:text-5xl font-bold mt-2">
                Audio <br /> Studio wireless
              </h1>
              <p className="text-md md:text-base font-bold tracking-wide text-black">
                Hear the music
              </p>
              <p className="text-sm">Not the noice</p>

             
              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-primary active:scale-95 transition">
                View All
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EarSection;