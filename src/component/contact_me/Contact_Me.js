import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LuCopy } from "react-icons/lu";

import Button from "../ui/Button";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";

export default function ContactMe() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneText = useRef(null);
  const emailText = useRef(null);
  const { t } = useTranslation();

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
      <div className="py-16 px-4 md:px-12 lg:py-24 lg:px-20 dark:bg-darkGray bg-default">
        <div>
          <Button className={"pb-6"}>{t("contact.button")}</Button>
          <p className="text-center text-lg text-gray600 dark:text-darkGray600">
            {t("contact.title")}
          </p>
          <div className="relative w-[85px] m-auto">
            {showTooltip && <p className="tooltip">text copied!</p>}
          </div>

          <div className="flex pt-7 justify-center items-center">
            <LuMail className="text-gray600 dark:text-darkGray700" size={25} />
            <p
              className="px-2 text-lg font-semibold	text-gray900 dark:text-darkGray600"
              ref={emailText}
            >
              negarrezazadeh210@gmail.com
            </p>
            <button onClick={() => copyText(emailText)}>
              <LuCopy
                className="text-gray600 dark:text-darkGray700"
                size={25}
              />
            </button>
          </div>

          <div className="flex justify-center items-center pt-4">
            <FiPhone className="text-gray600 dark:text-darkGray700" size={25} />
            <p
              className="px-2 text-lg font-semibold	text-gray900 dark:text-darkGray600"
              ref={phoneText}
            >
              09198560718
            </p>
            <button onClick={() => copyText(phoneText)}>
              <LuCopy
                className="text-gray600 dark:text-darkGray700"
                size={25}
              />
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}
