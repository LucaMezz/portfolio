import React from "react";

import { cn } from "@/lib/utils";

export interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About = ({ className, ...props }: AboutProps) => {
  return (
    <div className={cn(className, "w-[80%] px-16 pb-6")} {...props}>
      <p className="text-muted-foreground">
        {"Hey, I'm "}
        <span className="font-semibold text-foreground">Luca Mezzavilla</span>
        {". I am a computer science student at "}
        <span className="font-semibold text-foreground">Monash University</span>
        {" located in "}
        <span className="font-semibold text-foreground">
          Victoria, Australia
        </span>
        {". I work as a "}
        <span className="font-semibold text-foreground">Software Engineer</span>
        {" and always strive to deliver "}
        <span className="font-semibold text-foreground">
          High-quality software
        </span>
        {"."}
      </p>
    </div>
  );
};

export default About;
