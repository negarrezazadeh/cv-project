import { IoMdClose } from "react-icons/io";
import Navbar from "../ui/Navbar";

export default function MobileMenu({ isOpen, onClose, isRTL = true }) {
  return (
    <div
      className={`
        fixed inset-0 z-50 lg:hidden bg-gray900/50 
        transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        className={`
          w-[320px] h-screen bg-default dark:bg-darkGray50 shadow-2xl pt-5 
          transition-transform duration-300 transform
          ${isOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"}
        `}
      >
        <button className="flex justify-end w-full px-5" onClick={onClose}>
          <IoMdClose size={30} className="text-gray600 dark:text-darkGray600" />
        </button>
        <Navbar />
      </div>
    </div>
  );
}
