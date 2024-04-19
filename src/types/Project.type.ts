import userType from "./User.type";

export default interface projectType {
  id: string;
  title: string;
  deskripsi: string;
  url?: string | null;
  imageUrl?: string | null;
  user: userType;
  userId: number;
  created_at: Date;
  updated_at: Date;
}
