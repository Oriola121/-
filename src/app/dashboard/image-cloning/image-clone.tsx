import React from "react";
import { PiPlusBold } from "react-icons/pi";
import ReusableSheet from "./reusable-sheet";

export default function ImageClone() {
  return (
    <ReusableSheet
      trigger={
        <div className="w-[24%] aspect-square bg-pink-100 rounded-lg flex flex-col items-center justify-center space-y-4 cursor-pointer">
          <div className="p-2 bg-orange-500 flex items-center justify-center rounded-full text-white">
            <PiPlusBold />
          </div>
          <p className="text-sm">复刻形象克隆</p>
        </div>
      }
    />
  );
}
