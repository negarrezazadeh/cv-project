import React from "react";
import Button from "../ui/button";
import ExperienceCard from "../ui/experienceCard";
import { Element } from "react-scroll";

export default function Experience() {
  return (
    <Element name="experience-section">
      <div className="py-16 md:px-12 lg:py-24">
        <div className="px-4 lg:px-20">
          <Button>Experience</Button>
          <p className="pt-4 text-lg text-gray600 text-center pb-6">
            Here is a quick summary of my most recent experiences:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard
              date="September 2021 - Present"
              title="Open Source Developer"
              tasks={[
                "Develop and maintain open source web applications using modern web technologies",
                "Contribute to various open source repositories by fixing bugs, improving performance, and adding features",
                "Collaborate with a global community of developers to enhance the usability and functionality of open source projects",
              ]}
            />
            <ExperienceCard
              date="June 2023 - March 2024"
              title="Baskar"
              tasks={[
                "Led the design and development of a highly interactive home page using React, enhancing user engagement and overall site performance",
                "Utilized modern front-end tools and libraries like React, CSS-in-JS, and Tailwind to ensure a seamless and responsive user interface",
                "Collaborated closely with the design team to implement intuitive UI/UX patterns that improved user experience",
              ]}
            />
            <ExperienceCard
              date="January 2024 - Present"
              title="Narcis cosmetics"
              tasks={[
                "Designed the homepage using WordPress, ensuring an engaging and user-friendly experience",
                "Created and optimized the 'Contact Us' page to improve user interaction and communication",
                "Managed daily product updates, including price changes, to ensure accurate and timely information on the site",
              ]}
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
