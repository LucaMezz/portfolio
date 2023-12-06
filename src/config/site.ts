import { NavItem, SocialLink } from "@/types/nav";

export interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  socials: SocialLink[];
}

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      relative: "hero",
    },
    {
      title: "About",
      href: "/#about",
      relative: "about",
    },
    {
      title: "Contact",
      href: "/#contact",
      relative: "contact",
    },
    {
      title: "Blog",
      href: "/blog/?page=1",
    },
  ],
  socials: [
    {
      platform: "LINKED_IN",
      href: "https://au.linkedin.com/in/lucamezzavilla",
    },
    {
      platform: "TWITTER",
      href: "https://twitter.com/Luca_Mezzavilla",
    },
    {
      platform: "GIT_HUB",
      href: "https://github.com/LucaMezz",
    },
  ],
};
