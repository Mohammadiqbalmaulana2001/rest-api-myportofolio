import userType from "./User.type";

export default interface profileType {
  id?: string;
  user: userType;
  userId: number;
  fullName: string;
  bio?: string;
  avatar: string;
  created_at?: Date;
  updated_at?: Date;
}
