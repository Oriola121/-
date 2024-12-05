"use client";

import { useState } from "react";

export default function Captcha() {
  const [captchaSvg, setCaptchaSvg] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("");

  // Fetch CAPTCHA from the API
  const fetchCaptcha = async () => {
    const res = await fetch("/api/generate-captcha");
    const data = await res.json();
    setCaptchaSvg(data.svg);
    setCaptchaText(data.text); // Save this for validation
    setUserInput("");
    setStatus("");
  };

  // Validate the user's input
  const validateCaptcha = () => {
    if (userInput === captchaText) {
      setStatus("CAPTCHA verified successfully!");
    } else {
      setStatus("CAPTCHA verification failed. Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">CAPTCHA Verification</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-5 rounded"
        onClick={fetchCaptcha}
      >
        Generate CAPTCHA
      </button>

      {captchaSvg && (
        <div className="mt-5">
          <div dangerouslySetInnerHTML={{ __html: captchaSvg }} />
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border rounded px-2 py-1 mt-3"
            placeholder="Enter CAPTCHA"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
            onClick={validateCaptcha}
          >
            Submit
          </button>
        </div>
      )}
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
