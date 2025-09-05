import BottomNav from "@/features/shared/components/bottomNav/BottomNav";
import HeaderApp from "@/features/shared/components/header/Header";
import Sidebar from "@/features/shared/components/sidebar/Sidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 overflow-y-auto custom-scroll flex flex-col">
        <HeaderApp />
        <div className="px-5 flex-1 grid place-items-center">{children}</div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Layout;
