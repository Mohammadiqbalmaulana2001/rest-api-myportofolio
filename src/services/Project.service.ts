import projectType from "../types/Project.type";
import prisma from "../utils/prismaClient";

export const semuaProjectService = async () => {
  const data = await prisma.project.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    select: {
      id: true,
      title: true,
      deskripsi: true,
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

export const getIdProjectService = async (payload: Partial<projectType>) => {
  const id = await prisma.project.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      title: true,
      deskripsi: true,
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

export const addProjectService = async (payload: projectType) => {
  try {
    const data = await prisma.project.create({
      data: {
        title: payload.title,
        deskripsi: payload.deskripsi,
        url: payload.url,
        imageUrl: payload.imageUrl,
        userId: payload.userId,
      },
      select: {
        id: true,
        title: true,
        deskripsi: true,
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
  } catch (error) {
    throw new Error("Gagal menambahkan project");
  }
};

export const updateProjectService = async (payload: projectType) => {
  const data = await prisma.project.update({
    where: {
      id: payload.id,
    },
    data: {
      title: payload.title,
      deskripsi: payload.deskripsi,
      url: payload.url,
      imageUrl: payload.imageUrl,
      userId: payload.userId,
    },
    select: {
      id: true,
      title: true,
      deskripsi: true,
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

export const deleteProjectService = async (payload: Partial<projectType>) => {
  const id = await prisma.project.findUnique({
    where: {
      id: payload.id,
    },
  });
  if (!id) {
    throw new Error("id project tidak ditemukan");
  }
  const data = await prisma.project.delete({
    where: {
      id: payload.id,
    },
  });
  return data;
};
