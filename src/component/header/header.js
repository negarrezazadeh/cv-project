import { useState } from "react";

import { LuMenu } from "react-icons/lu";
import MobileMenu from "../mobile-menu/Mobile-menu";
import Navbar from "../ui/Navbar";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const openMobileMenuHandler = () => {
    setToggleMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div className="fixed bg-gray50 border-b border-darkGray800 z-50 w-full dark:bg-darkGray50 dark:border-gray700">
      <div className="flex justify-between h-[68px] items-center p-4 md:px-12 lg:px-20 lg:py-4">
        {/* mobile header */}
        <div className="lg:hidden flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <LuMenu
            onClick={openMobileMenuHandler}
            size={30}
            className="text-gray600 dark:text-darkGray700"
          />
        </div>

        {/* desktop header */}
        <div className="hidden lg:flex justify-between w-full">
          <Navbar />
          <div className="flex gap-5 items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {toggleMenu && <MobileMenu onClose={closeMobileMenuHandler} />}
      </div>
    </div>
  );
}
