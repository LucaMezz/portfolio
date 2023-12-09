import React from "react";

// import { technologies } from "@/config/technologies";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export interface TechnologiesProps extends React.HTMLAttributes<HTMLElement> {}

const Technologies = ({ className, ...props }: TechnologiesProps) => {
  return (
    <section
      id="technologies"
      className={cn(className, "container py-24")}
      {...props}
    >
      <div className="container text-2xl">Technologies</div>
      <div className="grid grid-cols-4 grid-rows-4">
        {/* {technologies.map((technology, index) => {
          return (
            <Card className="p-4">
              <CardTitle>Frontend</CardTitle>
              <CardContent></CardContent>
            </Card>
          );
        })} */}
      </div>
    </section>
  );
};

export default Technologies;
