import { DataAirPhones } from "../../lib/Data/AirPhone";
import { DataElectricScooter } from "../../lib/Data/Electricscooter";
import { DataFeatured } from "../../lib/Data/featured";
import { DataOnSale } from "../../lib/Data/Onsale";
import { DataTopSale } from "../../lib/Data/TopSale";
import { DataTrandingProduct } from "../../lib/Data/trendingproduct";

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