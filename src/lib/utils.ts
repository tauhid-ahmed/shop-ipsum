import bcrypt from "bcryptjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SALT = bcrypt.genSaltSync(10);

export const encryptPassword = async (password: string) =>
  bcrypt.hash(password, SALT);

export const decryptPassword = async (
  password: string,
  encryptPassword: string
) => bcrypt.compare(password, encryptPassword);
