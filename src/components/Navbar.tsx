import Social from "@/components/navbar/Social";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <header className=" h-24 border flex items-center px-6 justify-between">
      <span className=" font-semibold text-xl">AI/ML Model Builder</span>
      <SearchBox className="min-w-72 bg-[#F3F9FF]" placeholder="Search" />
      <div className="flex items-center">
        <Social />
      </div>
    </header>
  );
};

export default Navbar;
