import prisma from "../utils/prismaClient";
import profileType from "../types/profile.type";

export const semuaProfileService = async () => {
  const data = await prisma.profile.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    select: {
      id: true,
      fullName: true,
      bio: true,
      avatar: true,
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

export const getIdProfileService = async (payload: Partial<profileType>) => {
  const id = await prisma.profile.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      fullName: true,
      bio: true,
      avatar: true,
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

export const addProfileService = async (payload: profileType) => {
  const data = await prisma.profile.create({
    data: {
      userId: payload.userId,
      fullName: payload.fullName,
      bio: payload.bio,
      avatar: payload.avatar,
    },
    select: {
      id: true,
      fullName: true,
      bio: true,
      avatar: true,
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
    select: {
      id: true,
      fullName: true,
      bio: true,
      avatar: true,
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
