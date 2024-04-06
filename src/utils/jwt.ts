import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
import userType from "../types/User.type";
import config from "../config/environtment";
import { logger } from "./logger";

const generateAccessToken = (payload: userType): string => {
  return jsonwebtoken.sign(payload, String(config.JWT_SECRET), {
    expiresIn: "1d",
  });
};

const verikasiAccessToken = (token: string): string | null | JwtPayload => {
  try {
    logger.info("verifikasi access token");
    const decodedToken = jsonwebtoken.verify(token, String(config.JWT_SECRET));
    return decodedToken;
  } catch (error) {
    logger.error("verifikasi access token gagal");
    return null;
  }
};

const generateRefreshToken = (payload: userType): string => {
  return jsonwebtoken.sign(payload, String(config.JWT_REFRESH_SCREET), {
    expiresIn: "7d",
  });
};

const verikasiRefreshToken = (token: string): string | null | JwtPayload => {
  try {
    logger.info("verikasi refresh token");
    return jsonwebtoken.verify(token, String(config.JWT_REFRESH_SCREET));
  } catch (error) {
    logger.error("verikasi refresh token gagal");
    return null;
  }
};

export {
  generateAccessToken,
  verikasiAccessToken,
  generateRefreshToken,
  verikasiRefreshToken,
};
