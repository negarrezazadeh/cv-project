import React from "react";
import Button from "../ui/Button";
import { FiExternalLink } from "react-icons/fi";

export default function WorkCard(props) {
  const handleClickUrl = (url) => {
    window.open(url, "_blank");
  };

  const { img, title, desc, tech, url } = props;
  return (
    <div className="shadow-md rounded-xl mt-6 lg:mt-12 lg:flex items-center bg-gray50 dark:bg-darkGray100">
      <div className="p-8 lg:p-12 stroke-1 stroke-gray100 dark:stroke-darkGray dark:bg-darkGray200 bg-gray100 rounded-tl-xl rounded-bl-xl">
        <img
          src={img}
          className="shadow-lg rounded-lg md:m-auto lg:max-w-80 lg:max-h-72"
          alt="project-demo"
        />
      </div>
      <div className="p-8">
        <p className="font-semibold text-lg text-gray300 dark:text-gray50">
          {title}
        </p>
        <p className="py-6 text-gray600 dark:text-darkGray600">{desc}</p>
        <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] pb-6">
          {tech.map((tName, index) => (
            <Button key={index}>{tName}</Button>
          ))}
        </div>

        <FiExternalLink className="text-darkGray300 dark:text-darkGray600 cursor-pointer" onClick={() => handleClickUrl(url)} size={23}/>
      </div>
    </div>
  );
}
