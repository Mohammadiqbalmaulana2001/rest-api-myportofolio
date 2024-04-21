import prisma from "../utils/prismaClient";
import SertifikatType from "../types/Sertifikat.type";

export const semuaSertifikatService = async () => {
  const sertifikat = await prisma.sertifikat.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    select: {
      id: true,
      title: true,
      penerbit: true,
      deskrispsi: true,
      url: true,
      imageUrl: true,
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
  return sertifikat;
};

export const getByIdSertifikatService = async (
  payload: Partial<SertifikatType>
) => {
  const id = await prisma.sertifikat.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      title: true,
      penerbit: true,
      deskrispsi: true,
      url: true,
      imageUrl: true,
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
  return id;
};

export const addSertifikatService = async (payload: SertifikatType) => {
  const data = await prisma.sertifikat.create({
    data: {
      title: payload.title,
      penerbit: payload.penerbit,
      deskrispsi: payload.deskrispsi,
      url: payload.url,
      imageUrl: payload.imageUrl,
      userId: payload.userId,
    },
    select: {
      id: true,
      title: true,
      penerbit: true,
      deskrispsi: true,
      url: true,
      imageUrl: true,
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
  return data;
};

export const updateSertifikatService = async (payload: SertifikatType) => {
  const data = await prisma.sertifikat.update({
    where: {
      id: payload.id,
    },
    data: {
      title: payload.title,
      penerbit: payload.penerbit,
      deskrispsi: payload.deskrispsi,
      url: payload.url,
      imageUrl: payload.imageUrl,
      userId: payload.userId,
    },
    select: {
      id: true,
      title: true,
      penerbit: true,
      deskrispsi: true,
      url: true,
      imageUrl: true,
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
  return data;
};

export const deleteSertifikatService = async (
  payload: Partial<SertifikatType>
) => {
  const data = await prisma.sertifikat.delete({
    where: {
      id: payload.id,
    },
  });
  return data;
};
