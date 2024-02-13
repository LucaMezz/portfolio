import React from "react";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import { BlogPost } from "@/app/blog/page";

import BlogPostCard from "../blog/blog-post-card";

export interface FeaturedProps extends React.HTMLAttributes<HTMLElement> {
  posts: BlogPost[];
}

const Featured = ({ className, posts, ...props }: FeaturedProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <div className="flex flex-col items-start gap-y-4">
        <div className="flex flex-col items-start">
          <Heading className="text-xl lg:text-2xl">Blog</Heading>
          <h1 className="text-lg lg:text-xl">Featured</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          {posts.slice(0, 2).map((post) => (
            <BlogPostCard post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
