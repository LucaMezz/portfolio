"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <div className={cn(className, "py-8")} {...props}>
      <div className="flex space-x-4">
        <div className="size-12 rounded-full bg-accent-foreground">
          {/* <Image src={""} alt={""} className="size-full" /> */}
        </div>
        <div className="flex-col space-y-4">
          <Heading className="">Luca Mezzavilla</Heading>
          <div>
            <h2 className="text-xl font-semibold">Software Engineer</h2>
            <p className=" text-muted-foreground">
              Building digital solutions that solve real world problems
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="gap-2">
              <Icon icon={"grommet-icons:document"} className="size-6" />
              Download CV
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon icon={"devicon:linkedin"} className="size-6" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
