import React from "react";
import { ButtonMailto, SocialLinks} from "../pages/index";
import  Resume  from "../../public/nancy_kumari_resume.pdf";
import contactMeImg from "../assets/contact_me.png";

function Contact() {

    return(
        <section className="container mx-auto py-10 px-6 bg-[#FFEED9]">
        <div className="relative mb-12 flex justify-center items-center">
          <h1 className="text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold relative z-10 text-center">
            Let&apos;s Connect
          </h1>
          <img
            src={contactMeImg}
            alt="Decoration"
            className="absolute -top-6 right-1/2 translate-x-1/2 w-32 sm:w-40 md:w-48 object-contain opacity-10 z-0"
          />
      </div>
          <form>
            <div class="grid grid-cols-2 gap-5">
            <input
                type="text"
                value="Nancy"
                class="border border-gray-500 px-4 py-2 rounded focus:outline-none cursor-not-allowed"
                readOnly
              />
              <input
                type="text"
                class="border border-gray-500 px-4 py-2 rounded focus:outline-none cursor-not-allowed"
                Value="Kumari"
                readOnly
              />
              
                <ButtonMailto label="nancykumari2630@gmail.com" mailto="mailto:nancykumari2630@gmail.com" />
                <div class="flex items-center border border-gray-500 px-4 py-2  rounded cursor-not-allowed">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 text-gray-700 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-7.58 8-14A8 8 0 104 8c0 6.42 8 14 8 14z" />
                  </svg>
                  <span class="text-gray-800">Panchkula, Haryana, India</span>
                </div>
                <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 focus-visible:ring ring-[#4E5E80]  border-[#4E5E80] border-2 text-sm md:text-base font-semibold text-[#4E5E80] text-center rounded-lg outline-none transition duration-100 px-[5rem] py-2"
                  >
                    View Resume
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M7 21h10a2 2 0 002-2V9.828a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0012.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                      />
                    </svg>
                  </a>
                <SocialLinks/>
            </div>
          </form>
      </section>
    )
}

export default Contact;
