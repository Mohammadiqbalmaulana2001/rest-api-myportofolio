import PendidikanType from "../types/Pendidikan.type";
import prisma from "../utils/prismaClient";

export const semuaPendidikanService = async () => {
  return await prisma.pendidikan.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    select: {
      id: true,
      perguruan: true,
      tingkat: true,
      bidang: true,
      userId: true,
      user: {
        select: {
          id: true,
          user_id: true,
          email: true,
          nama: true,
          created_at: true,
          updated_at: true,
        },
      },
      created_at: true,
      updated_at: true,
    },
  });
};

export const getIdPendidikanService = async (
  payload: Partial<PendidikanType>
) => {
  return await prisma.pendidikan.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      perguruan: true,
      tingkat: true,
      bidang: true,
      userId: true,
      user: {
        select: {
          id: true,
          user_id: true,
          email: true,
          nama: true,
          created_at: true,
          updated_at: true,
        },
      },
      created_at: true,
      updated_at: true,
    },
  });
};

export const addPendidikanService = async (payload: PendidikanType) => {
  return await prisma.pendidikan.create({
    data: {
      perguruan: payload.perguruan,
      tingkat: payload.tingkat,
      bidang: payload.bidang,
      userId: payload.userId,
    },
    select: {
      id: true,
      perguruan: true,
      tingkat: true,
      bidang: true,
      userId: true,
      user: {
        select: {
          id: true,
          user_id: true,
          email: true,
          nama: true,
          created_at: true,
          updated_at: true,
        },
      },
      created_at: true,
      updated_at: true,
    },
  });
};

export const updatePendidikanService = async (
  payload: Partial<PendidikanType>
) => {
  return await prisma.pendidikan.update({
    where: {
      id: payload.id,
    },
    data: {
      perguruan: payload.perguruan,
      tingkat: payload.tingkat,
      bidang: payload.bidang,
      userId: payload.userId,
    },
    select: {
      id: true,
      perguruan: true,
      tingkat: true,
      bidang: true,
      userId: true,
      user: {
        select: {
          id: true,
          user_id: true,
          email: true,
          nama: true,
          created_at: true,
          updated_at: true,
        },
      },
      created_at: true,
      updated_at: true,
    },
  });
};

export const deletePendidikanService = async (
  payload: Partial<PendidikanType>
) => {
  return await prisma.pendidikan.delete({
    where: {
      id: payload.id,
    },
  });
};
