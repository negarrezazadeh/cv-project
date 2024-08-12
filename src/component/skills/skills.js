import Button from "../ui/button";
import React from "react";
import { Element } from "react-scroll";
import Javascript from "../../assets/icons/javascript";
import Git from "../../assets/icons/git";
import Figmaa from "../../assets/icons/figmaa";
import NextJs from "../../assets/icons/nextjs";
import Reactjs from "../../assets/icons/reactJs";
import Tailwind from "../../assets/icons/tailwind";
import FireBase from "../../assets/icons/fire-base";
import Bootstrap from "../../assets/icons/bootstrap";
import Redux from "../../assets/icons/redux";

export default function Skills() {
  return (
    <Element name='skills-section'>
      <div className="py-16 bg-gray50 px-4 md:px-12 lg:px-20 lg:py-24">
        <Button>Skills</Button>
        <p className="pt-4 pb-6 lg:pb-12 text-lg text-gray600 text-center">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="grid grid-cols-3 gap-3 gap-y-12 place-items-center md:grid-cols-4 lg:grid-cols-7 lg:gap-y-12">
          <Javascript />
          <NextJs />
          <Reactjs />
          <Redux/>
          <Bootstrap/>
          <Tailwind />
          <Figmaa />
          <Git />
          <FireBase />
        </div>
      </div>
    </Element>
  );
}
