import React, { useState } from "react";

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center mb-2">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 fill-current text-gray-700 dark:text-gray-300"
        >
          <path d={skill.icon.path} />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col justify-center items-center p-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-red-600 h-2.5 rounded-full"
              style={{ width: `${skill.progress}%` }}
            ></div>
          </div>
          <p className="text-white text-center text-sm">{skill.description}</p>
        </div>
      )}
    </div>
  );
}

export default SkillCard;
