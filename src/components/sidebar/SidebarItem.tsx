"use client";

import { useNavStateContext } from "@/context/NavStateContextProvider";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  item: SidebarFieldItem;
};

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const { navState, setNavState } = useNavStateContext();
  const handleClick = (navState: NavItem) => {
    const sidebarToggle = document.getElementById(
      "sidebar-toggle"
    ) as HTMLInputElement;
    if (sidebarToggle) sidebarToggle.checked = false;
    setNavState(navState);
  };
  return (
    <button
      className={cn(
        "flex w-full gap-2 items-center px-4 py-3 rounded-md border border-transparent text-base font-semibold font-inter text-[#344054] hover:bg-[#E9EFF5]",
        {
          "bg-secondary text-white hover:bg-[#3A356F]": navState === item.id,
        }
      )}
      onClick={() => {
        handleClick(item.id);
      }}
    >
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </button>
  );
};
