import { t } from "i18next";

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
    ? t("website")
    : type == 1
    ? t("design")
    : type == 2
    ? t("ad")
    : "NULL";
}
