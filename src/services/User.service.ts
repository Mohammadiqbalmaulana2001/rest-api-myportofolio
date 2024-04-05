import prisma from "../utils/prismaClient";
import userType from "../types/User.type";

export const semuaUserService = async (): Promise<userType[] | null> => {
  const data = await prisma.user.findMany();
  return data;
};

export const registrasiUserService = async (
  paylod: userType
): Promise<userType> => {
  const data = await prisma.user.create({
    data: paylod,
  });

  return data;
};

export const loginUserService = async (
  payload: userType
): Promise<userType | null> => {
  const data = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  return data;
};
