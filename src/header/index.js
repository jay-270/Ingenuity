import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between items-center self-stretch mr-5 ml-5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a93cee327670ebef01d25d9ea06b7bebd0da4406f6dd616c6e902a7f5138f97?apiKey=ad090e654a114eb4b43d2625c6bd6624&"
          className="shrink-0 self-stretch max-w-full aspect-[2.17] w-[202px]"
          alt="img"
        />
        <div className="flex gap-5 self-stretch my-auto text-base font-medium leading-6 text-black max-md:flex-wrap max-md:max-w-full">
          <main>
            <HashLink
              to={"/#home"}
              className="hover:text-red-700 p-3 text-base"
            >
              Home
            </HashLink>
            <HashLink
              to={"/#about"}
              className="hover:text-red-700 p-3 text-base"
            >
              About
            </HashLink>
            <HashLink to={"/#services"} className="hover:text-red-700 p-3 text-base">
              Services
            </HashLink>
          </main>
        </div>
        <HashLink to={"/#footer"}><div className="justify-center self-stretch px-10 py-5 my-auto text-base font-semibold leading-5 text-center text-white capitalize bg-violet-700 rounded max-md:px-5 hover:bg-red-700">
          let’s talk
        </div>
          </HashLink>
      </div>
    </div>
  );
};

export default Header;
