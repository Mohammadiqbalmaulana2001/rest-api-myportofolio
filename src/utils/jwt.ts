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
    const decodedToken = jsonwebtoken.verify(token, String(config.JWT_SECRET));
    return decodedToken as JwtPayload;
  } catch (error) {
    if (error instanceof jsonwebtoken.TokenExpiredError) {
      logger.error("Token Ini Sudah Kadaluarsa");
    } else {
      logger.error("error verikasi access token");
    }
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
    return jsonwebtoken.verify(token, String(config.JWT_REFRESH_SCREET));
  } catch (error) {
    if (error instanceof jsonwebtoken.TokenExpiredError) {
      logger.error("Token Ini Sudah Kadaluarsa");
    } else {
      logger.error("error verikasi access token");
    }
    return null;
  }
};

export {
  generateAccessToken,
  verikasiAccessToken,
  generateRefreshToken,
  verikasiRefreshToken,
};
