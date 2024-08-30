import React, { useState } from 'react';
import "../../styles/projectpage.css";
import Project1 from "../../asset/project/project1.png";
import Project2 from "../../asset/project/project2.png";
import Project3 from "../../asset/project/project3.png";
import Project4 from "../../asset/project/project4.png";
import Project5 from "../../asset/project/project5.png";
import Project6 from "../../asset/project/project6.png";
import Project7 from "../../asset/project/project7.png";
import Project8 from "../../asset/project/project8.png";
import Project9 from "../../asset/project/project9.png";

export default function Projects() {
    const projects = [
        {
            category: "Frontend Responsive Design Project",
            id: "1",
            name: "Organization Portfolio",
            description: "This project entails developing a portfolio website for an organization using React and Tailwind CSS. It showcases the organization's key information, projects, and achievements with a responsive and visually appealing design. The project is deployed on Vercel for seamless access and sharing.",
            image: Project8,
            deployement:"Vercel",
            url:"https://project-3-shivatex.vercel.app/",
        },
        {
            category: "MERN Stack Project",
            id: "2",
            name: "Data-log System",
            description: "This project involves creating an asset management system using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to manage and track various assets within an organization, including adding, updating, and deleting assets. Separate routes are implemented for admin and user functionalities, ensuring that each user role has access to the appropriate features. All routes are protected to ensure secure access based on user authentication. The project is deployed on Vercel for easy access and sharing.",
            image: Project7,
            deployement:"Vercel",
            url: "https://asset-management-app-amber.vercel.app/",
        },
        {
            category: "Mern Stack Project -one to many Relationship",
            id: "3",
            name: "Asset Management System",
            description: "This project involves developing an Asset Management System using the MERN stack (MongoDB, Express.js, React, and Node.js). It features a one-to-many relationship model to manage and track various assets within an organization, including functionalities for adding, updating, and deleting assets. The system includes separate routes for admin and user roles with protected access to ensure secure and efficient management. The project is deployed on Vercel for easy access and sharing.",
            image: Project9,
            deployement:"Render",
            url:"https://project-4-shivatex-app.onrender.com/",
        },
        {
            category:"Medium Project",
            id: "4",
            name: "Course List Application Using React",
            description: "This project involves creating a course list application using React that allows users to browse and filter courses based on different categories such as Full Stack Development, Data Science, Cyber Security, and Careers. The application dynamically displays the courses in each category, with an intuitive user interface and responsive design. Users can easily switch between categories using buttons, and the app ensures a seamless experience by efficiently filtering and rendering the courses. The project is designed with scalability in mind, allowing for easy addition of new courses and categories in the future.",
            image: Project4,
            deployement:"Netlify",
            url: "https://merry-cannoli-f1aa8e.netlify.app/",
        },
        {
            category:"Medium Project",
            id: "5",
            name: "React Axios Task",
            description: "This project involves creating a React application that utilizes Axios for data retrieval and manipulation, implementing CRUD operations. The project is deployed on Netlify for easy access and sharing.",
            image: Project5,
            deployement:"Netlify",
            url: "https://regal-pony-5e1b43.netlify.app/",
        },
        {
            category:"Medium Project",
            id: "6",
            name: "Daily Dress Suggestion App",
            description: "A Daily Dress Suggestion and Weather Suggestion App is a practical and interactive React application designed to help users choose appropriate outfits based on the current weather conditions. The app integrates real-time weather data and provides personalized clothing suggestions to ensure users are dressed comfortably for the day's weather.",
            image: Project6,
            deployement:"Vercel",
            url: "https://vercel.com/new/vishnuprasads-projects/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=capstone-frontend-dailysuggestion-8qph40jm2.vercel.app&projectName=capstone-frontend-dailysuggestion&s=https%3A%2F%2Fgithub.com%2Fvishnuprd%2Fcapstone-frontend-dailysuggestion&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1",
        },
        {
            category:"Basic Project",
            id: "6",
            name: "React Shopping Cart Task",
            description: "This project involves creating a basic shopping cart application using React for the frontend and CSS for styling. The application allows users to browse through a list of products. The project is deployed on Netlify for easy access and sharing.",
            image: Project1,
            deployement:"Netlify",
            url: "https://dynamic-travesseiro-509a50.netlify.app/",
        },
        {
            category:"Basic Project",
            id: "7",
            name: "Basic Calculator",
            description: "This project involves creating a basic calculator application using React for the frontend and CSS for styling. The project is deployed on Netlify for easy access and sharing.",
            image: Project2,
            deployement:"Netlify",
            url: "https://aquamarine-selkie-4598a8.netlify.app/",
        },
        {
            category:"Basic Project",
            id: "8",
            name: "Todo-list App",
            description: "This project involves creating a basic Todo-list application using React for the frontend. CRUD operations are implemented in this application, with CSS used for styling. The project is deployed on Netlify for easy access and sharing.",
            image: Project3,
            deployement:"Netlify",
            url: "https://courageous-dasik-438f62.netlify.app/",
        },
        
        
    ];

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="card bg-base-100 w-62 h-82 shadow-xl">
            <p className="text-xs badge badge-neutral">{project.category}</p>
            <figure className="px-6 pt-6">
                <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{project.name}</h2>
                <p>
                    {isReadMore ? project.description : `${project.description.substring(0,50)}...`}
                    <button onClick={toggleReadMore} className="text-blue-500">
                        {isReadMore ? "Read Less" : "Read More"}
                    </button>
                </p>
                <p className="text-xs ">{project.deployement}</p>
                <div className="card-actions">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}
