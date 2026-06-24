import React from "react"

const SectionData = [
  {
    id: 1,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-1-removebg-preview.png",
    title: "Gaming",
  },
  {
    id: 2,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-2-removebg-preview.png",
    title: "Laptop",
  },
  {
    id: 3,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-3-removebg-preview.png",
    title: "Drone",
  },
  {
    id: 4,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-4-removebg-preview.png",
    title: "Action Camera",
  },
  {
    id: 5,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-5-removebg-preview.png",
    title: "Smart Earphone",
  },
  {
    id: 6,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-6-removebg-preview.png",
    title: "Wearable",
  },
  {
    id: 7,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-7-removebg-preview.png",
    title: "Smart Watch",
  },
]

function Item() {
  return (
<section className="bg-ring/5 py-6">
  <div className="container mx-auto px-4 md:px-16">
    
    <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-6 snap-x snap-mandatory  scroll-smooth pb-4">
      {SectionData.map((item) => (
        <div
          key={item.id}
          className="flex-shrink-0 snap-start flex flex-col items-center text-center
                     w-[90px] sm:w-[110px] md:w-[180px]"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain rounded-full bg-background p-3 md:p-4
              shadow-sm hover:shadow-md hover:scale-105
               transition-all duration-300 cursor-pointer"
            />
          </div>

          <p className="mt-3 text-xs sm:text-sm font-semibold text-text-primary line-clamp-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
  )
}

export default Item