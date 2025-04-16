import React from "react";
import Button from "../ui/Button";
import ExperienceCard from "./ExperienceCard";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <Element name="experiences-section">
      <div className="py-16 md:px-12 lg:py-24 dark:bg-darkGray bg-default">
        <div className="px-4 lg:px-20">
          <Button>{t("experiences.button")}</Button>
          <p className="pt-4 text-lg text-gray600 dark:text-darkGray600 text-center pb-6">
            {t("experiences.title")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard
              date={t("experiences.openSource.date")}
              title={t("experiences.openSource.title")}
              tasks={t("experiences.openSource.tasks", { returnObjects: true })}
            />

            <ExperienceCard
              date={t("experiences.baskar.date")}
              title={t("experiences.baskar.title")}
              tasks={t("experiences.baskar.tasks", { returnObjects: true })}
            />

            <ExperienceCard
              date={t("experiences.narcis.date")}
              title={t("experiences.narcis.title")}
              tasks={t("experiences.narcis.tasks", { returnObjects: true })}
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
