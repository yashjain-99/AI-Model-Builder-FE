import { SIDEBAR_FIELDS } from "@/constants";
import BrandHeader from "@/components/BrandHeader";
import SidebarItemSet from "@/components/Sidebar/SidebarItemSet";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
      <label
        htmlFor="sidebar-toggle"
        className="lg:hidden fixed top-4 left-4 z-50 cursor-pointer"
      >
        <span className="peer-checked:hidden">&#9776;</span>
        <span className="hidden peer-checked:inline">&times;</span>
      </label>
      <div className="fixed inset-0 bg-black opacity-50 lg:hidden peer-checked:block hidden"></div>

      <section className="bg-[#F3F9FF] lg:bg-inherit min-h-screen h-full flex flex-col gap-4 items-start fixed lg:relative top-0 left-0 lg:left-auto z-40 transition-transform transform -translate-x-full lg:translate-x-0 peer-checked:translate-x-0">
        <header className="px-5 bg-[#F3F9FF] h-24 flex items-center justify-center">
          <BrandHeader />
        </header>
        <nav className="flex flex-col gap-6 px-5 w-full ">
          {SIDEBAR_FIELDS.map((item) => (
            <SidebarItemSet
              key={item.id}
              label={item.label}
              items={item.items}
            />
          ))}
        </nav>
      </section>
    </>
  );
};

export default Sidebar;
