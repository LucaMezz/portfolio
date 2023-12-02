import React from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <div
      className={cn(
        className,
        "container grid h-[calc(100vh-5rem)] grid-cols-1 gap-x-16 lg:grid-cols-5"
      )}
      {...props}
    >
      <div className="col-span-2 flex flex-col justify-between py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl">
            {"Hi, I'm "}
            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text font-bold  text-transparent">
              Luca
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground">Software Engineer</p>
        </div>
        <div>
          <Button className="h-18 w-18 rounded-full bg-green-500 p-4">
            <FaArrowDown className="h-14 w-14" />
          </Button>
        </div>
      </div>
      <div className="relative col-span-3">
        <Image
          fill
          src={"/home/hero-illustration.svg"}
          alt="Isometric illustration of a laptop with code"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
