import userType from "./User.type";

export default interface PendidikanType {
  id: string;
  perguruan: string;
  tingkat: string;
  bidang: string;
  user: userType;
  userId: number;
  created_at: Date;
  updated_at: Date;
}
