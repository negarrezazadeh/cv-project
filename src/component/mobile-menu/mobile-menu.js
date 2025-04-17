import { IoMdClose } from "react-icons/io";
import Navbar from "../ui/Navbar";

export default function MobileMenu(props) {
  return (
    <div className="bg-gray900/50 flex flex-row-reverse fixed inset-0 z-50 lg:hidden">
      <div className="w-[320px] bg-default dark:bg-darkGray50 shadow-2xl h-screen pt-5">
        <button className="flex justify-end w-full px-5" onClick={props.onClose}>
          <IoMdClose size={30} className="text-gray600 dark:text-darkGray600" />
        </button>
        <Navbar />
      </div>
    </div>
  );
}
