import { ColumnDef } from "@tanstack/react-table";
import StatusCell from "@/components/dashboard/data-table/StatusCell";
import SortingButton from "@/components/dashboard/data-table/SortingButton";
import ActionCell from "@/components/dashboard/data-table/ActionCell";
import { DateSortingFn } from "@/lib/utils";

const columns: ColumnDef<ModelInfo>[] = [
  {
    accessorKey: "modelName",
    header: ({ column }) => (
      <SortingButton column={column} label="Model Name" />
    ),
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-semibold">{row.getValue("modelName")}</span>
        <span className="font-light text-slate-400">ID: {row.original.id}</span>
      </div>
    ),
  },
  {
    accessorKey: "modelType",
    header: ({ column }) => (
      <SortingButton column={column} label="Model Type" />
    ),
    cell: ({ row }) => <div>{row.getValue("modelType")}</div>,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <SortingButton column={column} label="Description" />
    ),
    cell: ({ row }) => {
      const description: string = row.getValue("description");
      const maxLength = 20;
      return (
        <div className="truncate">
          {description.length > maxLength
            ? `${description.substring(0, maxLength)}...`
            : description}
        </div>
      );
    },
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => (
      <SortingButton
        column={column}
        label="Created On"
        className=" justify-center"
      />
    ),
    sortingFn: DateSortingFn,
    cell: ({ row }) => (
      <div className="text-center w-full">{row.getValue("createdOn")}</div>
    ),
  },
  {
    accessorKey: "lastTrainedOn",
    header: ({ column }) => (
      <SortingButton
        column={column}
        label="Last Trained On"
        className=" justify-center"
      />
    ),
    sortingFn: DateSortingFn,
    cell: ({ row }) => (
      <div className="w-full text-center">{row.getValue("lastTrainedOn")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortingButton
        column={column}
        label="Status"
        className=" justify-center"
      />
    ),
    cell: ({ row }) => <StatusCell status={row.getValue("status")} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ActionCell row={row} />,
  },
];
export default columns;
