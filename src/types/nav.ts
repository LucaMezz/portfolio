export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export interface Link {
  label?: string;
  href: string;
  description?: string;
  icon?: string;
}

export type SocialPlatform =
  | "EMAIL"
  | "GIT_HUB"
  | "LINKED_IN"
  | "SLACK"
  | "TWITTER";

export interface SocialLink extends Link {
  platform: SocialPlatform;
  icon?: string;
  href: string;
}
