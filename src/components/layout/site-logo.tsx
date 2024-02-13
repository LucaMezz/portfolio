import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export interface SiteLogoProps extends React.HTMLAttributes<HTMLElement> {}

const SiteLogo = ({ className, ...props }: SiteLogoProps) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center space-x-2", className)}
      {...props}
    >
      <Icon icon={"fa6-solid:code"} className="size-6" />
      <span className="inline-block font-bold">{siteConfig.name}</span>
    </Link>
  );
};

export default SiteLogo;
