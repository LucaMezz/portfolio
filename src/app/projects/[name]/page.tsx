"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import projects from "@/config/projects";

export interface ProjectDetailsProps extends React.HTMLAttributes<HTMLElement> {
  params: {name: string}
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ className, params, ...props }) => {
  const name = decodeURIComponent(params.name);

  const project = projects.find(project => project.name === name);

  if (project === undefined) {
    return <h1 className="text-xl text-muted-foreground lg:text-2xl">Could not find project {name}</h1>
  }

  return (
    <div className={cn(className, "mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-start gap-8 bg-background p-8")} {...props}>
      <Heading>{ name }</Heading>
      <Image src={project.thumbnailUrl} width={1920} height={1080} alt={`${name} Thumbnail`} className="w-full rounded-2xl border" />
      <div className="flex w-full justify-between gap-16">
        <div className="flex justify-between gap-4">
          <Button asChild>
            <Link href={project.demoUrl} className="flex gap-2" target="_blank" rel="noopener noreferrer">
              <Icon icon={"mdi:eye"} className="size-6" />
              Visit
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={project.githubUrl} className="flex gap-2" target="_blank" rel="noopener noreferrer">
              <Icon icon={"mdi:github"} className="size-6" />
              Source
            </Link>
          </Button>
        </div>
        <h1 className="text-muted-foreground">{project.date}</h1>
      </div>
    </div>
  );
};

export default ProjectDetails;