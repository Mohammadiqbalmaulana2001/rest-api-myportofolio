import prisma from "../utils/prismaClient";
import profileType from "../types/profile.type";
import { logger } from "../utils/logger";

export const semuaProfileService = async () => {
  const data = await prisma.profile.findMany({
    include: { user: true },
  });
  return data;
};

export const getIdProfileService = async (payload: Partial<profileType>) => {
  const id = await prisma.profile.findUnique({
    where: {
      id: payload.id,
    },
    include: { user: true },
  });
  return id;
};

export const addProfileService = async (payload: profileType) => {
  const data = await prisma.profile.create({
    data: {
      userId: payload.userId,
      fullName: payload.fullName,
      bio: payload.bio,
      avatar: payload.avatar,
    },
    include: {
      user: { include: { profile: true } },
    },
  });

  return data;
};

export const userIdProfileService = async (payload: number) => {
  const data = await prisma.profile.findUnique({
    where: {
      userId: payload,
    },
  });

  return !data;
};

export const updateProfileService = async (payload: profileType) => {
  const data = await prisma.profile.update({
    where: {
      id: payload.id,
    },
    data: {
      userId: payload.userId,
      fullName: payload.fullName,
      bio: payload.bio,
      avatar: payload.avatar,
    },
    include: {
      user: { include: { profile: true } },
    },
  });
  return data;
};

export const deleteProfileService = async (payload: Partial<profileType>) => {
  const id = await prisma.profile.findUnique({
    where: {
      id: payload.id,
    },
  });

  if (!id) {
    throw new Error("id profile tidak ditemukan");
  }
  const data = await prisma.profile.delete({
    where: {
      id: payload.id,
    },
  });
  return data;
};

export const IdProfileDeleteService = async (payload: Partial<profileType>) => {
  const id = await prisma.profile.findUnique({
    where: {
      id: payload.id,
    },
  });

  return id;
};
