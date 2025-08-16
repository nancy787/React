import React from "react";
import CodingGirl from "../assets/coding_girl.png";
import { useTranslation } from "react-i18next";

export default function About() {

const { t } = useTranslation();
    return (
        <div className="container w-full mx-auto flex flex-wrap justify-between bg-[#FFEED9] ">
          <div className="flex flex-col items-start justify-center max-w-lg  px-[30px]">
            <h1 className="text-5xl font-bold  text-left">
            <h1>{t("about.heading")}</h1>
            </h1>

            <p className="text-md WorkSans my-5 WorkSans">{t("about.description")}</p>
  
            <a
              href="/contact"
              className="inline-block focus-visible:ring  my-4  border-[#4E5E80] hover:bg-[#4E5E80] hover:text-white ease-out  border-2 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-300 px-[2em] py-[.9em]"
            >
              Contact Me
            </a>
          </div>
  
          <div className="flex flex-col items-center  justify-center ">
            <img
              src={CodingGirl}
              className="md:h-[30rem] sm:w-[30rem] px-[5rem] sm:px-0"
            />
          </div>
        </div>
    ) 
}