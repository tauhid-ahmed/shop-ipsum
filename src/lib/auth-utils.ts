import bcrypt from "bcryptjs";

const SALT = bcrypt.genSaltSync(10);

export const encryptPassword = async (password: string) =>
  bcrypt.hash(password, SALT);

export const decryptPassword = async (
  password: string,
  encryptPassword: string
) => bcrypt.compare(password, encryptPassword);
