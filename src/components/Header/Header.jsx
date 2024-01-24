"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useMedia } from "use-media";

import logo from "../../assets/icons/logo.svg";
import burger from "../../assets/icons/burger.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const locales = { ua: { title: "UA" }, en: { title: "EN" } };
  // const { t } = useTranslation();
  // const { changeLanguage } = useContext(LanguageContext);
  // const langContainerRef = useRef(null);

  const isTablet = useMedia({ minWidth: "577px" });

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageChange = (locale) => {
    // i18n.changeLanguage(locale);
    // changeLanguage(locale);
    setIsOpen(false);
  };

  return (
    <header className="container h-16 flex justify-between items-center bg-header shadow-md w-full sticky">
      <a href="/" className="flex gap-2">
        <Image src={logo} height={33} width={31} alt="logo" />

        <p className="font-livvic text-xl	">Pocket Dictionary</p>
      </a>

      <div className="flex">
        {isTablet && (
          <div className="relative inline-block	cursor-pointer">
            <div
              className="w-10 h-10 bg-pink text-base rounded-full p-2.5 mr-16 cursor-pointer"
              onClick={toggleDropdown}
            >
              EN
              {/* {locales[i18n.language].title} */}
            </div>
            {isOpen && (
              <ul className="flex flex-col gap-4 absolute inset-0	bg-pink text-base rounded-full p-2.5 h-20 w-10">
                {Object.keys(locales).map((locale) => (
                  <li key={locale} onClick={() => handleLanguageChange(locale)}>
                    {locales[locale].title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="flex gap-2 items-center">
          {isTablet && <p className="text-base">Menu</p>}

          <Image src={burger} height={30} width={30} alt="burger" />
        </div>
      </div>
    </header>
  );
};
