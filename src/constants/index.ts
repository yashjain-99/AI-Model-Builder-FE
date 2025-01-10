import { Layers, LayoutDashboard, NotepadText, Settings } from "lucide-react";
import React from "react";

import SupportSvg from "@/assets/support.svg";

interface SidebarField {
  label: string;
  id: string;
  items: SidebarFieldItem[];
}

export const SIDEBAR_FIELDS: SidebarField[] = [
  {
    label: "Model Library",
    id: "model_library_set",
    items: [
      {
        label: "Model Library",
        id: "model_library",
        icon: React.createElement(LayoutDashboard),
      },
    ],
  },
  {
    label: "Extraction Builder",
    id: "extraction_builder_set",
    items: [
      {
        label: "Label Data",
        id: "label_data",
        icon: React.createElement(LayoutDashboard),
      },
      {
        label: "Model",
        id: "model",
        icon: React.createElement(Layers),
      },
      {
        label: "Test",
        id: "test",
        icon: React.createElement(NotepadText),
      },
    ],
  },
  {
    label: "Help",
    id: "help_set",
    items: [
      {
        label: "Setting",
        id: "setting",
        icon: React.createElement(Settings),
      },
      {
        label: "Support",
        id: "support",
        icon: React.createElement("img", { src: SupportSvg, alt: "Support" }),
      },
    ],
  },
];
