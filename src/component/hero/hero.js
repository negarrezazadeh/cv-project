import React from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import ProfilePic from "../../assets/images/profile-pic.jpg";
import ProfileBg from "../../assets/images/profile-background.png";
import Location from "../../assets/icons/location";
import Green from "../../assets/icons/green";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const {t} = useTranslation()

  return (
    <Element name="hero-section">
      <div
        className={
          "py-16 px-4 md:px-12 lg:px-20 lg:pb-24 lg:pt-40 lg:flex lg:flex-row-reverse lg:justify-between"
        }
      >
        <div className="relative flex justify-center h-[300px] lg:w-[400px] lg:h-[360px] mt-10 md:mt-0">
          <img
            src={ProfilePic}
            alt="profile"
            className="absolute z-10 h-[270px] lg:h-[300px] lg:w-[240px] object-cover"
          />
          <img
            src={ProfileBg}
            alt="profile-background"
            className="absolute pt-5 lg:h-[320px] lg:w-[270px] lg:pt-0 lg:top-5 lg:right-[-25px] xl:right-[30px]"
          />
        </div>
        <div className="pt-10 lg:pt-5 lg:w-[768px]">
          <h1 className={"text-4xl font-semibold"}>{t("hero.title")}</h1>
          <p className={"pt-2 text-base text-gray600 text-justify leading-7"}>
          {t("hero.description")}
          </p>

          <div className="py-12">
            <div className="flex items-center gap-2">
              <Location />
              <p className="text-base text-gray600">{t("hero.location")}</p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Green />
              <p className="text-base text-gray600">
                {t("hero.availability")}
              </p>
            </div>

            <div className="flex gap-x-5 text-gray600 mt-10">
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
                <FaWhatsapp size={25}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
