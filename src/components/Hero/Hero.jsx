"use client";
import React from "react";
import Image from "next/image";
import { useMedia } from "use-media";

import hero from "../../assets/images/hero.jpg";
import hero2 from "../../assets/images/hero@2x.jpg";

export const Hero = () => {
  const isMobile = useMedia({ maxWidth: "576px" });
  const isTablet = useMedia({ minWidth: "577px" });

  return (
    <section className={isTablet ? "container bg-header" : "bg-header"}>
      <div className="md:flex md:gap-12 lg:gap-24 md:pt-16">
        <div className="md:w-1/2">
          <div className={isMobile ? "container" : ""}>
            <h1 className="text-3xl leading-loose text-center md:text-start	py-3.5 md:text-6xl md:mb-11	">
              Welcome to Pocket Dictionary!
            </h1>
          </div>
          {isMobile && (
            <Image
              srcSet={`${hero} 1x, ${hero2} 2x`}
              src={hero}
              alt="phone screen"
              className="mb-7"
            />
          )}
          <div className={isMobile ? "container" : ""}>
            <p className="text-base leading-7 mb-10">
              Searching for a word and its definition has become even easier
              with our convenient online dictionary. We offer you quick and easy
              access to thousands of words and phrases to help you expand your
              vocabulary and improve your language confidence.
            </p>
            <button className="leading-7 bg-orange p-4 rounded-full mb-14 w-36">
              Get Started
            </button>
          </div>
        </div>
        {isTablet && (
          <Image
            srcSet={`${hero} 1x, ${hero2} 2x`}
            src={hero}
            alt="phone screen"
            width={550}
            height={445}
            className="sm:mx-auto mb-24"
          />
        )}
      </div>
    </section>
  );
};
