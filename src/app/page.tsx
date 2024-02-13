import { NextPage } from "next";
import Link from "next/link";

import education from "@/config/education";
import experience from "@/config/experience";
import projects from "@/config/projects";
import { siteConfig } from "@/config/site";
import technologies from "@/config/technologies";
import { buttonVariants } from "@/components/ui/button";
import About from "@/components/pages/home/about";
import Education from "@/components/pages/home/education";
import Experience from "@/components/pages/home/experience";
import Featured from "@/components/pages/home/featured";
import Hero from "@/components/pages/home/hero";
import Projects from "@/components/pages/home/projects";
import Technologies from "@/components/pages/home/technologies";
import Footer from "@/components/layout/footer";
import blogPosts from "@/config/blog-posts";

const IndexPage: NextPage = () => {
  return (
    <div className="mx-auto grid max-w-4xl items-center gap-6 bg-background px-8 pb-8 pt-2 md:py-4">
      <Hero />
      <About />
      <Projects projects={projects} />
      <Technologies technologies={technologies} />
      <Experience experience={experience} />
      <Education education={education} />
      <Featured posts={blogPosts} />
    </div>
  );
};

export default IndexPage;
