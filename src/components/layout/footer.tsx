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
      <div className="flex justify-between">
        <SiteLogo />
        <MainNav items={siteConfig.mainNav} />
      </div>
      <Separator color="#6B7280" />
      <div>
        <SocialIcons />
        <p className="text-muted-foreground">
          © Luca Mezzavilla. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
