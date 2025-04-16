import React from "react";
import WorkSample from "../ui/WorkSamples";
import Button from "../ui/Button";
import { Element } from "react-scroll";
import geshniz from "../../assets/images/geshniz.png";
import narcis from "../../assets/images/narcis.png";
import shopCenter from "../../assets/images/shopCenter.png";

export default function Work() {
  return (
    <Element name="work-section">
      <div className="py-16 bg-gray50 px-4 md:px-12 lg:py-24 lg:px-20">
        <Button>Work</Button>
        <p className="pt-4 text-lg text-gray600 text-center">
          Here is a quick summary of my most recent experiences:
        </p>
        <WorkSample
          img={geshniz}
          title="Geshniz"
          desc="This site is a single-page food ordering website written with NextJS and has a user panel, shopping cart, and products that use Redux Toolkit technology."
          tech={["Redux-toolkit", "tailwindCss", "nextJs"]}
          url={"https://geshniz.vercel.app/"}
        />
        <WorkSample
          img={narcis}
          title="Narcis shop"
          desc="This site is a cosmetics website that was created with WordPress, and the main page and contact us, this website was designed with Elementor."
          tech={["wordpress", "elementor"]}
          url={"https://narcisshop.com"}
        />
        <WorkSample
          img={shopCenter}
          title="Shop Center"
          desc="This site is a store site based on a design in Figma, and the products of this site are built in Google Firebase. all the site's styling is done with TailwindCss."
          tech={["nextJs", "tailwindCss", "Redux-toolkit", "firebase"]}
          url={"https://shopcenter-eosin.vercel.app/"}
        />
      </div>
    </Element>
  );
}
