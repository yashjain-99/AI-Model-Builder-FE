import SearchBox from "@/components/SearchBox";
import FilterButton from "@/components/dashboard/FilterButton";
import DatePickerFilter from "@/components/dashboard/DatePickerFilter";
import { Table } from "@tanstack/react-table";

const Filters = ({ table }: { table: Table<ModelInfo> }) => {
  return (
    <div className="flex gap-4 items-center">
      <SearchBox
        className="bg-[#F9FAFB] flex gap-2 w-3/4"
        placeholder="Search by Name,ID"
        value={(table.getColumn("modelName")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("modelName")?.setFilterValue(event.target.value)
        }
      />
      <FilterButton />
      <DatePickerFilter />
    </div>
  );
};

export default Filters;
