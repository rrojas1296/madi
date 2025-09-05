import BookingsIcon from "../components/icons/BookingsIcon";
import BuildingIcon from "../components/icons/BuildingIcon";
import CreditCardIcon from "../components/icons/CreditCardIcon";
import DashboardIcon from "../components/icons/DashboardIcon";
import SettingsIcon from "../components/icons/SettingsIcon";
import UsersIcon from "../components/icons/UsersIcon";

export const links = [
  {
    id: 1,
    Icon: DashboardIcon,
    label: "sections.dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    Icon: BuildingIcon,
    label: "sections.apartments",
    href: "/apartments",
  },
  {
    id: 3,
    Icon: UsersIcon,
    label: "sections.tenants",
    href: "/tenants",
  },
  {
    id: 4,
    Icon: CreditCardIcon,
    label: "sections.payments",
    href: "/payments",
  },
  {
    id: 5,
    Icon: BookingsIcon,
    label: "sections.bookings",
    href: "/bookings",
  },
  {
    id: 6,
    Icon: SettingsIcon,
    label: "sections.settings",
    href: "/settings",
    className: "hidden lg:flex",
  },
];
