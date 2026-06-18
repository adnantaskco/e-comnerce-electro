import { DataAirPhones } from "./Data/AirPhone";
import { DataElectricScooter } from "./Data/Electricscooter";
import { DataFeatured } from "./Data/featured";
import { DataOnSale } from "./Data/Onsale";
import { DataTopSale } from "./Data/TopSale";
import { DataTrandingProduct } from "./Data/trendingproduct";

export type Product = {
  id: number;
  brand: string;
  name: string;
  has_variants: boolean;
  slug: string;
  image: string;
  sold_amount: number;
  review: number;

  retail_price: number;
  discount_price: number;
  sale_price: number;

  has_discount: boolean;
};


export const AllProducts: Product[] = [
  ...DataAirPhones,
  ...DataElectricScooter,
  ...DataFeatured,
  ...DataOnSale,
  ...DataTopSale,
  ...DataTrandingProduct,
];

// helper function (SAFE)
export const getProductBySlug = (slug: string) => {
  return AllProducts.find(
    (item) => item.slug?.toLowerCase() === slug?.toLowerCase()
  );
};