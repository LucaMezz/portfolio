"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { Link as SmoothLink } from "react-scroll";
import { Parallax } from "react-scroll-parallax";

import { SocialLink } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {}

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <section
      className={cn(
        className,
        "container flex h-[calc(100vh-5rem)] min-h-[48rem] flex-col gap-x-16 lg:min-h-0"
      )}
      id="hero"
      {...props}
    >
      <div className="flex h-[75vh] min-h-[3rem] flex-col justify-between gap-2 lg:flex-row lg:gap-12">
        <div className="flex h-max min-w-max flex-col gap-4 py-6 lg:col-span-2 lg:py-24">
          <h1 className="text-5xl lg:text-6xl">
            {"Hi, I'm"}
            <br />
            <span className="inline-block whitespace-pre-wrap bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text font-bold text-transparent lg:whitespace-normal">
              {"Luca \nMezzavilla"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">Software Engineer</p>
          <div className="mt-6 flex items-center gap-4">
            <Button className="bg-green-500">Download CV</Button>
            <Link
              href={"https://au.linkedin.com/in/lucamezzavilla"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant={"outline"}>
                <FaLinkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative mt-4 min-h-[24rem] grow lg:mt-12">
          <Image
            fill
            src={"/home/hero-illustration-backdrop.svg"}
            alt="Isometric illustration of a laptop with code"
            className="invert dark:invert-0"
          />
          <Image
            fill
            src={"/home/hero-illustration-3.svg"}
            alt="Isometric illustration of a laptop with code"
          />
        </div>
      </div>
      <div className="mb-8 hidden lg:inline">
        <Button
          className="h-18 w-18 cursor-pointer rounded-full bg-green-500 p-4"
          asChild
        >
          <SmoothLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <FaArrowDown className="h-14 w-14" />
          </SmoothLink>
        </Button>
      </div>

      {/* <div className="col-span-2 flex flex-col justify-between py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl">
            {"Hi, I'm "}
            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text font-bold  text-transparent">
              Luca Mezzavilla
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground">Software Engineer</p>
          <div className="flex items-center gap-4">
            <Button className="bg-green-500">Download CV</Button>
            <Button variant={"outline"}>
              <FaLinkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
        <div>
          <Button className="h-18 w-18 rounded-full bg-green-500 p-4" asChild>
            <SmoothLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <FaArrowDown className="h-14 w-14" />
            </SmoothLink>
          </Button>
        </div>
      </div>
      <div className="relative col-span-3">
        <Image
          fill
          src={"/home/hero-illustration.svg"}
          alt="Isometric illustration of a laptop with code"
        ></Image>
      </div> */}
    </section>
  );
};

export default Hero;
