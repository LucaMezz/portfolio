import React from "react";

import { cn } from "@/lib/utils";

export interface BlogProps extends React.HTMLAttributes<HTMLElement> {}

const Blog = ({ className, ...props }: BlogProps) => {
  return <div className={cn(className, "")} {...props}></div>;
};

export default Blog;
