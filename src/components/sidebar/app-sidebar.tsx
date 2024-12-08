"use client";
import { cn } from "@True-Me-Digital-Man/lib/utils";
import { usePathname } from "next/navigation";
import { MdKeyboardVoice } from "react-icons/md";
import { PiHouse, PiVideoCamera } from "react-icons/pi";
import { RiChatVoiceLine } from "react-icons/ri";
const navigationItems = [
  {
    title: "形象克隆",
    icon: <PiHouse size={20} />,
    link: "/dashboard",
  },
  {
    title: "声音克隆",
    icon: <MdKeyboardVoice size={20} />,
    link: "/dashboard/voice-clone",
  },
  {
    title: "声音合成",
    icon: <RiChatVoiceLine size={20} />,
    link: "/dashboard/sound-synthesis",
  },
  {
    title: "数字人作品",
    icon: <PiVideoCamera size={20} />,
    link: "/dashboard/video-works",
  },
  {
    title: "AI助手",
    icon: (
      <img src="uploads/ai.png" style={{ width: "20px", aspectRatio: 1 }} />
    ),
    link: "/dashboard/ai-assistant",
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <div className="bg-[#E4E7EC] flex-shrink-0 h-[89.5vh] w-56 p-6 space-y-4">
      <h1 className="text-2xl font-bold">AI数字人</h1>
      <ul className="space-y-2">
        {navigationItems.map((nav, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center space-x-3 p-4",
              pathname === nav.link
                ? "bg-pink-200 text-orange-500 rounded-md"
                : "hover:bg-gray-200"
            )}
          >
            <div>{nav.icon}</div>
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
