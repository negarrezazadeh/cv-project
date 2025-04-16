import { useTranslation } from "react-i18next";
import Hero from "./hero/Hero";
import Experiences from "./experiences/Experiences";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import ContactMe from "./contact_me/Contact_Me";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout(props) {
  const {i18n} = useTranslation()
  return (
    <div dir={i18n.language === "fa" ? "rtl" : "ltr"}>
      <Header onClick={props.onClick}/>
      <Hero />
      <Skills />
      <Experiences />
      <Works />
      <ContactMe />
      <Footer />
    </div>
  );
}
