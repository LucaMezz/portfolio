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
        "sticky top-0 z-40 w-full bg-background",
        border ? "border-b border-[#030305]" : ""
      )}
    >
      <div className={cn("container flex h-20 items-center justify-between")}>
        <SiteLogo />
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
