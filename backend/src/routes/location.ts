// src/routes/location.ts
import { Router } from "express";

import { reverseLocation, searchLocationDB } from "../utils/geoService";

import type { Request, Response } from "express";

const router = Router();

router.get("/autocomplete", async (req: Request, res: Response) => {
  const { q } = req.query;
  if (!q || typeof q !== "string") {
    return res.status(400).json({ error: "Missing query parameter 'q'" });
  }

  try {
    // const results = await searchLocation(q);
    const results = await searchLocationDB(q);
    res.status(200).json(results);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/reverse", async (req: Request, res: Response) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) {
    return res.status(400).json({ error: "Missing lat/lon parameters" });
  }

  try {
    const result = await reverseLocation(Number(lat), Number(lon));
    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
