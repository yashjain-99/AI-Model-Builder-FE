type NavItem =
  | "model_library"
  | "label_data"
  | "model"
  | "test"
  | "setting"
  | "support";

declare interface SidebarFieldItem {
  id: NavItem;
  label: string;
  icon: React.ReactNode;
}

declare type ModelInfo = {
  id: string;
  modelName: string;
  modelType: string;
  description: string;
  createdOn: sring;
  lastTrainedOn: string;
  status: "active" | "inactive" | "training";
};
