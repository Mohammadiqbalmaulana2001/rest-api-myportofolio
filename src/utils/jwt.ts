import jsonwebtoken from "jsonwebtoken";
import userType from "../types/User.type";
import "dotenv/config";

const generateAccessToken = (payload: userType): string => {
  return jsonwebtoken.sign(payload, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
  });
};

const generateRefreshToken = (payload: userType): string => {
  return jsonwebtoken.sign(payload, String(process.env.JWT_SECRET), {
    expiresIn: "7d",
  });
};

export { generateAccessToken, generateRefreshToken };
