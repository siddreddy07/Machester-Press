export interface NavItem {
  id: string;
  label: string;
  href?: string;
  isExternal?: boolean;
}

export interface CafeStatus {
  isOpen: boolean;
  melbourneTime: string;
  todayHours: string;
  statusText: string;
}
