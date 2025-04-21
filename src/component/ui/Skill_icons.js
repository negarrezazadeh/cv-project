import React from "react";

export default function SkillIcons({ children, desc }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      {children}
      <p className="text-base pt-3 lg:pt-5 text-gray600 dark:text-darkGray600 font-normal">{desc}</p>
    </div>
  );
}
