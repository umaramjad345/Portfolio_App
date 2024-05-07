import React from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs } from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <DiJavascript1 /> },
  { icon: <DiReact /> },
  { icon: <SiNextdotjs /> },
  { icon: <DiNodejs /> },
  { icon: <DiMongodb /> },
  { icon: <DiPython /> },
  { icon: <DiGit /> },
  { icon: <SiFirebase /> },
];

const Skills = () => {
  return (
    <>
      <h2 className="text-5xl my-8 p-2 w-fit mx-auto text-ternary-dark dark:text-ternary-light">
        Skills
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {skillIcons.map((skill) => (
          <div className="w-48 h-40 flex items-center justify-center text-6xl text-ternary-dark dark:text-ternary-light rounded-xl border-2 border-ternary-dark dark:border-ternary-light transition-all duration-300 hover:scale-105">
            {skill.icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
