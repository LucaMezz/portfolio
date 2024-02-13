import React from "react";

import { cn } from "@/lib/utils";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div
      className={cn(className, "mx-auto flex w-full max-w-4xl flex-col p-8")}
      {...props}
    >
      <h2 className="text-muted-foreground">
        © Luca Mezzavilla. All rights reserved.
      </h2>
    </div>
  );
};

export default Footer;
