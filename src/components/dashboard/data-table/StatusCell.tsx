import clsx from "clsx";

const StatusCell = ({ status }: { status: string }) => (
  <div
    className={clsx(
      "capitalize text-center w-full px-4 py-2 rounded-lg",
      status === "active" && "bg-green-100 text-green-700",
      status === "inactive" && "bg-red-100 text-red-700",
      status === "training" && "bg-yellow-100 text-yellow-700"
    )}
  >
    {status}
  </div>
);

export default StatusCell;
