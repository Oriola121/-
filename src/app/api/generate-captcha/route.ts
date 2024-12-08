import { NextApiRequest, NextApiResponse } from "next";
import svgCaptcha from "svg-captcha";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const captcha = svgCaptcha.create({
      size: 6, // Number of characters
      noise: 3, // Amount of noise in the image
      color: true, // Colorful CAPTCHA
    });

    res.status(200).json({
      svg: captcha.data, // SVG data for the CAPTCHA
      text: captcha.text, // The CAPTCHA text (store for validation)
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
