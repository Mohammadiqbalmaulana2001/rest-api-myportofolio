import "dotenv/config";

const config = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SCREET: process.env.JWT_REFRESH_SCREET,
  NODE_ENV: process.env.NODE_ENV,
};

export default config;
