import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../context/DarkMode";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import ProfileDarkBg from "../../assets/images/profile-dark-background.png";
import ProfileBg from "../../assets/images/profile-background.png";
import Green from "../../assets/icons/green";

import { GrLocation } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const {theme} = useDarkMode();
  const { t } = useTranslation();  

  return (
    <Element name="hero-section">
      <div
        className={
          "py-16 px-4 md:px-12 lg:px-20 lg:pb-24 lg:pt-40 lg:flex lg:flex-row-reverse lg:justify-between bg-default dark:bg-darkGray"
        }
      >
        <div className="relative flex justify-center h-[300px] lg:w-[400px] lg:h-[360px] mt-10 md:mt-0">
          <img
            src={ProfilePic}
            alt="profile"
            className="absolute z-10 w-[220px] h-[270px] lg:h-[300px] lg:w-[240px] object-cover"
          />
          <img
            src={theme === "dark" ? ProfileDarkBg : ProfileBg}
            alt="profile-background"
            className="absolute pt-5 w-[260px] h-[260px] lg:h-[320px] lg:w-[270px] lg:pt-0 lg:top-5 lg:right-[-25px] xl:right-[30px]"
          />
        </div>
        <div className="pt-10 lg:pt-5 lg:w-[768px]">
          <h1 className={"text-4xl font-semibold dark:text-gray50"}>
            {t("hero.title")}
          </h1>
          <p
            className={
              "pt-2 lg:pt-5 text-base text-gray600 dark:text-darkGray600 text-justify leading-8"
            }
          >
            {t("hero.description")}
          </p>

          <div className="py-12">
            <div className="flex items-center gap-2">
              <GrLocation className="dark:text-darkGray700" size={25} />
              <p className="text-base text-gray600 dark:text-darkGray600">
                {t("hero.location")}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Green />
              <p className="text-base text-gray600 dark:text-darkGray600">
                {t("hero.availability")}
              </p>
            </div>

            <div className="flex gap-x-5 text-gray600 dark:text-darkGray700 mt-10">
              <Link to={"https://github.com/negarrezazadeh"}>
                <FaGithub size={25} />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/negar-rezazadeh-327058356/"}
              >
                <FaLinkedin size={25} />
              </Link>
              <Link to={"https://t.me/rznegrr210"}>
                <FaTelegram size={25} />
              </Link>
              <Link to={"https://wa.me/989938570718"}>
                <FaWhatsapp size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
