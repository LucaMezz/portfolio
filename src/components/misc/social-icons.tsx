import React from "react";
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
    <div className={cn(className, "")} {...props}>
      {siteConfig.socials.map((social, index) => {
        const Icon: IconType = icons[social.platform];
        return (
          <Button className="p-0" variant="ghost" size="icon" key="index">
            <Icon className="h-8 w-8" />
          </Button>
        );
      })}
    </div>
  );
};

export default SocialIcons;
