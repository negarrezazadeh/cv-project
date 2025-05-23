import React from "react";
import Button from "../ui/Button";
import { FiExternalLink } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function WorkCard({ img, title, desc, tech, url, github }) {
  return (
    <div className="shadow-md mt-6 lg:mt-12 flex flex-col lg:flex-row items-center lg:items-stretch justify-center rounded-xl overflow-hidden">
      <div className="flex p-8 lg:p-12 stroke-gray100 dark:stroke-darkGray dark:bg-darkGray200 bg-gray100">
        <img
          src={img}
          className="shadow-lg rounded-lg lg:max-w-80 lg:max-h-72 object-cover"
          alt="project-demo"
        />
      </div>
      <div className="w-full p-8 bg-gray50 dark:bg-darkGray100">
        <p className="font-semibold text-lg text-gray300 dark:text-gray50">
          {title}
        </p>
        <p className="py-3 text-gray600 dark:text-darkGray600 leading-8">
          {desc}
        </p>

        {/* work technologies */}
        <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] py-6">
          {tech.map((tName, index) => (
            <Button key={index}>{tName}</Button>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          <Link to={github}>
            <TbBrandGithub
              size={23}
              className="text-darkGray300 dark:text-darkGray600 cursor-pointer"
            />
          </Link>
          {url && (
            <Link to={url}>
              <FiExternalLink
                className="text-darkGray300 dark:text-darkGray600 cursor-pointer"
                size={23}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
