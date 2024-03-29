"use client";

import { ChangeEventHandler, useState } from "react";
import { Metadata, NextPage } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

import projects from "@/config/projects";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/pages/projects/project-card";

// export const metadata: Metadata = {
//   title: "Projects - Luca Mezzavilla",
//   description: "A list of all the personal projects that I have built.",
// };

const ProjectsPage: NextPage = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.displayName.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tag.toLowerCase().includes(search.toLowerCase()) ||
      project.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col items-start justify-start gap-8 bg-background px-8 pb-8 pt-6">
      <div className="sticky top-[56px] flex w-full flex-col items-start gap-4 bg-background py-4 md:top-[72px]">
        <div>
          <Heading className="text-xl lg:text-2xl">Projects</Heading>
          <h1>A list of all the personal projects that I have built.</h1>
        </div>
        <div className="flex w-full items-center gap-2 rounded-md border px-2">
          <Icon icon="tabler:search" className="size-6" />
          <Input
            value={search}
            onChange={handleSearchChange}
            className="border-0 p-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      {filteredProjects.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-muted-foreground">No projects found.</h1>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
