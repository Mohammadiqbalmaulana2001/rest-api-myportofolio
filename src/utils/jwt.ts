import jsonwebtoken from "jsonwebtoken";
import userType from "../types/User.type";
import config from "../config/environtment";

const generateAccessToken = (payload: userType): string => {
  return jsonwebtoken.sign(payload, String(config.JWT_SECRET), {
    expiresIn: "1d",
  });
};

const generateRefreshToken = (payload: userType): string => {
  return jsonwebtoken.sign(payload, String(config.JWT_REFRESH_SCREET), {
    expiresIn: "7d",
  });
};

export { generateAccessToken, generateRefreshToken };
