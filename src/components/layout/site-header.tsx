"use client";

import { useEffect, useRef, useState } from "react";
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
import useOutsideClick from "@/hooks/outside-click";

export function SiteHeader() {
  const [border, setBorder] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const navMenuRef = useRef<HTMLDivElement>(null);
  const outsideClick = useOutsideClick(navMenuRef); 

  useEffect(() => {
    outsideClick && setNavbarOpen(false);
  }, [outsideClick]);

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
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-xl",
        border && "border-b border-muted"
      )}
    >
      <div
        className={
          "container flex h-[56px] max-w-4xl items-center justify-between space-x-4 sm:space-x-0 md:h-[72px]"
        }
      >
        <SiteLogo className="mr-8" />
        <MainNav items={siteConfig.mainNav} className="hidden md:flex" />
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
            <Button
              className="md:hidden"
              variant={"ghost"}
              size={"icon"}
              onClick={toggleNavbar}
            >
              {navbarOpen ? (
                <IoIosClose className="size-10" />
              ) : (
                <HiOutlineMenuAlt3 className="size-6" />
              )}
            </Button>
          </nav>
        </div>
      </div>
      {navbarOpen ? (
        <div ref={navMenuRef} className="bg-muted-shadow fixed right-4 top-12 m-4 flex w-max justify-center rounded-md border bg-background p-2 md:hidden">
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
