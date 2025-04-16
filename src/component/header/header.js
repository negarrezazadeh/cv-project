import { useState } from "react";

import Hug from "../../assets/icons/hug";
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
    <div className="fixed bg-default z-50 w-full">
      <div className="flex justify-between h-[68px] items-center p-4 md:px-12 lg:px-20 lg:py-4">
        {/* mobile header */}
        <div className="lg:hidden flex justify-between w-full">
          <Hug onClick={openMobileMenuHandler} />
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {/* desktop header */}
        <div className="hidden lg:flex justify-between w-full">
          <Navbar />
          <div className="flex gap-5 items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {toggleMenu && <MobileMenu onClick={closeMobileMenuHandler} />}
      </div>
    </div>
  );
}
