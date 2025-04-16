import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./navbar.module.css";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="lg:flex">
        <Link to="hero-section" smooth={true} duration={500}>
          <li>{t("navbar.about")}</li>
        </Link>
        <Link to="skills-section" smooth={true} duration={500}>
          <li>{t("navbar.skills")}</li>
        </Link>
        <Link to="experiences-section" smooth={true} duration={500}>
          <li>{t("navbar.experiences")}</li>
        </Link>
        <Link to="works-section" smooth={true} duration={500}>
          <li>{t("navbar.work")}</li>
        </Link>
        <Link to="contact-section" smooth={true} duration={500}>
          <li>{t("navbar.contact")}</li>
        </Link>
      </ul>
    </div>
  );
}
