import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@True-Me-Digital-Man/components/ui/sheet";
import { Button } from "@True-Me-Digital-Man/components/ui/button";
import { X } from "lucide-react";
import { ScrollArea } from "@True-Me-Digital-Man/components/ui/scroll-area";

export default function ReusableSheet({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  // State to track the current level in the sheet (1 or 2)
  const [currentLevel, setCurrentLevel] = useState(1);
  // State to store the uploaded video file
  const [videoFile, setVideoFile] = useState<File | null>(null);
  // State to indicate loading status during video upload
  const [loading, setLoading] = useState(false);
  // State to track the upload progress percentage
  const [progress, setProgress] = useState(0);
  // Maximum allowed file size for upload (500MB in bytes)
  const maxFileSize = 500 * 1024 * 1024;

  // Function to navigate to the next level
  const nextLevel = () => setCurrentLevel(2);
  // Function to navigate back to the previous level
  const previousLevel = () => setCurrentLevel(1);

  // Handler for video file upload
  const handleVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];

      // Check file size; alert if it exceeds the maximum size
      if (file.size > maxFileSize) {
        alert("文件大小超过500MB限制，请选择较小的视频。"); // Alert: File exceeds 500MB limit
        return;
      }

      setVideoFile(file); // Save the uploaded file in state
      setLoading(true); // Start loading process

      // Simulate upload progress with a fake interval
      let progressCount = 0;
      const interval = setInterval(() => {
        progressCount += 10; // Increment progress
        setProgress(progressCount);

        // Stop the interval once upload reaches 100%
        if (progressCount >= 100) {
          clearInterval(interval);
          setLoading(false); // Stop loading
        }
      }, 300); // Update progress every 300ms
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {/* Display title based on current level */}
            {currentLevel === 1 ? "上传视频要求" : "创建您的数字人分身"}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[90vh] pb-10">
          <SheetDescription className="my-4">
            {currentLevel === 1 ? (
              <ul className="bg-[#E4E7EC] p-2 text-sm rounded-md space-y-2">
                {/* Video upload requirements */}
                <li>1、只有一张人脸出境</li>{" "}
                {/* Requirement: Only one face in view */}
                <li>
                  2、人脸不要太小，建议人脸宽度占整体画面宽度的1/3以上
                </li>{" "}
                {/* Ensure face is not too small */}
                <li>
                  3、人脸不要太大，确保整张人脸都在屏幕区域内，人脸不要出屏幕
                </li>{" "}
                {/* Ensure face is fully visible */}
                <li>4、确保面部特征没有被遮挡，并努力让面部清晰可见</li>{" "}
                {/* Face should not be obstructed */}
                <li>5、不要出现1、2、3手势动作</li>{" "}
                {/* Avoid gestures like 1, 2, 3 */}
              </ul>
            ) : (
              <p className="text-sm">
                {/* Description for level 2:
                By uploading the video shot by your mobile phone (supports 1080p, 2K, 4K), you can easily reproduce your own digital avatar in 1 minute. */}
                通过上传您的手机拍摄的视频(支持1080p、2K、4K)，1分钟轻松复刻您的专属数字人分身。
              </p>
            )}
          </SheetDescription>
          <div className="grid gap-4">
            {currentLevel === 1 ? (
              <>
                <h1 className="text-xl font-bold">拍摄不佳实例</h1>
                {/* Example image */}
                <img src="uploads/example-avatar.png" alt="Example Avatar" />
              </>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm">
                    {/* Upload video material*/}上传视频素材
                  </p>
                  {!videoFile ? (
                    // Upload prompt UI
                    <label
                      className="bg rounded-md border border-dashed border-orange-500 px-3 py-4 flex flex-col justify-center items-center h-60 space-y-3 cursor-pointer"
                      htmlFor="video-upload"
                    >
                      <input
                        id="video-upload"
                        type="file"
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                      />
                      <img src="uploads/cloudUpload.png" alt="Upload Icon" />
                      <div className="space-y-1 flex flex-col justify-center items-center">
                        <p className="flex items-center gap-1">
                          <span className="text-orange-500 underline">
                            点击上传
                          </span>{" "}
                          视频文件 {/* Click to upload video file */}
                        </p>
                        <span className="text-sm text-gray-500">
                          支持mp4视频30s以上, 最大500M{" "}
                          {/* Supports MP4, 30s+, max 500MB */}
                        </span>
                      </div>
                    </label>
                  ) : loading ? (
                    // Loading indicator
                    <div className="flex flex-col items-center justify-center h-60 border border-orange-500 rounded-md">
                      <p className="flex items-center gap-1 text-sm">
                        视频上传中<span>{progress}%</span> {/* Uploading: */}
                      </p>
                    </div>
                  ) : (
                    // Video preview with remove option
                    <div className="relative h-60 rounded-md overflow-hidden border border-orange-500">
                      <video
                        src={URL.createObjectURL(videoFile)}
                        controls
                        className="h-full w-full object-cover"
                      />
                      <button
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        onClick={() => setVideoFile(null)}
                        aria-label="Remove Video"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                {/* Other level 2 content */}
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <label htmlFor="name">名称</label> {/* Name */}
                    <input
                      id="name"
                      type="text"
                      placeholder="我的数字人名称" /* Placeholder: My digital name */
                      className="border focus:outline-none rounded-md p-2"
                    />
                  </div>
                  <p>免责声明</p> {/* Disclaimer */}
                  <ul className="text-sm space-y-2 list-disc ml-4">
                    <li>
                      {/* Please confirm that the video you are using has been authorized by the person or team*/}
                      请确认您使用的视频已获取其本人或团队授权
                    </li>
                    <li>
                      {/* You promise that the videos you upload strictly comply with the laws and regulations of China and do not involve pornography, gambling, drugs, or any form of politically sensitive information */}
                      您承诺您上传的视频严格遭守中国的法律法规要求,不涉及黄、赌、毒，及任何形式的政治敏感信息等
                    </li>
                    <li>
                      {/* If you violate the above provisions and commit any illegal acts, all legal responsibilities arising therefrom shall be borne by the user */}
                      如果您违反上述规定，存在任何违法行为，由此产生的所有法律责任由使用者自行承担
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <SheetFooter className="flex justify-between -mt-5">
          {currentLevel === 1 ? (
            <Button
              className="bg-orange-500 text-white text-sm font-light px-14 ml-auto hover:bg-orange-500 cursor-pointer"
              onClick={nextLevel}
              type="button"
            >
              下一步 {/* Next Step */}
            </Button>
          ) : (
            <div className="flex gap-2 ml-auto">
              <SheetClose asChild>
                <Button
                  className="bg-transparent border text-black text-sm font-light px-14 ml-auto hover:bg-transparent shadow-none cursor-pointer"
                  onClick={previousLevel}
                  type="button"
                >
                  取消复刻 {/* Cancel */}
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  className="bg-orange-500 text-white text-sm font-light px-14 ml-auto hover:bg-orange-500 cursor-pointer"
                  type="submit"
                >
                  立即复刻 {/* Replicate Now */}
                </Button>
              </SheetClose>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
