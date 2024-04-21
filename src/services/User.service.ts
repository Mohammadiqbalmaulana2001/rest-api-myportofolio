import prisma from "../utils/prismaClient";
import userType from "../types/User.type";

export const semuaUserService = async () => {
  const data = await prisma.user.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    include: {
      profile: true,
      project: true,
      skills: true,
      workExperiences: true,
      pendidikan: true,
      sertifikat: true,
    },
  });
  return data;
};

export const registrasiUserService = async (
  paylod: userType
): Promise<userType> => {
  const data = await prisma.user.create({
    data: {
      email: paylod.email,
      nama: paylod.nama,
      password: paylod.password,
      role: paylod.role,
      profile: {
        create: paylod.profile,
      },
    },
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
