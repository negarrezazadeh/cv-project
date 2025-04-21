import React from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import Javascript from "../../assets/icons/javascript";
import Git from "../../assets/icons/git";
import Figmaa from "../../assets/icons/figmaa";
import NextJs from "../../assets/icons/nextjs";
import Reactjs from "../../assets/icons/reactJs";
import Tailwind from "../../assets/icons/tailwind";
import FireBase from "../../assets/icons/fire-base";
import Bootstrap from "../../assets/icons/bootstrap";
import Redux from "../../assets/icons/redux";
import TypeScript from "../../assets/icons/ts.png";
import SkillIcons from "../ui/Skill_icons";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <Element name="skills-section">
      <div className="py-16 bg-gray50 px-4 md:px-12 lg:px-20 lg:py-24 dark:bg-darkGray50">
        <Button>{t("skills.button")}</Button>
        <p className="pt-4 pb-10 lg:pb-12 text-lg text-gray600 dark:text-darkGray600 text-center">
          {t("skills.title")}
        </p>
        <div className="grid grid-cols-3 gap-3 gap-y-12 place-items-center md:grid-cols-4 lg:grid-cols-7 lg:gap-y-12">
          <Javascript />
          <Reactjs />
          <NextJs />
          <SkillIcons desc="TypeScript">
            <img src={TypeScript} alt="TypeScript logo" className="h-16 w-16" />
          </SkillIcons>
          <Redux />
          <Bootstrap />
          <Tailwind />
          <Figmaa />
          <Git />
          <FireBase />
        </div>
      </div>
    </Element>
  );
}
