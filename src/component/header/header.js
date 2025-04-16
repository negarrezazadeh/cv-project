import { useState } from "react";

import Hug from "../../assets/icons/hug";
import logo from "../../assets/images/logo.svg";
import MobileMenu from "../mobile-menu/Mobile-menu";
import Navbar from "../ui/Navbar";
import Divide from "../../assets/icons/divide";
import DownloadCvBtn from "../ui/DownloadCvBtn";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  const [togglemenu, setToggleMenu] = useState(false);

  const openMobileMenuHandler = () => {
    setToggleMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div className="fixed bg-default z-50 w-full">
      <div className="flex justify-between h-[68px] items-center p-4 md:px-12 lg:px-20 lg:py-4">
        <div className="lg:pl-8">
          <img src={logo} alt="logo" />
        </div>
        <div className="lg:hidden">
          <Hug onClick={openMobileMenuHandler} />
        </div>
        <div className="hidden lg:flex justify-center items-center pr-8">
          <Navbar />
          <Divide />
          <a href="./negar-rezazadeh-resume.pdf" download={'negar-rezazadeh-resume.pdf'}>
            <DownloadCvBtn className="px-4 py-1.5 ml-4" />
          </a>
        </div>

        <div>
          <LanguageSwitcher/>
        </div>

        {togglemenu && <MobileMenu onClick={closeMobileMenuHandler} />}
      </div>
    </div>
  );
}
