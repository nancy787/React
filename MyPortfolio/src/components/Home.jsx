import React from "react";
import girlImage from '../assets/girl.png';
import  Resume  from "../../public/nancy_kumari_resume.pdf";
import {Contact, About, Work, VideoCard}  from "../pages/index";
import { useTranslation } from "react-i18next";

function Home() {

  const ButtonMailTo = ( email) => {
    window.location.href = `mailto:${email}`;
  } 
  const { t } = useTranslation();

    return(
        <div className="bg-[#FFEED9] min-h-screen max-w-screen-2xl px-4 container mx-auto ">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-between">
            <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
              <button className="bg-[#FFDDBF] md:text-lg xl:text-xl font-semibold rounded-xl mb-4 md:mb-6 px-4 py-3">
                👋 { t("home.wave") }
              </button>
  
              <h1 className="text-black-800 flex flex-col justify-start items-start text-[40px]  sm:text-6xl md:text-5xl font-bold mb-8 md:mb-12">
              { t("home.name") }
                <span className="py-3 text-3xl">{ t("home.title") }</span>
                <span className="text-xl">(PHP | Laravel | Symfony | MySQL | React)</span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <button 
                className="inline-block bg-[#4E5E80]  cursor-pointer focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-[5rem] py-5"
                onClick={() => ButtonMailTo("nancykumari2630@gmail.com")}
                >
                { t("home.btn_email") }
                </button>
                <a
                  href={Resume}
                  target="_blank"
                  className="inline-block focus-visible:ring   ring-[#4E5E80] border-[#4E5E80] border-2 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-[5rem] py-5"
                >
                { t("home.btn_resume") }
                </a>
              </div>
            </div>
          </div>
          <div className=" h-[40rem] overflow-hidden ">
            <img
              src={girlImage}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-center  justify-center">
          </div>
        </section>
        <hr className="my-8 border-gray-300" />
        <section>
        <div className="min-h-screen flex items-center justify-center bg-[#FFEED9]">
          <VideoCard
            title={ t("home.introduction") }
            description={ t("home.video") }
            className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-md"
          />
      </div>
        </section>
        <hr className="my-8 border-gray-300" />
        <section>
          <About  />
        </section>
        <hr className="my-8 border-gray-300" />
        <section>
          <Work/>
        </section>
        <hr className="my-8 border-gray-300" />
        <section>
          <Contact/>
        </section>
      </div>
    )
}

export default Home;