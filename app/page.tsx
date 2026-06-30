
import { HeroCarousel } from "@/components/Herosection";
import Item from "@/components/item";
import BlogSection from "@/components/LookingForsomething";

import Productgrid from "@/components/productgrid";
import EarSection from "@/components/productSection/EarPhoneSection";
import ElectricScooter from "@/components/productSection/ElectricScootersection";
import Normalcard from "@/components/productSection/tendingSection";
import Services from "@/components/services";
import TabsDemo from "@/components/TabBar";


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
