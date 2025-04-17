import React from "react";
import { TbCopyright } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex bg-gray50 dark:bg-darkGray50 justify-center items-center py-6 px-2 text-gray600 dark:text-darkGray600 border-t border-darkGray800 dark:border-gray700">
      <TbCopyright className="text-gray600 dark:text-darkGray700"/>
      <p className="text-sm pl-1">
        2024 | Designed and coded with ❤️️ by
        <span>
          <Link href="https://www.linkedin.com/in/negar-rezazadeh-327058356/" className="cursor-pointer"> Me</Link>
        </span>
      </p>
    </div>
  );
}
