import Hero from "../component/hero/hero";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import Work from "./Work/work";
import ContactMe from "./contact me/contact-me";
import Header from "./header/header";
import Footer from "./footer/footer";
import { useTranslation } from "react-i18next";

export default function Layout(props) {
  const {i18n} = useTranslation()
  return (
    <div dir={i18n.language === "fa" ? "rtl" : "ltr"}>
      <Header onClick={props.onClick}/>
      <Hero />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
