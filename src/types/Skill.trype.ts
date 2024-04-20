import userType from "./User.type";

export default interface skillType {
  id: string;
  nama: string;
  level?: string | null;
  url?: string | null;
  imageUrl?: string | null;
  user: userType;
  userId: number;
  deskripsi: string;
  created_at: Date;
  updated_at: Date;
}
