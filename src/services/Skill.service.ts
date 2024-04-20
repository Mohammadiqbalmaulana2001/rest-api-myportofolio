import prisma from "../utils/prismaClient";
import skillType from "../types/Skill.trype";

export const semuaSkillService = async () => {
  const skill = await prisma.skill.findMany({
    orderBy: [{ id: "desc" }, { created_at: "desc" }],
    select: {
      id: true,
      nama: true,
      level: true,
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
  return skill;
};

export const getIdSkillService = async (payload: Partial<skillType>) => {
  const id = await prisma.skill.findUnique({
    where: {
      id: payload.id,
    },
    select: {
      id: true,
      nama: true,
      level: true,
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

export const addSkillService = async (payload: skillType) => {
  try {
    const skill = await prisma.skill.create({
      data: {
        nama: payload.nama,
        level: payload.level,
        url: payload.url,
        imageUrl: payload.imageUrl,
        deskripsi: payload.deskripsi,
        userId: payload.userId,
      },
      select: {
        id: true,
        nama: true,
        level: true,
        url: true,
        imageUrl: true,
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
    return skill;
  } catch (error) {
    throw error;
  }
};

export const updateSkillService = async (payload: Partial<skillType>) => {
  try {
    const skill = await prisma.skill.update({
      where: {
        id: payload.id,
      },
      data: {
        nama: payload.nama,
        level: payload.level,
        url: payload.url,
        imageUrl: payload.imageUrl,
        deskripsi: payload.deskripsi,
        userId: payload.userId,
      },
      select: {
        id: true,
        nama: true,
        level: true,
        url: true,
        imageUrl: true,
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
    return skill;
  } catch (error) {
    throw error;
  }
};

export const deleteSkillService = async (payload: Partial<skillType>) => {
  try {
    const skill = await prisma.skill.delete({
      where: {
        id: payload.id,
      },
    });
    return skill;
  } catch (error) {
    throw error;
  }
};
