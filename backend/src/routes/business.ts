import crypto from "crypto";
import { Router } from "express";
import multer from "multer";
import path from "path";

import { PrismaClient } from "../generated/prisma/client";
import { authMiddleware } from "../middleware/auth";
import { validateSchema } from "../middleware/validateSchema";
import { BusinessBookingSchema, BusinessFormSchema } from "../schema/business";
import { getBoundingBox, isWithinRadius } from "../utils/geoService";

import type { BusinessForm } from "../schema/business";
import type { AuthenticatedRequest } from "../types/auth";
import type { Request, Response } from "express";
const router = Router();
const prisma = new PrismaClient();

router.get(["/", "/list"], async (_req: Request, res: Response) => {
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
  destination: function (_req: Request, _file: Express.Multer.File, cb) {
    cb(null, "./public/tmp/uploads");
  },
  filename: function (_req: Request, file: Express.Multer.File, cb) {
    //cb(null, "temp-" + Date.now() + path.extname(file.originalname));
    const randomStr = crypto.randomBytes(12).toString("hex");
    const ext = path.extname(file.originalname);
    const newFilename = `${randomStr}${ext}`;
    const newPath = path.join("uploads", newFilename);
    cb(null, newFilename);
  },
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
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
  upload.single("logo"),
  validateSchema(BusinessFormSchema),
  async (req: Request, res: Response) => {
    try {
      const business: BusinessForm = req.body;

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

      const newBusiness = await prisma.business.create({
        data: {
          name: business.businessName,
          description: business.description,
          category: { connect: { id: business.category } },
          address: {
            create: {
              street: business.street,
              city: business.city,
              state: business.state || "",
              postalCode: business.postalCode || "",
              country: business.country || "",
            },
          },
          phoneNumber: business.phoneNumber,
          email: business.email ?? "",
          logoUrl: req.file.path.split("/").slice(1, 3).join(), // In real app, use uploaded URL
          owner: {
            connectOrCreate: {
              where: {
                email: business.email,
                phoneNumber: business.phoneNumber,
              }, // Check if the owner exists by email and mobile number
              create: {
                username: business.ownerName,
                email: business.email ?? "",
                phoneNumber: business.phoneNumber,
                password: "defaultPassword", // Generate a secure password in a real app
              },
            },
          },
          status: "active",
        },
      });
      res.status(201).json({ userId: newBusiness.ownerId });
    } catch (error) {
      console.error("Error creating business:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

router.get(
  "/get-details",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response, next) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(400).json({ error: "USER ID is required" });
      }

      const businessDetails = await prisma.business.findFirst({
        where: {
          ownerId: parseInt(userId),
          owner: { status: "verified" },
        },
        select: {
          name: true,
          id: true,
          category: {
            select: {
              id: true,
            },
          },
          owner: {
            select: {
              username: true,
            },
          },
          email: true,
          phoneNumber: true,
          address: {
            select: {
              street: true,
              city: true,
              state: true,
              country: true,
              postalCode: true,
            },
          },
          description: true,
          logoUrl: true,
          medias: { select: { url: true } },
        },
      });

      console.dir(businessDetails, { depth: null, color: true });

      if (!businessDetails) {
        return res
          .status(400)
          .json({ error: "Buisness with the provided user id not found." });
      }

      const reqData = {
        businessId: businessDetails.id,
        businessName: businessDetails.name,
        category: businessDetails.category.id,
        ownerName: businessDetails.owner.username,
        email: businessDetails.email,
        ...businessDetails.address,
        description: businessDetails.description,
        phoneNumber: businessDetails.phoneNumber,
        logo: `${req.protocol}://${req.get("host")}/${businessDetails.logoUrl?.replace("public", "")}`,
      };
      return res.status(200).json(reqData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

router.post(
  "/update",
  authMiddleware,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "media", maxCount: 10 },
  ]),
  validateSchema(BusinessFormSchema),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const business = req.body;
      console.dir(business, { depth: null, color: true });
      // Extract files from the request
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const logoFile = files?.logo?.[0]; // Single logo file
      const mediaFiles = files?.media || []; // Array of media files

      // Validate the business ID
      if (!business.businessId) {
        return res.status(400).json({ error: "Business ID is required" });
      }

      // Update the business
      const updatedBusiness = await prisma.business.update({
        where: { id: business.businessId, ownerId: req.user?.id },
        data: {
          name: business.businessName,
          description: business.description,
          category: { connect: { id: business.category } },
          address: {
            update: {
              street: business.street,
              city: business.city,
              state: business.state,
              postalCode: business.postalCode,
              country: business.country,
            },
          },
          phoneNumber: business.phoneNumber,
          email: business.email,
          logoUrl: logoFile ? logoFile.path : undefined, // Update logo if provided
          owner: {
            update: {
              username: business.ownerName,
              email: business.email ?? "",
              phoneNumber: business.phoneNumber,
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
  },
);

router.post(
  "/bookings",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(400).json({ error: "Login Again!" });
      }
      const bookings = await prisma.businessBooking.findMany({
        where: {
          business: {
            ownerId: parseInt(userId),
          },
        },
        orderBy: { bookingEndTime: "desc" },
      });
      return res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

router.post(
  "/booking-by-id",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user?.userId;
      const booking = await prisma.businessBooking.findFirst({
        where: {
          id: parseInt(req.body.id),
          business: {
            ownerId: parseInt(userId),
          },
        },
      });
      return res.status(200).json(booking);
    } catch (error) {
      console.error("Error fetching booking with ID:" + req.body.id, error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

router.delete(
  "/delete-booking",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(400).json({ error: "Login Again!" });
      }
      const bookings = await prisma.businessBooking.delete({
        where: {
          id: parseInt(req.body.id),
          business: {
            ownerId: parseInt(userId),
          },
        },
      });
      return res.json(bookings);
    } catch (error) {
      console.error("Error deleting booking:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

router.post(
  "/create-booking",
  authMiddleware,
  validateSchema(BusinessBookingSchema),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(400).json({ error: "Login Again!" });
      }
      // Fetch the businessId associated with the userId
      const business = await prisma.business.findFirst({
        where: { ownerId: parseInt(userId) },
      });

      if (!business) {
        return res
          .status(404)
          .json({ error: "No business found for this user" });
      }
      const { bookingStartTime, bookingEndTime, description } = req.body;

      const businessBooking = await prisma.businessBooking.create({
        data: {
          businessId: business.id,
          bookingStartTime: new Date(bookingStartTime),
          bookingEndTime: new Date(bookingEndTime),
          description,
          status: "booked",
        },
      });
      res.status(201).json(businessBooking);
    } catch (error) {
      console.error("Error creating business booking:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);
router.post(
  "/update-booking",
  authMiddleware,
  validateSchema(BusinessBookingSchema),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(400).json({ error: "Login Again!" });
      }

      const { id, bookingStartTime, bookingEndTime, description } = req.body;

      const updatedBooking = await prisma.businessBooking.update({
        where: { id },
        data: {
          bookingStartTime: new Date(bookingStartTime),
          bookingEndTime: new Date(bookingEndTime),
          description,
        },
      });

      res.status(200).json(updatedBooking);
    } catch (error) {
      console.error("Error updating business booking:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
);

router.post("/search", async (req: Request, res: Response) => {
  try {
    const { latitude, longitude, radiusKm, categoryId, keyword } = req.body;
    if (
      latitude === undefined ||
      longitude === undefined ||
      radiusKm === undefined
    ) {
      return res
        .status(400)
        .json({ error: "latitude, longitude, and radiusKm are required" });
    }
    const bbox = getBoundingBox(latitude, longitude, radiusKm);

    const where: any = {
      status: "active",
      address: {
        lat: {
          gte: bbox.minLat,
          lte: bbox.maxLat,
        },
        lon: {
          gte: bbox.minLon,
          lte: bbox.maxLon,
        },
      },
    };
    // Only add categoryId if provided
    if (categoryId !== undefined && categoryId !== "") {
      where.categoryId = parseInt(categoryId);
    }
    // Only add keyword if provided
    if (keyword !== undefined && keyword !== "") {
      where.name = { contains: keyword, mode: "insensitive" };
      where.description = { contains: keyword, mode: "insensitive" };
      where.category = { name: { contains: keyword, mode: "insensitive" } };
    }
    const businesses = await prisma.business.findMany({
      where,
      include: {
        category: true,
        address: true,
      },
    });

    // Filter businesses within the radius (more precise, if performance allows)
    const filteredBusinesses = businesses.filter((business) => {
      const addr = business.address;
      return isWithinRadius(
        latitude,
        longitude,
        addr.lat!,
        addr.lon!,
        radiusKm,
      );
    });
    res.status(200).json(filteredBusinesses);
  } catch (error) {
    console.error("Error searching businesses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
