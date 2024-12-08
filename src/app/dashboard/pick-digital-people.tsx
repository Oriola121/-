import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@True-Me-Digital-Man/components/ui/tabs";
import PublicImage from "./public-image";

export default function PickDigitalPeople() {
  return (
    <div className="h-[85%] w-[35%] bg-white p-4 space-y-2">
      <h1 className="text-xl font-bold">选择数字人</h1>
      <Tabs defaultValue="我的形象">
        <TabsList className="flex justify-between items-center w-full h-12 bg-gray-100 cursor-pointer">
          <TabsTrigger
            value="我的形象"
            className="w-1/2 h-[95%] text-xs font-bold cursor-pointer data-[state=active]:bg-white data-[state=active]:text-orange-500 relative"
          >
            我的形象
          </TabsTrigger>
          <TabsTrigger
            value="公共形象"
            className="w-1/2 h-[95%] text-xs font-bold cursor-pointer data-[state=active]:bg-white data-[state=active]:text-orange-500 relative"
          >
            公共形象
          </TabsTrigger>
        </TabsList>
        <TabsContent value="我的形象"></TabsContent>
        <TabsContent value="公共形象">
          <PublicImage />
        </TabsContent>
      </Tabs>
    </div>
  );
}
