import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaSlack, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export interface SocialIconsProps extends React.HTMLAttributes<HTMLElement> {}

const SocialIcons = ({ className, ...props }: SocialIconsProps) => {
  const icons: { [key: string]: IconType } = {
    EMAIL: MdEmail,
    GIT_HUB: FaGithub,
    LINKED_IN: FaLinkedin,
    SLACK: FaSlack,
    TWITTER: FaTwitter,
  };

  return (
    <div
      className={cn(className, "flex h-8 items-center justify-start gap-x-4")}
      {...props}
    >
      {siteConfig.socials.map((social, index) => {
        const Icon: IconType = icons[social.platform];
        return (
          <Link href={social.href} key={index} rel="noopener noreferrer" target="_blank">
            <Button
              className="p-0 hover:bg-transparent"
              variant="ghost"
              size="icon"
              key="index"
              asChild
            >
              <Icon className="h-7 w-7" />
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
