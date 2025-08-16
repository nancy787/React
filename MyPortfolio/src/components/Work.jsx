import React from "react";
import girlonComp from '../assets/girl_on_comp.png';

function Work() {

  let projects = [
    {
          title : 'Bebaan Recruitment',
          description : 'Bebaan Recruitment is a fast-growing recruitment and business platform that bridges the gap between job seekers and companies. The platform enables candidates to create detailed profiles, apply for positions, and communicate directly with employers, while companies can post job listings, manage applications, and shortlist suitable candidates efficiently. Designed for scalability and ease of use, the platform also supports secure user authentication, real-time notifications, and integrated messaging to streamline the hiring process.',
          tech_stack : 'PHP, Laravel, MySQL, Vuejs',
          Features : 'private & group chats, notifications, member management.',
          view : 'https://www.bibaan.net/',
          link : 'https://github.com/nancy787/admin.bibaan.net'
    },
    {
      title : 'Rox Tickets',
      description : 'Rox Tickets is a hybrid mobile application designed for buying and selling tickets to fitness races and sporting events worldwide. The platform provides athletes and event organizers with a secure marketplace to manage ticket sales, track registrations, and handle payments seamlessly. With integrated Stripe webhooks, it supports real-time payment processing and automated notifications, ensuring a smooth user experience for both buyers and sellers.',
      tech_stack : 'PHP, Laravel, MySQL, javascript, Ajax, jquery, Stripe Webhooks. Freshchat, Firebase, React Native (hybrid app)',
      view : 'https://apps.apple.com/in/app/rox-tickets/id6736522829'
    },
    {
          title : 'Personal portfolio',
          description :'A personal portfolio website built to showcase my skills, projects, and professional experience as a software developer. The site features a clean and responsive design, ensuring accessibility across devices. It highlights project case studies, technical expertise, and an integrated contact form, making it easier for potential employers and collaborators to connect. Optimized for performance and SEO, the portfolio is designed to provide a fast, professional, and engaging user experience.',
          view  : '#',
          tech_stack : 'React, tailwindCss',
          link : 'https://github.com/nancy787/React/tree/master/MyPortfolio'
    },
    {
      title : 'Onlne Food Delivery',
      description : 'An online food delivery web application that allows users to browse restaurants, explore menus, place orders, and make secure online payments. The platform supports real-time order tracking, restaurant management, and customer notifications for a seamless food ordering experience.',
      tech_stack : 'PHP, MySQL, Paypal Webhooks',
      link : 'https://github.com/nancy787/Online_Food_Delivery',
      view : '#',
    }
  ]
    return (
      <section className="relative bg-[#FFEED9] my-8 px-3 min-h-[50vh] flex flex-col justify-center items-center overflow-hidden">
  {/* Section Header */}
  <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 z-10">
    <h1 className="text-4xl font-semibold leading-none text-center">
      My Work
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
    {projects.map((project, index) => (
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