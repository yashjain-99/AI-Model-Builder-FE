import Aventisia_V1 from "/Aventisia_V1.png";

const BrandHeader = () => {
  return (
    <a href="/" className="cursor-pointer flex items-center gap-1 max-w-64">
      <img src={Aventisia_V1} alt="Aventisia logo" />
    </a>
  );
};

export default BrandHeader;
