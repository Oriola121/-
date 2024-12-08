export default function OnboardingPage() {
  return (
    <div className="h-screen w-full bg-pinkGradient bg-cover m-0 p-0 overflow-hidden flex items-center justify-center">
      <div className="w-[35%] shadow-xl h-full bg-white text-black p-10 space-y-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-4">
            <img src="uploads/logo.png" className="w-[50px] aspect-square" />
            <h1 className="text-4xl font-semibold">
              {/* True Me Digital Man */}
              真我数字人
            </h1>
          </div>
          <p className="text-sm text-gray-500 font-light">
            30秒视频，1分钟轻松复刻专属您的数字人分身
            {/* 30 seconds video, 1 minute easy copy exclusive to your digital doppelganger */}
          </p>
        </div>

        <form className="space-y-12">
          <div className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone" className="text-sm font-bold">
                手机号 {/*Phone number */}
              </label>
              <input
                type="text"
                id="phone"
                placeholder="请输入手机号"
                /*Please enter your phone number */
                className="bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="captcha" className="text-sm font-medium mb-1">
                图形验证码 {/*Graphic verification code*/}
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  id="captcha"
                  placeholder="请输入图形验证码" /*Please enter the code below */
                  className="bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none flex-1"
                />
                {/* Placeholder for captcha image */}
                <img
                  src="/captcha.png"
                  alt="Captcha"
                  className="w-[100px] h-[40px] object-cover rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="verificationCode" className="text-sm font-bold">
                验证码 {/*verification code */}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="verificationCode"
                  placeholder="请输入验证码" /*Please enter the verification code */
                  className=" bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none w-full"
                />
                <button
                  type="button"
                  className="text-sm text-white bg-orange-500 rounded-md px-4 py-1 hover:bg-orange-600 absolute top-1/2 right-3 transform -translate-y-1/2"
                >
                  获取验证码 {/*Get verification code */}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md text-center text-sm font-medium hover:bg-orange-600"
            >
              登录 {/*Login */}
            </button>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="agreement" className="mt-1" />
              <label htmlFor="agreement" className="text-sm text-gray-500">
                {/*Unregistered phone numbers will be automatically registered. Checking this box means you agree to our */}
                未注册的手机号将自动注册，勾选即代表您同意并接受
                <a href="#" className="text-orange-500">
                  {/*"Terms of Service" */}
                  《服务协议》
                </a>
                与
                <a href="#" className="text-orange-500">
                  {/*"Privacy Policy" */}
                  《隐私政策》
                </a>
              </label>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center">
            淮安向上进化文化传媒有限公司 版权所有 苏ICP备2023007175号
          </p>
        </form>
      </div>
    </div>
  );
}
