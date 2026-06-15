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
    title: "Action Camera",
  },
  {
    id: 4,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-4-removebg-preview.png",
    title: "Airphone",
  },
  {
    id: 5,
    image:
      "https://electro.madrasthemes.com/3x/wp-content/uploads/sites/4/2023/11/cat-img-5-removebg-preview.png",
    title: "Smart Home",
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
    title: "Drone",
  },
]

function Item() {
  return (
    <section className="">
        <div className="container mx-auto px-4 md:px-16 bg-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 p-6">
      {SectionData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Image */}
          <div className="w-28 h-28 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain rounded-full m-2 p-4 bg-white cursor-pointer"
            />
          </div>

          {/* Title */}
          <p className="mt-2 text-md font-semibold text-gray-700">
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