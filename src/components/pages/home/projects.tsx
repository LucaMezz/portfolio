/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

import ProjectCard from "../projects/project-card";

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {
  projects: Project[];
}

export type ProjectType =
  | "Front-End Development"
  | "Back-End Development"
  | "Full-Stack Development";

export interface Project {
  name: string;
  displayName: string;
  thumbnailUrl: string;
  demoUrl: string;
  githubUrl: string;
  date: string;
  tag: ProjectType;
  description: string;
}

const Projects = ({ className, ...props }: ProjectsProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <div className="flex flex-col items-start gap-y-4">
        <div className="flex w-full items-end justify-between">
          <Heading className="text-xl lg:text-2xl">Featured Projects</Heading>
          <Button variant="link" asChild>
            <Link href={"/projects"} className="-mb-1 flex gap-2">
              <Icon icon={"mdi:eye"} className="size-6" />
              View All
            </Link>
          </Button>
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          {props.projects.slice(0, 4).map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
