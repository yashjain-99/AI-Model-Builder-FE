import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

const FilterButton = () => {
  return (
    <Button className="bg-[#F9FAFB] text-[#767676] h-full hover:bg-[#E2E8F0] hover:text-[#1F2937] transition-colors duration-200">
      <Settings2 /> Filters
    </Button>
  );
};

export default FilterButton;
