import React from "react";
import EScooter from "./EScootercard";

function ElectricScooter() {
  return (
    <section className=" bg-ring/5 ">
      <div className="container mx-auto px-4 md:px-16 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-background p-4 rounded-t-3xl">

          {/* LEFT BANNER */}
        <div className=" rounded-3xl bg-background">
              <div
            className="relative w-full h-[320px] md:h-[420px]  flex items-center rounded-xl overflow-hidden bg-no-repeat bg-cover "
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET4dEQ7dhxrFy_abXS5QHlDvvmGQP3tl-V9Z6DYgO_Q&s=10')",
                }}
                          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-text-primary/5"></div>

            {/* Content */}
            <div className="relative px-6 ">
              <p className="text-sm md:text-base tracking-wide text-text-primary">
                NEW AGE ELECTRIC SCOOTER
              </p>
                
              <h1 className="text-2xl text-text-primary md:text-5xl font-bold mt-2">
                New Age <br /> Electric Scooter
              </h1>

              <p className="text-lg text-text-primary md:text-2xl mt-3">
                From{" "}
                <span className="font-bold text-destructive ">৳ 100k</span>
              </p>

              <button className="mt-6 px-6 py-3 bg-background text-text-primary font-semibold rounded-full hover:text-secondary hover:bg-primary active:scale-95 transition">
                View All
              </button>
            </div>
          </div>

        </div>

          {/* RIGHT SECTION */}
          <div className="w-full">
            <EScooter />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ElectricScooter;