"use client";

import { ChangeEventHandler, useState } from "react";
import { NextPage } from "next";
import { Icon } from "@iconify/react";

import blogPosts from "@/config/blog-posts";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import BlogPostCard from "@/components/pages/blog/blog-post-card";
import ProjectCard from "@/components/pages/projects/project-card";

export type BlogPostTag = "Technical" | "Guide";

export interface BlogPost {
  name: string;
  title: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  bodyMarkdown: string;
  tags: BlogPostTag[];
}

const BlogPage: NextPage = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col items-start justify-start gap-8 bg-background px-8 pb-8 pt-6">
      <div className="sticky top-[72px] flex w-full flex-col items-start gap-4 bg-background py-4">
        <div>
          <Heading className="text-xl lg:text-2xl">Blog</Heading>
          <h1>A list of all the blog posts I have made.</h1>
        </div>
        <div className="flex w-full items-center gap-2 rounded-md border px-2">
          <Icon icon="tabler:search" className="size-6" />
          <Input
            value={search}
            onChange={handleSearchChange}
            className="border-0 p-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      {filteredPosts.length > 0 ? (
        <div className="grid w-full grid-cols-2 gap-4">
          {filteredPosts.map((post, index) => (
            <BlogPostCard post={post} key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-muted-foreground">No blog posts found.</h1>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
