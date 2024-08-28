import React from 'react';
import { Link } from 'react-router-dom'; 
import "../../styles/dockpage.css";

export default function Dock() {
    const dockItems = [
        {
            id: "1",
            name: "Home",
            path: "/",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: "2",
            name: "About",
            path: "/about",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: "3",
            name: "Github",
            path: "https://github.com/vishnuprd",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            external: true 
        },
        {
            id: "4",
            name: "LinkedIn",
            path: "https://www.linkedin.com/in/vpd93/",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h16v16H4V4zm0-2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4z" />
                </svg>
            ),
            external: true
        },
    ];

    return (
        <ul className="fixed bottom-8 left-1/2 transform -translate-x-1/2 menu menu-horizontal bg-base-200 text-black rounded-box rounded-t-xl shadow-lg p-2 flex items-center space-x-4 max-w-3xl">
            {dockItems.map(item => (
                <li key={item.id} className="relative group flex items-center">
                    {item.external ? (
                        <a
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                        >
                            {item.icon}
                        </a>
                    ) : (
                        <Link
                            to={item.path}
                            className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                        >
                            {item.icon}
                        </Link>
                    )}
                    <span 
                        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        {item.name}
                    </span>
                </li>
            ))}
        </ul>
    );
}
