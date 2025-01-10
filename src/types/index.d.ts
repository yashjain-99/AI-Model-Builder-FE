declare type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
};

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
