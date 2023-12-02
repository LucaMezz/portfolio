import React from "react";

import { cn } from "@/lib/utils";

export interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section id="about" className={cn(className, "bg-muted py-24")} {...props}>
      <div className="container">About</div>
    </section>
  );
};

export default About;
