import { Header } from "@/components/Header";
import { MarketOverview } from "@/components/MarketOverview";
import { Chart } from "@/components/Chart";
import { Indicators } from "@/components/Indicators";
import { Alerts } from "@/components/Alerts";
import { Rules } from "@/components/Rules";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-8">
            <MarketOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Chart />
              </div>
              <div className="space-y-6">
                <Indicators />
                <Alerts />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rules">
            <Rules />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;