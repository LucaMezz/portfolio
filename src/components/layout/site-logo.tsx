import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export interface SiteLogoProps extends React.HTMLAttributes<HTMLElement> {}

const SiteLogo = ({ className, ...props }: SiteLogoProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <Link href="/" className="text-xl font-bold">
        <span className="inline-block bg-gradient-to-r from-green-500 to-[#2acb79] bg-clip-text font-bold  text-transparent">
          {"<"}
        </span>
        {" Luca M "}
        <span className="inline-block bg-gradient-to-r from-[#2acb79] to-emerald-400 bg-clip-text font-bold  text-transparent">
          {"/>"}
        </span>
      </Link>
    </div>
  );
};

export default SiteLogo;
