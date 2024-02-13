/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Project } from "../home/projects";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  project: Project;
}

const ProjectCard = ({ className, project }: ProjectCardProps) => {
  const projectUrl = `/projects/${encodeURIComponent(project.name)}`;

  return (
    <Link key={project.name} href={projectUrl}>
      <div className="flex w-full flex-col gap-4 overflow-clip rounded-md border transition-colors hover:bg-border">
        <Image
          src={project.thumbnailUrl}
          alt={`Image of my ${project.displayName} project`}
          width={1920}
          height={1080}
          className="w-full"
        />
        <div className="flex w-full flex-col gap-4 px-4 pb-4">
          <div>
            <h1 className="font-semibold">{project.displayName}</h1>
            <div className="flex justify-between">
              <h2 className="text-muted-foreground">{project.tag}</h2>
              <h2 className="text-muted-foreground">{project.date}</h2>
            </div>
          </div>
          <p className="text-sm">{project.description}</p>
          {/* <div className="flex justify-between">
            <Button variant="secondary" asChild>
              <Link href={project.demoUrl} className="flex gap-2" target="_blank" rel="noopener noreferrer">
                <Icon icon={"mdi:eye"} className="size-6" />
                Visit
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href={project.githubUrl} className="flex gap-2" target="_blank" rel="noopener noreferrer">
                <Icon icon={"mdi:github"} className="size-6" />
                Source
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
