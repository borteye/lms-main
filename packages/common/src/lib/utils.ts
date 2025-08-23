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
