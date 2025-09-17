export function generateDepartmentCode(name: string): string {
  if (!name) return "";

  // Trim and split into words
  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    // Single word → first 3 letters
    return words[0]?.substring(0, 3).toUpperCase() as string;
  } else {
    // Multiple words → take first letter of each word
    return words.map((word) => word[0]?.toUpperCase()).join("");
  }
}
