import Navbar from "../ui/Navbar";
// import logo from "../../assets/images/logo.svg";
// import Exit from "../../assets/icons/exit";
// import LanguageSwitcher from "../ui/LanguageSwitcher";
// import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function MobileMenu(props) {
  return (
    <div className="bg-gray900/50 h-screen w-full flex flex-row-reverse fixed right-0 top-0 z-50 lg:hidden" onClick={props.onClick}>
      <div className="w-[320px] bg-default shadow-2xl h-screen pt-5">
        <Navbar />
      </div>
    </div>
  );
}
