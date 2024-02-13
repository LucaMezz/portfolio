"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";
import { MainNav } from "@/components/layout/main-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

import SiteLogo from "./site-logo";

export function SiteHeader() {
  const [border, setBorder] = useState(false);

  const listenScrollEvent = (e: Event) => {
    if (window.scrollY > 100) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-xl",
        border && "border-b border-muted"
      )}
    >
      <div
        className={
          "container flex h-[72px] max-w-4xl items-center justify-between space-x-4 sm:space-x-0"
        }
      >
        <SiteLogo className="mr-8" />
        <MainNav items={siteConfig.mainNav} />
        <div className="flex w-max items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="size-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
