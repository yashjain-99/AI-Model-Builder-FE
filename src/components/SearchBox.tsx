import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { HTMLProps } from "react";

const SearchBox = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className: HTMLProps<HTMLElement>["className"];
}) => {
  return (
    <div className={`relative h-fit ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-6 w-6" />
      <Input
        className="text-base py-3 h-11 pl-10 pr-5 placeholder:text-sm placeholder:text-[#CBD5E1] text-[#667085] font-normal font-inter  rounded-lg  focus:border-blue-500"
        placeholder={placeholder}
        inputMode="search"
      />
    </div>
  );
};

export default SearchBox;
