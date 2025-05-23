import React from "react";
import SkillIcons from "../../component/ui/Skill_icons";

export default function NextJs() {
  return (
    <div>
      <SkillIcons desc='Next.js'>
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_327_496)">
            <mask
              id="mask0_327_496"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="64"
              height="64"
            >
              <path
                d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_327_496)">
              <path
                d="M32 62.9333C49.084 62.9333 62.9333 49.084 62.9333 32C62.9333 14.916 49.084 1.06665 32 1.06665C14.916 1.06665 1.06665 14.916 1.06665 32C1.06665 49.084 14.916 62.9333 32 62.9333Z"
                fill="black"
                stroke="white"
                strokeWidth="6"
              />
              <path
                d="M53.1584 56.0071L24.5838 19.2H19.2V44.7893H23.507V24.6697L49.7774 58.6115C50.9628 57.8183 52.092 56.9475 53.1584 56.0071Z"
                fill="url(#paint0_linear_327_496)"
              />
              <path
                d="M45.1556 19.2H40.8889V44.8H45.1556V19.2Z"
                fill="url(#paint1_linear_327_496)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_327_496"
              x1="38.7555"
              y1="41.4222"
              x2="51.3777"
              y2="57.0666"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_327_496"
              x1="43.0222"
              y1="19.2"
              x2="42.9508"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_327_496">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </SkillIcons>
    </div>
  );
}
