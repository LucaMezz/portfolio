import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/layout/icons";

import { Button } from "../ui/button";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  itemClicked?: () => void;
  itemClassName?: string;
}

export function MainNav({
  items,
  itemClicked,
  itemClassName,
  className,
  ...props
}: MainNavProps) {
  return (
    <div className={cn("flex gap-6 md:gap-10", className)}>
      {items?.length ? (
        <nav className="flex gap-2">
          {items?.map(
            (item, index) =>
              item.href && (
                <Button variant="ghost" asChild>
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex cursor-pointer items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80",
                      itemClassName
                    )}
                    onClick={itemClicked}
                  >
                    {item.title}
                  </Link>
                </Button>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
