"use client";

import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import projects from "@/config/projects";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

export interface ProjectDetails {
  params: { name: string };
}

// export async function _generateMetadata(
//   { params }: ProjectDetails,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const name = decodeURIComponent(params.name);

//   const project = projects.find((project) => project.name === name);

//   if (project === undefined) {
//     return {};
//   }

//   return {
//     title: `${project.displayName}, Luca Mezzavilla`,
//     description: project.description,
//     openGraph: {
//       images: [project.thumbnailUrl],
//     },
//   };
// }

const ProjectDetails: React.FC<ProjectDetails> = ({ params }) => {
  const name = decodeURIComponent(params.name);

  const project = projects.find((project) => project.name === name);

  if (project === undefined) {
    return (
      <div className="mx-auto flex h-screen w-[100vw] max-w-4xl items-center justify-center">
        <h1 className="text-xl lg:text-2xl">
          {'404: Could not find project "'}
          {name}
          {'"'}
        </h1>
      </div>
    );
  }

  return (
    <div
      className={
        "mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col items-start gap-4 bg-background p-8 md:gap-8"
      }
    >
      <Heading>{name}</Heading>
      <Image
        src={project.thumbnailUrl}
        width={1920}
        height={1080}
        alt={`${name} Thumbnail`}
        className="w-full rounded-2xl border"
      />
      <div className="flex w-full justify-between md:gap-16">
        <div className="flex justify-between gap-2 md:gap-4">
          <Button asChild>
            <Link
              href={project.demoUrl}
              className="flex gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={"mdi:eye"} className="size-6" />
              Visit
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={project.githubUrl}
              className="flex gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
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
