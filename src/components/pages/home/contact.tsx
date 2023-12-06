import React from "react";

import { cn } from "@/lib/utils";

export interface ContactProps extends React.HTMLAttributes<HTMLElement> {}

const Contact = ({ className, ...props }: ContactProps) => {
  return (
    <section
      id="contact"
      className={cn(className, "bg-muted py-24")}
      {...props}
    >
      <div className="container text-2xl">Contact</div>
    </section>
  );
};

export default Contact;
