import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";
import config from "../config/environtment";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    errorFormat: "pretty",
  });
if (config.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function checkPrismaConnection() {
  try {
    await prisma.$connect();
    logger.warn("Prisma dan database terhubung");
    await prisma.$disconnect();
  } catch (error) {
    logger.error("Gagal terhubung ke Prisma atau database");
    logger.warn("Prisma dan database terputus");
  }
}
checkPrismaConnection();

export default prisma;
