import CryptoJS from "crypto-js";
import { format } from "date-fns";

export const colors = [
  "bg-vivid-purple",
  "bg-primary",
  "bg-teall",
  "bg-success",
  "bg-yellow-400",
];

export function getRandomBgColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export function encrypt(str: string) {
  const encrypted = CryptoJS.AES.encrypt(
    str,
    process.env.NEXT_PUBLIC_ENCRYPTION_SECRET as string
  ).toString();
  return encodeURIComponent(encrypted);
}

export function decrypt(encoded: string) {
  const bytes = CryptoJS.AES.decrypt(
    decodeURIComponent(encoded),
    process.env.NEXT_PUBLIC_ENCRYPTION_SECRET as string
  );
  return bytes.toString(CryptoJS.enc.Utf8);
}

const now = new Date();
export const formatNow = format(now, "EEEE, do MMMM, yyyy");

export function getInitials(name: string): string {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}
