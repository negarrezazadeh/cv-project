import Hero from "./hero/Hero";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import ContactMe from "./contact_me/Contact_Me";
import Header from "./header/Header";
import Footer from "./footer/Footer";
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
