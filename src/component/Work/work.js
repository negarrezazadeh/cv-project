import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

import WorkSample from "../ui/WorkSamples";
import Button from "../ui/Button";
import geshniz from "../../assets/images/geshniz.png";
import narcis from "../../assets/images/narcis.png";
import shopCenter from "../../assets/images/shopCenter.png";

export default function Work() {
  const { t } = useTranslation();

  return (
    <Element name="work-section">
      <div className="py-16 bg-gray50 px-4 md:px-12 lg:py-24 lg:px-20">
        <Button>{t("works.button")}</Button>
        <p className="pt-4 text-lg text-gray600 text-center">
          {t("works.description")}
        </p>
        <WorkSample
          img={geshniz}
          title={t("works.samples.geshniz.title")}
          desc={t("works.samples.geshniz.desc")}
          tech={["Redux-toolkit", "tailwindCss", "nextJs"]}
          url={"https://geshniz.vercel.app/"}
        />
        <WorkSample
          img={narcis}
          title={t("works.samples.narcis.title")}
          desc={t("works.samples.narcis.desc")}
          tech={["wordpress", "elementor"]}
          url={"https://narcisshop.com"}
        />
        <WorkSample
          img={shopCenter}
          title={t("works.samples.shopCenter.title")}
          desc={t("works.samples.shopCenter.desc")}
          tech={["nextJs", "tailwindCss", "Redux-toolkit", "firebase"]}
          url={"https://shopcenter-eosin.vercel.app/"}
        />
      </div>
    </Element>
  );
}
