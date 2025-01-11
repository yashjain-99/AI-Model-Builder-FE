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

export const TABLE_DATA: ModelInfo[] = [
  {
    id: "#5412448",
    modelName: "Blonde Drizzle",
    modelType: "Extraction",
    description:
      "An extraction model designed to process and analyze customer data for personalized recommendations. It helps in identifying key customer insights and behavior patterns.",
    createdOn: "29/02/2024",
    lastTrainedOn: "29/02/2024",
    status: "active",
  },
  {
    id: "#5412449",
    modelName: "Amber Glow",
    modelType: "Classification",
    description:
      "A classification model for segmenting customer data based on their purchase history.",
    createdOn: "01/03/2024",
    lastTrainedOn: "01/03/2024",
    status: "inactive",
  },
  {
    id: "#5412450",
    modelName: "Cobalt Vision",
    modelType: "Clustering",
    description:
      "Clustering model to group customers based on behavioral patterns.",
    createdOn: "15/03/2024",
    lastTrainedOn: "15/03/2024",
    status: "active",
  },
  {
    id: "#5412451",
    modelName: "Emerald Spark",
    modelType: "Regression",
    description:
      "Regression model used to predict customer lifetime value based on historical data.",
    createdOn: "20/03/2024",
    lastTrainedOn: "20/03/2024",
    status: "training",
  },
  {
    id: "#5412452",
    modelName: "Ruby Pulse",
    modelType: "Forecasting",
    description:
      "Forecasting model to predict future sales trends for a specific product line.",
    createdOn: "25/03/2024",
    lastTrainedOn: "25/03/2024",
    status: "inactive",
  },
  {
    id: "#5412453",
    modelName: "Sapphire Edge",
    modelType: "Recommendation",
    description: "Recommendation model for personalized product suggestions.",
    createdOn: "30/03/2024",
    lastTrainedOn: "30/03/2024",
    status: "active",
  },
];
