import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CreateModalButton = () => {
  return (
    <Button className=" bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 text-sm leading-5 font-semibold text-white">
      <Plus /> Create New Model
    </Button>
  );
};

export default CreateModalButton;
