import React from "react";
import girlonComp from '../assets/girl_on_comp.png';
import { useTranslation } from "react-i18next";

function Work() {

  const { t } = useTranslation();

    return (
      <section className="relative bg-[#FFEED9] my-8 px-3 min-h-[50vh] flex flex-col justify-center items-center overflow-hidden">
  {/* Section Header */}
  <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 z-10">
    <h1 className="text-4xl font-semibold leading-none text-center">
      { t("work.title")}
    </h1>
  </div>

  {/* Background Image */}
  <img
    src={girlonComp}
    alt="Background Illustration"
    className="absolute opacity-10 w-[500px] h-[500px] object-contain -z-0"
  />

  {/* Project Cards */}
  <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2 z-10">
  {t("work.projects", { returnObjects: true }).map((project, index) => (
      <div key={index} className="flex flex-col items-center mx-12 lg:mx-0">
        <div className="relative text-center bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            {project.description}
          </p>
          <p className="text-sm font-semibold mb-2">
            <span className="text-indigo-500">Tech Stack:</span>{" "}
            {project.tech_stack}
          </p>
          {project.Features && (
            <p className="text-sm italic mb-2">
              <span className="text-indigo-500">Features:</span>{" "}
              {project.Features}
            </p>
          )}
          <div className="flex justify-center space-x-4 mt-4">
            {project.view && (
              <a
                href={project.view}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-xl bg-indigo-500 text-white hover:bg-indigo-600"
              >
                View
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-xl bg-gray-800 text-white hover:bg-gray-900"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        <span className="w-12 h-1 my-2 rounded-lg dark:bg-indigo-400"></span>
      </div>
    ))}
  </div>
</section>

    )
}

export default Work