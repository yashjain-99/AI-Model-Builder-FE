"use client";

import { SidebarItem } from "./SidebarItem";

type SidebarItemProps = {
  label: string;
  items: SidebarFieldItem[];
};

const SidebarItemSet = ({ label, items }: SidebarItemProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="font-semibold text-sm">{label}</span>
      {items.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SidebarItemSet;
