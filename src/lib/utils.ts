import type { Row } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DateSortingFn = (rowA: Row<ModelInfo>, rowB: Row<ModelInfo>) => {
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day).getTime();
  };
  return (
    parseDate(rowA.getValue("createdOn")) -
    parseDate(rowB.getValue("createdOn"))
  );
};
