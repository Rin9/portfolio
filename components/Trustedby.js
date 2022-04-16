import React from "react";
import Logos from "./Logos";

const Trustedby = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl lg:text-4xl mb-10 font-bold text-center">
          <span className="whitespace-nowrap">I love using:</span>{" "}
        </h3>
        <Logos />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10 ">
          <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
            I believe in good cummunication and a fully transparent development
            process.
          </h3>
        </div>
      </div>
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default Trustedby;
