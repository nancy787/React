import React from "react";
import CodingGirl from "../assets/coding_girl.png";

export default function About() {

const AboutData = [
    {
      sortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et risus sapien. Aliquam tempus sapien non laoreet posuere.      ",
      description:
        "“I am a software developer with over 3 years of experience designing and building scalable web applications. My expertise lies in backend development using PHP, Laravel and Symfony, where I have worked extensively on API integrations, subscription systems, and performance optimization. I am also skilled in database design and management with MySQL,Postgresql, ensuring efficient and reliable data handling. On the frontend, I enjoy creating user-friendly and responsive interfaces with React. I am passionate about writing clean, maintainable code and delivering solutions that balance technical precision with real business needs..”",
    },
  ];

    return (
        <div className="container w-full mx-auto flex flex-wrap justify-between ">
          <div className="flex flex-col items-start justify-center max-w-lg  px-[30px]">
            <h1 className="text-5xl font-bold  text-left">
              A Little Bit About Me
            </h1>

            <p className="text-md WorkSans my-5 WorkSans">{AboutData[0].description}</p>
  
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