import Footer from "@/components/footer";
import { HeroCarousel } from "@/components/Herosection";
import Item from "@/components/item";
import BlogSection from "@/components/LookingForsomething";
import Navbar from "@/components/Navbar";
import Productgrid from "@/components/productgrid";
import EarSection from "@/components/productSection/EarPhoneSection";
import ElectricScooter from "@/components/productSection/ElectricScootersection";
import Normalcard from "@/components/productSection/tendingSection";
import Services from "@/components/services";
import { TabsDemo } from "@/components/TabBar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   
   <HeroCarousel></HeroCarousel>
   <Services></Services>
   
   <ElectricScooter></ElectricScooter>
   <EarSection></EarSection>
   <TabsDemo></TabsDemo>
   <Item></Item>
   <Productgrid></Productgrid>
   <Normalcard></Normalcard>
   <BlogSection></BlogSection>
  
   </>
  );
}
