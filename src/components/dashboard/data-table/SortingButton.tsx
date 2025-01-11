import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

const SortingButton = ({
  column,
  label,
  className,
}: {
  column: Column<ModelInfo, unknown>;
  label: string;
  className?: string;
}) => (
  <Button
    variant="ghost"
    className={`w-full justify-start p-0 hover:bg-inherit ${className}`}
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  >
    {label}
    <ArrowUpDown className="text-slate-400" />
  </Button>
);

export default SortingButton;
