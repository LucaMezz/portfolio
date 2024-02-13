import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { BlogPost } from "@/app/blog/page";

export interface BlogPostCardProps extends React.HTMLAttributes<HTMLElement> {
  post: BlogPost;
}

const BlogPostCard = ({ className, post, ...props }: BlogPostCardProps) => {
  const blogPostUrl = `/blog/${encodeURIComponent(post.name)}`;

  return (
    <div className={cn(className, "")} {...props}>
      <Link href={blogPostUrl}>
        <div className="flex w-full flex-col gap-4 text-clip rounded-md border transition-colors hover:bg-border">
          <Image
            src={post.thumbnailUrl}
            alt={`${post.title} Thumbnail`}
            width={1920}
            height={1080}
            className="w-full"
          />
          <div className="flex w-full flex-col gap-4 px-4 pb-4">
            <div>
              <h1 className="font-semibold">{post.title}</h1>
              <div className="flex justify-between">
                <h2 className="text-muted-foreground">
                  {post.tags.map((tag) => (
                    <></>
                  ))}
                </h2>
                <h2 className="text-muted-foreground">{post.date}</h2>
              </div>
            </div>
            <p className="text-sm">{post.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
