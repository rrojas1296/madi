"use client";
import Link from "next/link";
import BuildingIcon from "../icons/BuildingIcon";
import Button from "../button/button";
import SettingsIcon from "../icons/SettingsIcon";
import { useRouter } from "next/navigation";
import SunIcon from "../icons/SunIcon";
import BellIcon from "../icons/BellIcon";
import { useThemeStore } from "@/store/theme.store";
import MoonIcon from "../icons/MoonIcon";

const HeaderApp = () => {
  const router = useRouter();
  const { setTheme, theme } = useThemeStore();

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="h-[72px] shrink-0 flex items-center sticky z-10 top-0 left-0 px-5 bg-bg-1 w-full lg:h-20 lg:px-6 lg:border-b lg:border-b-border-2 ">
      <div className="flex flex-1 justify-between items-center">
        <Link href="/dashboard" className="flex items-center gap-3 lg:hidden">
          <BuildingIcon className="h-5 w-5 fill-current text-primary" />
          <span className="font-semibold text-xl">Madi</span>
        </Link>
        <div className="gap-1 hidden lg:grid">
          <h1 className="font-semibold text-xl">Bienvenido Diego Raul</h1>
          <p className="text-sm text-text-2">18 de agosto, 2025</p>
        </div>
        <div className="flex gap-4">
          <Button variant="icon" className="rounded-md bg-bg-2 hover:bg-bg-1">
            <BellIcon className="w-5 h-5 stroke-current text-text-2" />
          </Button>
          <Button
            variant="icon"
            className="rounded-md bg-bg-2 hover:bg-bg-1"
            onClick={handleSwitchTheme}
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 stroke-current text-text-2" />
            ) : (
              <MoonIcon className="w-5 h-5 stroke-current text-text-2" />
            )}
          </Button>
          <Button
            variant="icon"
            className="rounded-md bg-bg-2 hover:bg-bg-1"
            onClick={() => router.push("/settings")}
          >
            <SettingsIcon className="w-5 h-5 stroke-current text-text-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
