import userType from "./User.type";

export default interface SertifikatType {
  id?: string;
  title: string;
  penerbit: string;
  deskrispsi?: string | null;
  url?: string | null;
  imageUrl?: string | null;
  userId: number;
  user: userType;
  created_at: Date;
  updated_at: Date;
}
