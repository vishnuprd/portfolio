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
    <div className={`hero ${theme === "dark" ? "dark" : "light"} min-h-screen relative`}>
      <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
        <div className="card-heropage rounded-full w-[300px] h-[300px]">
          <div className="card2-heropage rounded-full shadow-lg">
            <img
              className="rounded-full"
              src={Profilephoto}
              alt="profile-photo"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div>
        
          <div className="flex items-center mb-4">
            <div className="icon-container">
              <a href="https://www.linkedin.com/in/vpd93/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin text-4xl"></i>
              </a>
              <div className="tooltip">LinkedIn</div>
            </div>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl dark:text-green-400 dark:glow">
  Vishnu Prasad .R
</h1>
          </div>
        
          <div className="flex items-center mb-6">
            <div className="icon-container">
              <a href="https://github.com/vishnuprd" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github text-4xl"></i>
              </a>
              <div className="tooltip">GitHub</div>
            </div>
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
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
         
          <h4 className="py-4 mt-6 border-l-2 pl-6 italic">
            I believe anything can be overcome through
            <br />
            commitment and hard work. Always up for learning new things
          </h4>
          <div className="tooltip" data-tip="See More About Me 👇">
            <button className="btn">Hello👋</button>
          </div>
        </div>
      </div>
    </div>
  );
}
