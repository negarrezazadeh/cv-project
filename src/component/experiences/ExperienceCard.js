import React from "react";
import Upwork from "../../assets/icons/upwork";

export default function ExperienceCard({title, date, tasks=[]}) {  
  return (
    <div className="bg-default dark:bg-darkGray100 shadow-md rounded-xl mt-6">
      <div className="p-8">
        <div>
          <Upwork />
        </div>
        <p className="py-4 text-sm text-gray700 dark:text-darkGray600">{date}</p>
        <div>
          <p className="pb-4 text-lg text-gray900 dark:text-darkGray900 font-semibold">{title}</p>
          <ul className="ml-6">
            {tasks.map((task, index) => (
              <li className="list-disc text-gray600 dark:text-darkGray600 leading-9 p-2" key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
