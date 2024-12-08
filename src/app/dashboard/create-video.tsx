import { Separator } from "@True-Me-Digital-Man/components/ui/separator";
import { PiCaretLeft } from "react-icons/pi";
import PickDigitalPeople from "./pick-digital-people";

interface CreateVideoProps {
  onClose: () => void;
}

export default function CreateVideo({ onClose }: CreateVideoProps) {
  return (
    <>
      <div className="flex items-center space-x-60 px-6 my-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={onClose}
        >
          <PiCaretLeft size={24} />
          <h1 className="text-xl font-bold">创建数字人视频</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded-full text-xs text-white">
            1
          </div>
          <p className="text-orange-500 text-lg flex items-center">选择语言</p>

          <div className="w-32 h-2 bg-orange-500 rounded-md"></div>

          <div className="w-8 h-8 bg-gray-500 flex items-center justify-center rounded-full text-xs text-white">
            2
          </div>
          <p className="text-gray-500 text-lg flex items-center">视频生成</p>
        </div>
      </div>
      <Separator />
      <div className="h-screen bg-gray-100 flex">
        <PickDigitalPeople />
      </div>
    </>
  );
}
