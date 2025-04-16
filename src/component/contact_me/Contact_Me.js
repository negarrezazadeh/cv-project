import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import Mail from "../../assets/icons/mail";
import Phone from "../../assets/icons/phone";
import Copy from "../../assets/icons/copy";
import { Element } from "react-scroll";

export default function ContactMe() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneText = useRef(null);
  const emailText = useRef(null);

  const copyText = (textRef) => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Element name="contact-section">
      <div className="py-16 px-4 md:px-12 lg:py-24 lg:px-20">
        <div>
          <Button className={"pb-6"}>Get in touch</Button>
          <p className="text-center text-lg text-gray600">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="relative w-[85px] m-auto">
            {showTooltip && <p className="tooltip">text copied!</p>}
          </div>
          <div className="flex pt-6 justify-center items-center">
            <Mail />
            <p
              className="px-2 text-lg font-semibold	text-gray900"
              ref={emailText}
            >
              negarrezazadeh210@gmail.com
            </p>
            <button onClick={() => copyText(emailText)}>
              <Copy />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Phone />
            <p
              className="px-2 text-lg font-semibold	text-gray900"
              ref={phoneText}
            >
              +98 9198560718
            </p>
            <button onClick={() => copyText(phoneText)}>
              <Copy />
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}
