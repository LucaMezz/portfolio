"use client";

import Link from "next/link";
import { ParallaxProvider } from "react-scroll-parallax";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import About from "@/components/pages/home/about";
import Contact from "@/components/pages/home/contact";
import Hero from "@/components/pages/home/hero";
import History from "@/components/pages/home/history";
import Projects from "@/components/pages/home/projects";
import Technologies from "@/components/pages/home/technologies";

export default function IndexPage() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <History />
      <Contact />
    </ParallaxProvider>
  );
}
