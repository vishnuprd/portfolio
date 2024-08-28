import React, { useContext } from "react";
import { ThemeContext } from "../../context/darkmodecontext.js";
import Profilephoto from "../../asset/profilephoto.png";
import "boxicons/css/boxicons.min.css";
import "../../styles/heropage.css";
import Typewriter from "typewriter-effect";
import "../../styles/heropagetooltip.css";
import "../../styles/imagestyle.css";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`hero ${theme === "dark" ? "dark" : "light"} min-h-screen relative flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8`}>
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between relative z-10 w-full lg:w-3/4">
       
        <div className="flex justify-center lg:justify-end mb-6 lg:mb-0">
          <div className="card-heropage rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] overflow-hidden shadow-lg">
            <img
              className="rounded-full object-cover"
              src={Profilephoto}
              alt="profile-photo"
              width={250}
              height={250}
            />
          </div>
        </div>
        
      
        <div className="text-center lg:text-left lg:mr-8">
         
          <div className="flex flex-col lg:flex-row items-center mb-4">
            <div className="icon-container mb-2 lg:mb-0 lg:mr-4">
              <a href="https://www.linkedin.com/in/vpd93/" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-linkedin text-4xl"></i>
              </a>
              <div className="tooltip">LinkedIn</div>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight dark:text-green-400 dark:glow">
              Vishnu Prasad .R
            </h1>
          </div>
          
        
          <div className="flex flex-col lg:flex-row items-center mb-6">
            <div className="icon-container mb-2 lg:mb-0 lg:mr-4">
              <a href="https://github.com/vishnuprd" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github text-4xl"></i>
              </a>
              <div className="tooltip">GitHub</div>
            </div>
            <h1 className="text-lg md:text-xl font-semibold tracking-tight">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Frontend Developer", "Full Stack Developer"],
                }}
              />
            </h1>
          </div>
          
         
          <h4 className="py-4 mt-6 border-l-2 pl-6 italic text-sm md:text-base lg:text-lg">
            I believe anything can be overcome through
            <br />
            commitment and hard work. Always up for learning new things
          </h4>
        
         
          <div className="tooltip mt-4" data-tip="See More About Me 👇">
            <button className="btn">Hello👋</button>
          </div>
        </div>
      </div>
    </div>
  );
}
