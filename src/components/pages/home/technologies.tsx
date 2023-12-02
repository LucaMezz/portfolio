import React from "react";

import { cn } from "@/lib/utils";

export interface TechnologiesProps extends React.HTMLAttributes<HTMLElement> {}

const Technologies = ({ className, ...props }: TechnologiesProps) => {
  return (
    <section
      id="technologies"
      className={cn(className, "bg-muted py-24")}
      {...props}
    >
      <div className="container">Technologies</div>
    </section>
  );
};

export default Technologies;
