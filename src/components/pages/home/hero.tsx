"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <div className={cn(className, "py-8")} {...props}>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="size-12 rounded-full bg-accent-foreground">
            {/* <Image src={""} alt={""} className="size-full" /> */}
          </div>
          <div className="w-full flex-col space-y-4 md:w-max">
            <Heading className="">Luca Mezzavilla</Heading>
            <div>
              <h2 className="text-xl font-semibold">Software Engineer</h2>
              <p className="text-muted-foreground">
                Building digital solutions that solve real world problems
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link
                  href={siteConfig.links.resume}
                  className="gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={"grommet-icons:document"} className="size-6" />
                  Download CV
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href={siteConfig.links.linkedin}
                  className="gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={"devicon:linkedin"} className="size-6" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="flex w-max gap-2 rounded-md border p-2">
            <Icon icon={"mdi:eye"} className="size-6" />
            <h1>100</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
