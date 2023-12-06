import React from "react";

import { cn } from "@/lib/utils";

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {}

const Projects = ({ className, ...props }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className={cn(className, "bg-muted py-24")}
      {...props}
    >
      <div className="container text-2xl">Projects</div>
    </section>
  );
};

export default Projects;
