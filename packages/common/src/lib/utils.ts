import CryptoJS from "crypto-js";
import { format, parseISO } from "date-fns";

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

export function formatPrettyDate(dateString: string): string {
  if (!dateString) return "";
  const date = parseISO(dateString);
  return format(date, "MMM dd, yyyy");
}

export function formatYear(dateString: string): string {
  if (!dateString) return "";
  const date = parseISO(dateString);
  return format(date, "yyyy");
}

export type CardColor = {
  bg: string;
  icon_bg: string;
};

// pool of matching color pairs
export const cardColorPairs: CardColor[] = [
  { bg: "bg-vivid-purple/80", icon_bg: "bg-yellow-400" },
  { bg: "bg-primary/80", icon_bg: "bg-success" },
  { bg: "bg-yellow-200", icon_bg: "bg-teall" },
  { bg: "bg-success/80", icon_bg: "bg-vivid-purple" },
  { bg: "bg-teall/80", icon_bg: "bg-primary" },
];

// function to get a random pair
export const getRandomCardColor = (): CardColor => {
  const randomIndex = Math.floor(Math.random() * cardColorPairs.length);
  return cardColorPairs[randomIndex]!;
};
