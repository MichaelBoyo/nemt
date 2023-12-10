export function camelToSentence(camelCase: string): string {
  if (!camelCase) return camelCase;
  return camelCase
    .replace(/([A-Z])+/g, " $1")
    .replace(/^[a-z]/, (match) => match.toUpperCase());
}
