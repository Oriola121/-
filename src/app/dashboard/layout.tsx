"use client";
import { PropsWithChildren } from "react";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { ScrollArea } from "@True-Me-Digital-Man/components/ui/scroll-area";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@True-Me-Digital-Man/components/ui/avatar";
import { PiCaretDown } from "react-icons/pi";
import AppSidebar from "@True-Me-Digital-Man/components/sidebar/app-sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-full bg-white">
      <header className="flex items-center justify-between px-6 py-3 shadow-md">
        <div className="flex items-center space-x-4">
          <img src="uploads/logo.png" className="w-[30px] aspect-square" />
          <h1 className="text-lg font-bold">真我数字人</h1>
        </div>

        <div className="w-[45%] flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-1 flex items-center gap-3 text-white rounded-md font-medium bg-gradient-to-r from-[#ec4899] to-[#e6375d]">
              分销中心
            </button>
            <button className="px-4 py-1 flex items-center gap-3 text-white rounded-md font-medium bg-gradient-to-r from-[#b45309] to-[#7c2d12]">
              优惠套餐
            </button>
            <div className="flex items-center space-x-2 text-xs font-light">
              <HiOutlineCircleStack size={16} />
              <span>Points:</span>
              <span>0</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 ml-6">
            <Avatar className="w-[40px] aspect-square rounded-full border border-gray-300">
              <AvatarImage src="" />
              <AvatarFallback>ao</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">微信用户_17205</span>
            <PiCaretDown size={16} />
          </div>
        </div>
      </header>
      <section className="flex-grow flex">
        <AppSidebar />
        <ScrollArea className="flex-grow ">{children}</ScrollArea>
      </section>
    </div>
  );
}
