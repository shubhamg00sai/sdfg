export function formatRange(start, end) {
  if (!end) return start;
  return `${start} - ${end}`;
}
