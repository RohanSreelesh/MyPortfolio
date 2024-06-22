import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

import { ProjectCardProps } from '../../types/type';


const  ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="project-card-container rounded-xl shadow-xl p-6 w-full flex flex-col justify-between md:h-[50rem] lg:h-[50rem] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col space-y-6 md:space-y-10 lg:space-y-12">
          <div className="w-full flex justify-center">
            <Link href={project.link}>
              <div className="image-container">
                <Image
                  src={project.image}
                  alt=""
                  layout="fill"
                  className="rounded-xl shadow-xl hover:opacity-70 object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
            <div className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 h-[20rem] md:h-[14rem] overflow-y-auto"> {/* Set a fixed height and handle overflow */}
              {project.description}
            </div>
            <div className="flex flex-wrap justify-start">
              <h2 className="text-2xl font-bold mb-4 w-full">Tech Stack:</h2>
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 px-2 py-1 mr-2 mb-2 text-gray-500 rounded font-semibold text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="md:flex space-x-4">
            <Link href={project.github} target="_blank">
              <BsGithub
                size={30}
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ProjectCard;
