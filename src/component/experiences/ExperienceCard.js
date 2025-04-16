import React from "react";
import Upwork from "../../assets/icons/upwork";

export default function ExperienceCard({title, date, tasks=[]}) {  
  return (
    <div className="bg-default shadow-md rounded-xl mt-6">
      <div className="p-8">
        <div>
          <Upwork />
        </div>
        <p className="py-4 text-base text-gray700">{date}</p>
        <div>
          <p className="pb-4 text-lg text-gray900 font-semibold">{title}</p>
          <ul className="text-gray600 list-disc ml-6 leading-7">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
