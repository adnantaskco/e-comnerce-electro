import React from "react";

const products = [
  {
    title: "Headphones Pro",
    discount: "Up to 40% OFF",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShJawmD6lmVy473z5fPxG7WRWSXZQSbm888GSoNbE6Kyn3FagX",
  },
  {
    title: "Smart Watch",
    discount: "Up to 30% OFF",
    image:
      "https://img.magnific.com/free-photo/rendering-smart-home-device_23-2151039318.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Gaming Console",
    discount: "Up to 50% OFF",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOWUrZUoXdKqv7Uis_W_oboRJH0eGe74W7qOkMCi9SVf5r3gn2",
  },
  {
    title: "360 Camera",
    discount: "Up to 25% OFF",
    image:
      "https://static.wixstatic.com/media/adb937_de6ac30f74f043cd91733d1021fb6b61~mv2.jpg",
  },
  {
    title: "Smart Phone",
    discount: "Up to 35% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhb9Uvq1kv2LIypBmnlRGLNtYRFFC3FMtZ4LKYEKeRYSxyK1JI",
  },
  {
    title: "Gaming PC",
    discount: "Up to 60% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDiqetNdcA7vvV-qrw91kA0-8DTEOa7e2GslUpZrdFfW4kYsnc",
  },
];

function Productgrid() {
  return (
    <section className="py-10 bg-ring/5">
      <div className="container mx-auto px-4 md:px-16  ">

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT FEATURE IMAGE */}
          <div className="h-[250px] sm:h-[300px] md:h-[480px]">
            <img
              src="https://m.media-amazon.com/images/I/81Sn-mz4CKL._AC_UF894,1000_QL80_.jpg"
              alt="featured"
              className="w-full h-full  object-cover rounded-xl"
            />
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {products.map((item, index) => (
              <div
                key={index}
                className="relative group h-52 rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/20" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-text-secondary">
                  <h2 className="text-base sm:text-lg font-bold">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary">
                    {item.discount}
                  </p>

                  <button className="mt-3 bg-background text-text-primary hover:text-text-secondary px-3 py-1 rounded-md text-sm font-medium hover:bg-primary active:scale-95 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Productgrid;