import React from "react";
import Button from "./Button";
import Share from "../../assets/icons/share";

export default function WorkSample(props) {
  const handleClickUrl = (url) => {
    window.open(url, '_blank')
  }

  const { img, title, desc, tech, url } = props;
  return (
    <div className="shadow-md rounded-xl mt-6 lg:mt-12 lg:flex items-center">
      <div className="p-8 lg:p-12 stroke-1 stroke-gray100 bg-gray50 rounded-t-xl ">
        <img
          src={img}
          className="shadow-lg rounded-lg md:m-auto lg:max-w-80 lg:max-h-72"
          alt="project-demo"
        />
      </div>
      <div className="p-8">
        <p className="font-semibold text-lg">{title}</p>
        <p className="py-6 text-gray600">{desc}</p>
        <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] pb-6">
          {tech.map((tName,index) => (
          <Button key={index}>{tName}</Button>
          ))}
        </div>
        <Share onClick={()=>handleClickUrl(url)}/>
      </div>
    </div>
  );
}
