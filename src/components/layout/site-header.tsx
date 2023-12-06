"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/layout/icons";
import { MainNav } from "@/components/layout/main-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";

import SiteLogo from "./site-logo";

export function SiteHeader() {
  const [border, setBorder] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const hideNavbar = () => setNavbarOpen(false);

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
    <header className={cn("sticky top-0 z-40 w-full")}>
      <div
        className={cn(
          "bg-background",
          border ? "border-b border-muted-shadow" : ""
        )}
      >
        <div className={cn("container flex h-20 items-center justify-between")}>
          <SiteLogo />
          <MainNav items={siteConfig.mainNav} className="hidden lg:flex" />
          <div className="flex items-center justify-end space-x-4">
            <ThemeToggle />
            <Button
              className="lg:hidden"
              variant={"ghost"}
              size={"icon"}
              onClick={toggleNavbar}
            >
              {navbarOpen ? (
                <IoIosClose className="h-10 w-10" />
              ) : (
                <HiOutlineMenuAlt3 className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {navbarOpen ? (
        <div className="fix top-0 m-4 w-[calc(100vw-48px)] bg-muted-shadow p-4 marker:bg-white lg:hidden">
          <MainNav
            items={siteConfig.mainNav}
            itemClicked={hideNavbar}
            className="flex-col gap-4 md:gap-6"
          />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
