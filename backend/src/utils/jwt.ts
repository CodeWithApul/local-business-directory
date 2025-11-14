// This will have functions to generate and verify JWT tokens
import jwt from "jsonwebtoken";

const fetchSecrets = () => {
  const jwt_secret = process.env.JWT_SECRET;
  const jwt_refresh_secret = process.env.JWT_REFRESH_SECRET;

  if (!jwt_secret || !jwt_refresh_secret) {
    throw new Error("JWT_SECRET / JWT_REFRESH_SECRET not defined!");
  }
  return { jwt_secret, jwt_refresh_secret };
};

export const generateToken = (userId: string) => {
  const { jwt_secret, jwt_refresh_secret } = fetchSecrets();
  const accessToken = jwt.sign({ userId }, jwt_secret, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign({ userId }, jwt_refresh_secret, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};

export const verifyToken = (token: string) => {
  const { jwt_secret } = fetchSecrets();

  return jwt.verify(token, jwt_secret);
};
export const verifyRefreshToken = (token: string) => {
  const { jwt_refresh_secret } = fetchSecrets();

  return jwt.verify(token, jwt_refresh_secret);
};
