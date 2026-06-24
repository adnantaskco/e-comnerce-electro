import React from "react";

import EarPhoneCard from "./EarPhoneCard";

function EarSection() {
  return (
    <section className=" bg-ring/5 pb-5">
      <div className="container mx-auto px-4 md:px-16 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-background p-4 rounded-b-3xl">

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
            <div className="absolute inset-0 bg-text-primary/5"></div>

            {/* Content */}
            <div className="relative px-6 ">
              
                
              <h1 className="text-2xl text-text-primary md:text-5xl font-bold mt-2">
                Audio <br /> Studio wireless
              </h1>
              <p className="text-lg text-text-primary md:text-2xl mt-3">
                Hear the music
              </p>
              <p className="text-lg text-ring">Not the noice</p>

             
              <button className="mt-6 px-6 py-3 bg-secondary text-text-primary font-semibold rounded-full hover:text-secondary hover:bg-primary active:scale-95 transition">
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