import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  const navItems = [
    { id: "hero-section", label: t("navbar.about") },
    { id: "skills-section", label: t("navbar.skills") },
    { id: "experiences-section", label: t("navbar.experiences") },
    { id: "works-section", label: t("navbar.work") },
    { id: "contact-section", label: t("navbar.contact") },
  ];

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 text-lg font-medium">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            className="group cursor-pointer"
          >
            <li className="relative text-gray700 dark:text-darkGray700 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
