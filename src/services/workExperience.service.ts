import prisma from "../utils/prismaClient";
import WorkExperienceType from "../types/WorkExperience.type";

export const semuaWorkExperienceService = async () => {
  const data = await prisma.workExperience.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    select: {
      id: true,
      perusahaan: true,
      position: true,
      deskripsi: true,
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

export const getIdWorkExperienceService = async (
  payload: Partial<WorkExperienceType>
) => {
  const id = await prisma.workExperience.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      perusahaan: true,
      position: true,
      deskripsi: true,
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

export const addWorkExperienceService = async (
  payload: Partial<WorkExperienceType>
) => {
  const data = await prisma.workExperience.create({
    data: {
      perusahaan: payload.perusahaan || "",
      position: payload.position || "",
      deskripsi: payload.deskripsi,
      userId: payload.userId || 0,
    },
    select: {
      id: true,
      perusahaan: true,
      position: true,
      deskripsi: true,
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

export const updateWorkExperienceService = async (
  payload: Partial<WorkExperienceType>
) => {
  const data = await prisma.workExperience.update({
    where: {
      id: payload.id,
    },
    data: {
      perusahaan: payload.perusahaan || "",
      position: payload.position || "",
      deskripsi: payload.deskripsi,
      userId: payload.userId || 0,
    },
    select: {
      id: true,
      perusahaan: true,
      position: true,
      deskripsi: true,
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
    },
  });
  return data;
};

export const deleteWorkExperienceService = async (
  payload: Partial<WorkExperienceType>
) => {
  const data = await prisma.workExperience.delete({
    where: {
      id: payload.id,
    },
  });
  return data;
};
