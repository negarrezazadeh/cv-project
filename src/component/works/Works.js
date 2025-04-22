import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

import Button from "../ui/Button";
import geshniz from "../../assets/images/geshniz.png";
// import narcis from "../../assets/images/narcis.png";
import relarapanel from "../../assets/images/relarapanel.png";
import relara from "../../assets/images/relara.png";
import shopCenter from "../../assets/images/shopCenter.png";
import WorkCard from "./WorkCard";

export default function Works() {
  const { t } = useTranslation();

  return (
    <Element name="works-section">
      <div className="py-16 bg-gray50 px-4 md:px-12 lg:py-24 lg:px-20 dark:bg-darkGray50">
        <Button>{t("works.button")}</Button>
        <p className="pt-4 text-lg text-gray600 dark:text-darkGray600 text-center">
          {t("works.description")}
        </p>
        <WorkCard
          img={relara}
          title={t("works.samples.relara.title")}
          desc={t("works.samples.relara.desc")}
          tech={["NextJs", "TailwindCss", "shadCn"]}
          github={"https://github.com/pouriasabaghi/relara_shop"}
        />
        <WorkCard
          img={relarapanel}
          title={t("works.samples.relaraPanel.title")}
          desc={t("works.samples.relaraPanel.desc")}
          tech={["React", "React query", "TailwindCss", "shadCn"]}
          github={"https://github.com/negarrezazadeh/relara"}
        />
        <WorkCard
          img={geshniz}
          title={t("works.samples.geshniz.title")}
          desc={t("works.samples.geshniz.desc")}
          tech={["NextJs", "Redux-toolkit", "TailwindCss"]}
          url={"https://geshniz.vercel.app/"}
          github={"https://github.com/negarrezazadeh/geshniz"}
        />
        {/* <WorkCard
          img={narcis}
          title={t("works.samples.narcis.title")}
          desc={t("works.samples.narcis.desc")}
          tech={["Wordpress", "Elementor"]}
          url={"https://narcisshop.com"}
        /> */}
        <WorkCard
          img={shopCenter}
          title={t("works.samples.shopCenter.title")}
          desc={t("works.samples.shopCenter.desc")}
          tech={["NextJs", "Redux-toolkit", "Firebase", "TailwindCss"]}
          url={"https://shopcenter-eosin.vercel.app/"}
          github={"https://github.com/negarrezazadeh/shop-center"}
        />
      </div>
    </Element>
  );
}
