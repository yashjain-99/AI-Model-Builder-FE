import Title from "@/components/dashboard/Title";
import CreateModalButton from "@/components/dashboard/CreateModalButton";
import SearchBox from "@/components/SearchBox";
import FilterButton from "@/components/dashboard/FilterButton";
import DatePickerFilter from "@/components/dashboard/DatePickerFilter";
import DataTable from "./dashboard/DataTable";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F9FF] h-full p-4 overflow-y-auto max-h-[calc(100dvh-6rem)]">
      <div className="bg-white pt-8 px-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Title />
          <CreateModalButton />
        </div>
        <div className="flex gap-4 items-center">
          <SearchBox
            className="bg-[#F9FAFB] flex gap-2 w-3/4"
            placeholder="Search by Name,ID"
          />
          <FilterButton />
          <DatePickerFilter />
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
