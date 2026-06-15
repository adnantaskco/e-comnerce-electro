import React from "react";

const products = [
  {
    title: "Headphones Pro",
    discount: "Up to 40% OFF",
    image:
      "https://pyxis.nymag.com/v1/imgs/74c/77a/1acdc6393f18ab1d9f603742dcd466dc64-jlab-audio-epic.rhorizontal.w600.jpg",
  },
  {
    title: "Smart Watch",
    discount: "Up to 30% OFF",
    image:
      "https://www.custommacbd.com/cdn/shop/products/GalaxyWatch5-silver-custom-mac-bd.jpg?v=1661494308",
  },
  {
    title: "Gaming Console",
    discount: "Up to 50% OFF",
    image:
      "https://zamve.com/wp-content/uploads/2024/11/ROG-Ally-X-Gaming-Handheld-from-Zamve-Online-Console-Game-Shop-BD.jpg",
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
      "https://img.drz.lazcdn.com/static/bd/p/4fb895d9a4cb2e9ae59559364cb10892.jpg_960x960q80.jpg_.webp",
  },
  {
    title: "Gaming PC",
    discount: "Up to 60% OFF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEetBZD6FJ03VVWEEkGsCMFpoI41hMQXoSw&s",
  },
];

function Productgrid() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-16  bg-gray-100">

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
                <div className="absolute inset-0 bg-black/20" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                  <h2 className="text-base sm:text-lg font-bold">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {item.discount}
                  </p>

                  <button className="mt-3 bg-white text-black px-3 py-1 rounded-md text-sm font-medium hover:bg-primary transition">
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