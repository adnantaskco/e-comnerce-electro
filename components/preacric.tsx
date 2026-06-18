// // app/products/[slug]/page.tsx

// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { getProductBySlug } from "@/lib/products";

// export default function ProductView({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const product = getProductBySlug(params.slug);

//   if (!product) {
//     return notFound();
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
        
//         {/* Image */}
//         <div className="relative w-full h-[400px]">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-contain rounded-lg"
//           />
//         </div>

//         {/* Details */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>

//           <p className="text-gray-500 mt-2">
//             Product ID: {product.id}
//           </p>

//           <div className="mt-6 space-y-2">
//             {product.has_discount && (
//               <p className="line-through text-gray-400">
//                 ৳ {product.retail_price}
//               </p>
//             )}

//             <p className="text-2xl font-bold text-green-600">
//               ৳ {product.sale_price}
//             </p>

//             <p className="text-red-500">
//               Discount: ৳ {product.discount_price}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }