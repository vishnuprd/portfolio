import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import "../../styles/projectpage.css";

function ProjectCard({ project }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <motion.div
      className="card bg-base-100 w-62 h-82 shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}  // Animation start state
      animate={{ opacity: 1, scale: 1 }}  // Animation end state
      transition={{ duration: 0.5, ease: "easeOut" }}  // Animation properties
      whileHover={{ scale: 1.05 }}  // Hover effect
      whileTap={{ scale: 0.95 }}  // Tap effect
    >
      <p className="text-xs badge badge-neutral">{project.category}</p>
      <figure className="px-6 pt-6">
        <img src={project.image} alt={project.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project.name}</h2>
        <p>
          {isReadMore ? project.description : `${project.description.substring(0, 50)}...`}
          <button onClick={toggleReadMore} className="text-blue-500">
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <p className="text-xs">{project.deployement}</p>
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
    </motion.div>
  );
}
