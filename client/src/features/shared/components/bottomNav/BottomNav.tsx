"use client";
import Button from "../button/button";
import BookingsIcon from "../icons/BookingsIcon";
import BuildingIcon from "../icons/BuildingIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import DashboardIcon from "../icons/DashboardIcon";
import UsersIcon from "../icons/UsersIcon";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../../lib/shadcn";

const links = [
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
];
const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  return (
    <div className="lg:hidden bg-bg-1 fixed bottom-0 left-0 w-full h-16 border-t border-t-border-2 flex justify-between items-center px-8">
      {links.map(({ Icon, id, href }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Button
            key={id}
            variant="icon"
            onClick={() => router.push(href)}
            className={cn(
              "border-none",
              isActive && "bg-primary hover:bg-primary/80 text-text-3",
            )}
          >
            {<Icon className="w-5 h-5 fill-current" />}
          </Button>
        );
      })}
    </div>
  );
};

export default BottomNav;
