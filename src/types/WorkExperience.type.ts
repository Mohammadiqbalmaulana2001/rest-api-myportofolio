import userType from "./User.type";

export default interface WorkExperienceType {
  id: string;
  perusahaan: string;
  position?: string | null;
  deskripsi?: string | null;
  user: userType;
  userId: number;
  created_at: Date;
  updated_at: Date;
}
