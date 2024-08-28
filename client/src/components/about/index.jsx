import React from 'react';
import 'boxicons/css/boxicons.min.css';
import "../../styles/aboutpage.css";

export default function About() {
  const AboutItems = [
    { id: "1", icon: "bx bxl-react", name: "React" },
    { id: "2", icon: "bx bxl-nodejs", name: "Node.js" },
    { id: "3", icon: "bx bxl-mongodb", name: "MongoDB" },
    { id: "4", icon: "bx bxl-javascript", name: "JavaScript" },
    { id: "5", icon: "bx bxl-github", name: "GitHub" },
    { id: "6", icon: "bx bxl-git", name: "Git" },
    { id: "7", icon: "bx bxl-aws", name: "AWS" }
  ];

  const ModalItems = [
    {
      id: "1",
      title: "About Me",
      description: "Firm web developer with an engineering background, specializing in crafting responsive, high-performance websites and creating scalable, efficient products. My transferable skills from electrical engineering, such as innovative thinking and problem-solving, enhance my ability to design and develop software solutions. I am an avid learner, continuously expanding my technical expertise and seeking new challenges. I look forward to working on innovative projects and contributing to dynamic teams."
    },
    {
      id: "2",
      title: "Education",
      description: "Bachelor of Electrical And Electronics Engineering,- Info Institute Of Engineering and Technology, Coimbatore",
      year: "2011-2015",
      description2: "Geethanjalee Matriculation Higher Secondary School, Coimbatore",
      year2: "2011",
      description3: "The Suburban Matriculation Higher Secondary School, Coimbatore",
      year3: "2009"
    },
    {
      id: "3",
      title: "Skills",
      description: "HTML, CSS, JavaScript, React, Node.js, MongoDB, Git, GitHub, AWS",
      languages: "English, Tamil",
      frameworks: "Bootstrap, Material UI, Daisy UI",
      tools: "VS Code, Postman, Chrome DevTools, Redux DevTools, Vercel, Render",
      database: "MongoDB"
    },
    {
      id: "4",
      title: "Experience",
      description: "xyz company",
      year: "",
      description2: "xyz company",
      year2: ""
    }
  ];

  return (
    <div className="hero bg-base-200 min-h-screen p-4">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-8">
        <div className="main flex flex-col items-center w-full lg:w-1/2">
          <div className="up grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3">
            {AboutItems.map(item => (
              <div
                key={item.id}
                className="cursor-pointer border p-4 rounded-lg hover:scale-105 transition-transform duration-500 flex flex-col items-center"
              >
                <div className="icon-container flex items-center justify-center">
                  <i className={item.icon + " text-3xl"}></i>
                </div>
                <div className="icon-name mt-2 text-lg text-center">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto lg:w-1/2">
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight py-6">Get To Know More</h1>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">About Me</h3>
          <div className="flex w-full flex-col md:flex-row items-center md:items-start">
            <div className="card rounded-box grid h-20 flex-grow place-items-center m-2">
              <i className='bx bx-bulb text-3xl'></i> 
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">Experience</h3>
            </div>
            <div className="divider divider-horizontal hidden md:block">|</div>
            <div className="card rounded-box grid h-20 flex-grow place-items-center m-2">
              <i className='bx bxs-graduation text-3xl'></i> 
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">Frontend/Full Stack Developer</h3>
            </div>
          </div>
          <div className="card-body mt-6">
            <div className="join join-vertical w-full">
              {ModalItems.map(item => (
                <div key={item.id} className="collapse collapse-arrow join-item border-base-300 border mb-2">
                  <input type="radio" name="accordion" id={`accordion-${item.id}`} className="hidden" />
                  <label htmlFor={`accordion-${item.id}`} className="collapse-title text-xl font-medium cursor-pointer">
                    {item.title}
                  </label>
                  <div className="collapse-content p-4">
                    {item.description && (
                      <p className="mb-4">
                        {item.description} {item.year && <span>({item.year})</span>}
                      </p>
                    )}
                    {item.description2 && (
                      <p className="mb-4">
                        {item.description2} {item.year2 && <span>({item.year2})</span>}
                      </p>
                    )}
                    {item.description3 && (
                      <p className="mb-4">
                        {item.description3} {item.year3 && <span>({item.year3})</span>}
                      </p>
                    )}
                    {item.frameworks && (
                      <p className="mb-4">Frameworks: {item.frameworks}</p>
                    )}
                    {item.tools && (
                      <p className="mb-4">Tools: {item.tools}</p>
                    )}
                    {item.database && (
                      <p className="mb-4">Database: {item.database}</p>
                    )}
                    {item.languages && (
                      <p className="mb-4">Languages: {item.languages}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
