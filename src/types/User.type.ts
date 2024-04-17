import profileType from "./profile.type";
export default interface userType {
  id?: number;
  user_id: string;
  email: string;
  nama: string;
  password: string;
  role: string;
  profile?: profileType;
}
