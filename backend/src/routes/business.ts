import crypto from "crypto";
import { Router } from "express";
import multer from "multer";
import path from "path";

import { PrismaClient } from "../generated/prisma/client";
import { authMiddleware } from "../middleware/auth.middleware";
import { validateSchema } from "../middleware/validateSchema.middleware";
import { BusinessFormSchema } from "../schema/business";

import type { AuthenticatedRequest } from "../types/auth";
import type { Response } from "express";
const router = Router();
const prisma = new PrismaClient();

router.get(["/", "/list"], async (req, res) => {
  try {
    const businesses = await prisma.business.findMany({
      where: { status: "active" },
      include: {
        category: true,
        address: true,
        medias: true,
      },
    });
    res.json(businesses);
  } catch (error) {
    console.error("Error fetching businesses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp/uploads");
  },
  filename: function (req, file, cb) {
    //cb(null, "temp-" + Date.now() + path.extname(file.originalname));
    const randomStr = crypto.randomBytes(12).toString("hex");
    const ext = path.extname(file.originalname);
    const newFilename = `${randomStr}${ext}`;
    const newPath = path.join("uploads", newFilename);
    cb(null, newFilename);
  },
});

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG and PNG files are allowed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1 MB
});

router.post(
  "/create",
  validateSchema(BusinessFormSchema),
  upload.single("logo"),
  async (req, res) => {
    try {
      console.dir(req.body, { depth: null, color: true });
      const {
        businessName,
        description,
        category,
        street,
        city,
        state,
        country,
        postalCode,
        phoneNumber,
        email,
        ownerName,
      } = req.body;

      if (!req.file) {
        return res
          .status(400)
          .json({ error: "No file uploaded or invalid file type." });
      }
      /*
      // const randomStr = crypto.randomBytes(8).toString("hex");
      // const ext = path.extname(req.file.originalname);
      // const newFilename = `${randomStr}${ext}`;
      // const newPath = path.join("uploads", newFilename);
      // fs.renameSync(req.file.path, newPath);
    */
      // upload logo and get URL (skipped for brevity)
      // create owner if not exists (skipped for brevity)
      // check email uniqueness (skipped for brevity)

      const business = await prisma.business.create({
        data: {
          name: businessName,
          description,
          category: { connect: { id: parseInt(category) } },
          address: {
            create: {
              street,
              city: city || "",
              state: state || "",
              postalCode: postalCode || "",
              country: country || "",
            },
          },
          phoneNumber,
          email,
          logoUrl: req.file.path, // In real app, use uploaded URL
          owner: {
            connectOrCreate: {
              where: { email, phoneNumber }, // Check if the owner exists by email and mobile number
              create: {
                username: ownerName,
                email,
                phoneNumber,
                password: "defaultPassword", // Generate a secure password in a real app
              },
            },
          },
          status: "active",
        },
      });
      res.status(201).json({ userId: business.ownerId });
    } catch (error) {
      console.error("Error creating business:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.post(
  "/update",
  authMiddleware,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "media", maxCount: 10 },
  ]),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const {
        businessId, // Assuming you pass the business ID to update
        businessName,
        description,
        category,
        street,
        city,
        state,
        country,
        postalCode,
        phoneNumber,
        email,
        ownerName,
      } = req.body;

      // Extract files from the request
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const logoFile = files?.logo?.[0]; // Single logo file
      const mediaFiles = files?.media || []; // Array of media files

      // Validate the business ID
      if (!businessId) {
        return res.status(400).json({ error: "Business ID is required" });
      }

      // Update the business
      const updatedBusiness = await prisma.business.update({
        where: { id: parseInt(businessId) },
        data: {
          name: businessName,
          description,
          category: { connect: { id: parseInt(category) } },
          address: {
            update: {
              street,
              city: city || "",
              state: state || "",
              postalCode: postalCode || "",
              country: country || "",
            },
          },
          phoneNumber,
          email,
          logoUrl: logoFile ? logoFile.path : undefined, // Update logo if provided
          owner: {
            connectOrCreate: {
              where: { email, phoneNumber },
              create: {
                username: ownerName,
                email,
                phoneNumber,
                password: "defaultPassword", // Generate a secure password in a real app
              },
            },
          },
          status: "active",
        },
      });

      // Handle media files
      if (mediaFiles.length > 0) {
        const mediaData = mediaFiles.map((file) => ({
          url: file.path,
          type: file.mimetype.startsWith("image/") ? "image" : "video",
          businessId: updatedBusiness.id,
        }));

        // Save media files to the database
        await prisma.businessMedia.createMany({
          data: mediaData,
        });
      }

      res.status(200).json(updatedBusiness);
    } catch (error) {
      console.error("Error updating business:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

export default router;
