import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./Slider";
import htmlLogo from "/assets/logos/html_logo.svg";
import cssLogo from "/assets/logos/css_logo.svg";
import jsLogo from "/assets/logos/javascript_logo.svg";
import reactLogo from "/assets/logos/react_logo.svg";
import nextLogo from "/assets/logos/nextjs_logo.svg";
import tailwindLogo from "/assets/logos/tailwindcss_logo.svg";
import chakrauiLogo from "/assets/logos/chakraui_logo.png";

const Logos = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src={htmlLogo}
            width={150}
            height={50}
            alt="html logo"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={cssLogo}
            width={150}
            height={50}
            alt="css logo"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={jsLogo}
            width={150}
            height={50}
            alt="js logo"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={reactLogo}
            width={150}
            height={50}
            alt="react logo"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={nextLogo}
            width={150}
            height={50}
            alt="next logo"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={tailwindLogo}
            width={150}
            height={50}
            alt="tailwind logo"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={chakrauiLogo}
            width={150}
            height={50}
            alt="chakra logo"
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default Logos;
