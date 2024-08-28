import React, { useState } from 'react';
import Html from "../../asset/blogs/html.png";
import Css from "../../asset/blogs/css.png";
import Javascript from "../../asset/blogs/javascript.png";
import Reactjs from "../../asset/blogs/reactjs.png";
import Github from "../../asset/blogs/github.webp";
import Render from "../../asset/blogs/render.png";

export default function Blogs() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const blogs = [
        {
            id: "1",
            name: "HTML For Beginners",
            description: "HTML For Beginners is a comprehensive guide that introduces the fundamental concepts of HTML, the backbone of web development. This blog covers essential topics such as HTML tags, attributes, and basic structure, helping beginners build their first web pages with clear explanations and practical examples. Perfect for those starting their web development journey.",
            image: Html,
            url: "https://medium.com/@vishnuravichandran.28/html-for-beginners-dbbb56e4f360"
        },
        {
            id: "2",
            name: "CSS For Beginners",
            description: "An introduction to CSS, covering basic styling techniques to enhance the appearance of web pages. This blog explains CSS selectors, properties, and how to apply styles to HTML elements, providing a foundation for creating visually appealing designs.",
            image: Css, 
            url: "https://medium.com/@vishnuravichandran.28/css-for-beginners-83d7c5c765f7"
        },
        {
            id: "3",
            name: "Introduction To JavaScript",
            description: "JavaScript Essentials covers key concepts and features of JavaScript, including variables, functions, and control structures. This blog provides practical examples and explanations to help you understand and utilize JavaScript effectively in web development.",
            image: Javascript, 
            url: "https://medium.com/@vishnuravichandran.28/introduction-to-javascript-bd7265069f71"
        },
        {
            id: "4",
            name: "A Beginner’s Guide to Mastering JavaScript Programming",
            description: " introduction to JavaScript, a core technology of web development. This blog covers essential topics such as variables, functions, control structures, and object-oriented programming. With practical examples and easy-to-follow explanations, it’s ideal for those new to JavaScript, helping you build a solid foundation and start writing dynamic, interactive web applications with confidence.",
            image: Javascript,
            url: "https://medium.com/@vishnuravichandran.28/a-beginners-guide-to-mastering-javascript-programming-a6aad04dcbf3"
        },
        {
            id: "5",
            name: "Reactjs Complete Beginners ",
            description: "This blog provides an introduction to Node.js, focusing on its event-driven architecture and asynchronous capabilities. Learn how to use Node.js for server-side development and build scalable network applications.",
            image: Reactjs,
            url: "https://medium.com/@vishnuravichandran.28/react-js-complete-beginners-guide-84ee10a4c579"
        },
        {
            id: "6",
            name: "Understanding Pagination: A Guide for Developers",
            description: "pagination is to manage large datasets efficiently, including strategies for client-side and server-side pagination. This guide helps developers optimize performance and enhance user experience by breaking data into manageable chunks.",
            image: Reactjs, 
            url: "https://medium.com/@vishnuravichandran.28/understanding-pagination-a-guide-for-developers-dffe3d547d60"
        },
        {
            id: "7",
            name: "Essential Git Commands Every Developer Should Know",
            description: "  Git commands that are fundamental for version control in software development. This blog covers basic commands for tracking changes, branching, merging, and resolving conflicts, equipping developers with the knowledge to efficiently manage code repositories, collaborate with teams, and maintain a robust workflow. Perfect for those looking to enhance their version control skills and streamline their development process.",
            image: Github,
            url: "https://medium.com/@vishnuravichandran.28/essential-git-commands-should-know-f8eb9723f7e0"
        },
        {
            id: "8",
            name:"Render Deployment (free tier) of MERN App",
           description:"This blog provides step-by-step instructions on setting up your project for deployment, managing environment variables, and handling deployment configurations. Learn how to leverage Render's features to ensure smooth and cost-effective deployment of your MERN stack application, making it accessible to users with minimal overhead",
            image: Render, 
            url: "https://medium.com/@vishnuravichandran.28/render-deployment-free-tier-of-mern-app-442fe0817cc8"
        },
        {
            id: "9",
            name:"Creating Light/Dark mode on a React App with Context",
            description:" This blog walks through setting up a context provider to manage theme state, creating a theme switcher component, and applying conditional styling based on the current theme. Ideal for developers looking to enhance user experience by allowing users to choose their preferred display mode.",
            image: Reactjs,
            url: "https://medium.com/@vishnuravichandran.28/creating-light-dark-mode-on-a-react-app-with-context-e678eeb475ba"
        }

    ];

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {blogs.map((blog, index) => (
                            <li key={index}>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10`}>
                                    <time className="font-mono italic"></time>
                                    <div className="text-lg font-black">{blog.name}</div>
                                    <img src={blog.image} alt={blog.name} className="w-16 h-16" />
                                    <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                        Medium Link
                                    </a>
                                    <p className="mb-2">
                                        {expandedIndex === index
                                            ? blog.description
                                            : `${blog.description.substring(0, 100)}...`}
                                    </p>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="text-blue-500"
                                    >
                                        {expandedIndex === index ? "Show Less" : "show More"}
                                    </button>
                                    <br />
                                   
                                </div>
                                {index < blogs.length - 1 && <hr />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
