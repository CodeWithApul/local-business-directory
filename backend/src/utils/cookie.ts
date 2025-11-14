import type { Response } from "express";

const COOKIE_NAME = "refreshToken";

export const setSecureCookie = (res: Response, token: string) => {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    // secure: true, // Uncomment this line when using HTTPS
    sameSite: "lax", // Adjust sameSite as needed
    path: "/", // optional: restrict to refresh endpoint
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export const clearSecureCookie = (res: Response) => {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    // secure: true, // Uncomment this line when using HTTPS
    sameSite: "lax", // Adjust sameSite as needed
    path: "/", // must match path used in setSecureCookie
  });
};
