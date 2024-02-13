import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export interface BlogPostCardProps extends React.HTMLAttributes<HTMLElement> {}

const BlogPostCard = ({ className, ...props }: BlogPostCardProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <Link href="/">
        <div className="flex w-full flex-col gap-4 text-clip rounded-md border transition-colors hover:bg-border">
          <Image
            src={""}
            alt={""}
            width={1920}
            height={1080}
            className="w-full"
          />
          <div className="flex w-full flex-col gap-4 px-4 pb-4">
            <div>
              <h1 className="font-semibold">{}</h1>
              <div className="flex justify-between">
                <h2 className="text-muted-foreground">{}</h2>
                <h2 className="text-muted-foreground">{}</h2>
              </div>
            </div>
            <p className="text-sm">{}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
