import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as SmoothLink } from "react-scroll";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/layout/icons";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  itemClicked?: () => void;
  itemClassName?: string;
}

export function MainNav({
  className,
  items,
  itemClassName,
  itemClicked,
  ...props
}: MainNavProps) {
  const pathname = usePathname();

  return (
    <>
      {items?.length ? (
        <nav className={cn("flex gap-10", className)} {...props}>
          {items?.map((item, index) => {
            if (item.relative && pathname === "/")
              return (
                <SmoothLink
                  key={index}
                  to={item.relative}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={itemClicked}
                  className={cn(
                    "flex items-center text-sm font-medium text-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                    "cursor-pointer",
                    itemClassName
                  )}
                >
                  {item.title}
                </SmoothLink>
              );
            else
              return (
                item.href && (
                  <Link
                    href={item.href}
                    onClick={itemClicked}
                    className={itemClassName}
                  >
                    {item.title}
                  </Link>
                )
              );
          })}
        </nav>
      ) : null}
    </>
  );
}
