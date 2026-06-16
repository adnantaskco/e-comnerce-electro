import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import FeaturdCard from "./productSection/FeaturdCard";
import OnsaleCard from "./productSection/OnsaleCard";
import TopSaleCard from "./productSection/TopSaleCard";

export function TabsDemo() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-16">
        <Tabs defaultValue="featured" className="w-full">

          {/* Tabs Header */}
          <TabsList className="mb-">
            <TabsTrigger
              value="featured"
              className="text-xl font-semibold"
            >
              Featured
            </TabsTrigger>

            <TabsTrigger
              value="onsale"
              className="text-xl font-semibold"
            >
              On Sale
            </TabsTrigger>

            <TabsTrigger
              value="toprated"
              className="text-xl font-semibold"
            >
              Top Rated
            </TabsTrigger>
          </TabsList>

          {/* Featured */}
          <TabsContent value="featured">
            <Card>
             

              <CardContent>
                <FeaturdCard />
              </CardContent>
            </Card>
          </TabsContent>

          {/* On Sale */}
          <TabsContent value="onsale">
            <Card>
              

              <CardContent>
                <OnsaleCard />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Rated */}
          <TabsContent value="toprated">
            <Card>
              

              <CardContent>
                <TopSaleCard />
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}