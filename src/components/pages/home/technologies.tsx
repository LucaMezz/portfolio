"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import { Technologies } from "@/config/technologies";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export interface Technology {
  name: string;
  icon: string;
  href: string;
}

export interface TechnologiesProps extends React.HTMLAttributes<HTMLElement> {
  technologies: Technologies;
}

const Technologies = ({ className, ...props }: TechnologiesProps) => {
  return (
    <div className={cn(className, "py-8")} {...props}>
      <div className="flex flex-col items-start gap-y-4">
        <Heading className="text-xl lg:text-2xl">Technologies</Heading>
        <TechnologySection title="Languages" technologies={props.technologies.languages} />
        <TechnologySection title="Frameworks" technologies={props.technologies.frameworks} />
        <TechnologySection title="Services" technologies={props.technologies.services} />
        <TechnologySection title="Applications" technologies={props.technologies.applications} />
      </div>
    </div>
  );
};

interface TechnologySection extends React.HTMLAttributes<HTMLElement> {
  title: string;
  technologies: Technology[];
}

const TechnologySection = ({ className, ...props }: TechnologySection) => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <h2>{ props.title }</h2>
      <div className="grid w-full grid-cols-4 gap-2">
        {
          props.technologies.map(technology => (
            <Button key={technology.name} variant="outline" className="h-12 justify-start gap-2 rounded-md border p-2" asChild>
              <Link href={technology.href} target="_blank" rel="noopener noreferrer">
                <div className="size-10 p-1">
                  <Icon icon={technology.icon} className="size-full" />
                </div>
                <h1 className="text-md">{technology.name}</h1>
              </Link>
            </Button>
          ))
        }
      </div>
    </div>
  );
}

export default Technologies;