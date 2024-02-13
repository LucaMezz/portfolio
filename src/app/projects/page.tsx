"use client";

import { ChangeEventHandler, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

import projects from "@/config/projects";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/pages/projects/project-card";

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
    <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-start justify-start gap-8 bg-background px-8 pb-8 pt-6">
      <div className="sticky top-[72px] flex w-full flex-col items-start gap-4 bg-background py-4">
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
      <div className="grid w-full grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
