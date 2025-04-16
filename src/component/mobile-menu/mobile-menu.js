import Navbar from "../ui/Navbar";

export default function MobileMenu(props) {
  return (
    <div className="bg-gray900/50 h-screen w-full flex flex-row-reverse fixed right-0 top-0 z-50 lg:hidden" onClick={props.onClick}>
      <div className="w-[320px] bg-default dark:bg-darkGray shadow-2xl h-screen p-5">
        <Navbar />
      </div>
    </div>
  );
}
