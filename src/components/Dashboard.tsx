import Title from "@/components/dashboard/Title";
import CreateModalButton from "@/components/dashboard/CreateModalButton";
import DataTable from "./dashboard/DataTable";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F9FF] h-full p-4 overflow-y-auto max-h-[calc(100dvh-6rem)]">
      <div className="bg-white pt-8 px-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Title />
          <CreateModalButton />
        </div>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;
