export function getColor(type: number) {
  return type == 0
    ? "bg-websites"
    : type == 1
    ? "bg-designs"
    : type == 2
    ? "bg-ads"
    : "bg-red";
}
export function getName(type: number) {
  return type == 0
    ? "ვებგვერდი"
    : type == 1
    ? "დიზაინი"
    : type == 2
    ? "რეკლამა"
    : "NULL";
}
