import type { Request } from "express";
import crypto from "crypto";
import dotenv from "dotenv";
import ImageKit from "imagekit";
import path from "path";

dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT || "", //"https://ik.imagekit.io/your_imagekit_id",
});

export const generateAbsoluteMediaURL = (req: Request, filename: string) =>
  `${req.protocol}://${req.get("host")}/uploads/${filename}`;

export const uploadFileToImageKit = async (
  fileBuffer: Buffer,
  originalname: string
) => {
  // const fileBuffer = logoFile.buffer; // Multer gives you the file buffer
  const randomStr = crypto.randomBytes(8).toString("hex");
  const ext = path.extname(originalname);
  const newFilename = `${randomStr}${ext}`;

  const response = await imagekit.upload({
    file: fileBuffer, // can also be base64 or URL
    fileName: newFilename,
  });

  return response.url;
};
