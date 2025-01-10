import SearchBox from "./SearchBox";
import Social from "./Social";

const Navbar = () => {
  return (
    <header className=" h-24 border flex items-center px-6 justify-between">
      <span className=" font-semibold text-xl">AI/ML Model Builder</span>
      <SearchBox />
      <div className="flex items-center">
        <Social />
      </div>
    </header>
  );
};

export default Navbar;
