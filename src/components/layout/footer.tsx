"use client";

import React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import SocialIcons from "../misc/social-icons";
import { Separator } from "../ui/separator";
import { MainNav } from "./main-nav";
import SiteLogo from "./site-logo";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <section
      id="footer"
      className={cn(className, "container flex flex-col gap-8 py-10")}
      {...props}
    >
      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        <SiteLogo />
        <MainNav
          items={siteConfig.mainNav}
          className="items-center"
          itemClassName="text-xs lg:text-base"
        />
      </div>
      <Separator color="#6B7280" />
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0">
        <p className="whitespace-pre-wrap text-xs text-muted-foreground lg:whitespace-normal lg:text-base">
          {"© Luca Mezzavilla. All rights reserved."}
        </p>
        <p className="whitespace-pre-wrap text-xs text-muted-foreground lg:whitespace-normal lg:text-base">
          <a
            className="underline"
            href="https://www.freepik.com/free-vector/future-technology-isometric-composition-with-isolated-smartphone-laptop-with-wireless-sign_13748983.htm"
          >
            Image by macrovector
          </a>{" "}
          on Freepik
        </p>
        <SocialIcons className="mt-2" />
      </div>
    </section>
  );
};

export default Footer;
