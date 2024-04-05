import bcrypt from "bcrypt";

export const enkripsi = (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return Promise.resolve(hash);
};
