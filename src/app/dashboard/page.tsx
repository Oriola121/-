"use client";

import { Separator } from "@True-Me-Digital-Man/components/ui/separator";
import { PiPlusBold } from "react-icons/pi";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@True-Me-Digital-Man/components/ui/tabs";
import ImageClone from "./image-clone";
import ReusableSheet from "./reusable-sheet";
import { useState } from "react";
import CreateVideo from "./create-video";
import { ScrollArea } from "@True-Me-Digital-Man/components/ui/scroll-area";

export default function Page() {
  const [letsCreateVideo, setLetsCreateVideo] = useState(false);
  const handleCreateVideo = () => {
    setLetsCreateVideo(!letsCreateVideo);
  };
  return (
    <>
      <div className="flex items-center justify-between px-8 my-4">
        <h1 className="text-xl font-bold">形象克隆</h1>
        <button
          className="bg-orange-500 px-4 py-3 rounded-lg flex items-center gap-3 text-white text-sm"
          onClick={handleCreateVideo}
        >
          <PiPlusBold color="white" />
          创建视频
        </button>
      </div>

      <Separator />

      <div className="px-8 py-5 space-y-5">
        <ReusableSheet
          trigger={
            <img
              src="uploads/vr.png"
              alt="VR Image"
              className="cursor-pointer"
            />
          }
        />
        <Tabs defaultValue="我的形象">
          <TabsList className="flex justify-start items-center w-full bg-transparent cursor-pointer">
            <div className="w-1/2 flex gap-4">
              <TabsTrigger
                value="我的形象"
                className="text-xs font-bold cursor-pointer border-b-2 border-transparent data-[state=active]:border-orange-500 relative"
              >
                我的形象
              </TabsTrigger>
              <TabsTrigger
                value="公共形象"
                className="text-xs font-bold cursor-pointer border-b-2 border-transparent data-[state=active]:border-orange-500 relative"
              >
                公共形象
              </TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="我的形象">
            <ImageClone />
          </TabsContent>
          <TabsContent value="公共形象"></TabsContent>
        </Tabs>
      </div>
      {letsCreateVideo && (
        <div
          className="fixed inset-0 bg-white z-10 h-[90vh] top-[10.5%]"
          onClick={(e) => e.stopPropagation()} // Prevents overlay click when clicking inside the modal
        >
          <ScrollArea className="h-full w-full">
            <CreateVideo onClose={handleCreateVideo} />
          </ScrollArea>
        </div>
      )}
    </>
  );
}
