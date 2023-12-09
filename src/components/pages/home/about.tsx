import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section id="about" className={cn(className, "bg-muted py-24")} {...props}>
      <div className="container grid grid-cols-4 grid-rows-4 gap-4">
        <Card className="col-span-1 row-span-1 bg-gradient-to-br from-[#0c131f] to-[#090a0c]">
          <CardContent className="p-4">
            <p>I am a second year computer science student from Australia.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
