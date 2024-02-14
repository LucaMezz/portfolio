"use client";

import React from "react";
import Link from "next/link";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";

import ContactForm from "./contact-form";

export interface ContactProps extends React.HTMLAttributes<HTMLElement> {}

const Contact = ({ className, ...props }: ContactProps) => {
  return (
    <div className={cn(className, "w-full py-8")} {...props}>
      <div className="flex w-full flex-col items-start gap-y-4">
        <Heading className="text-xl lg:text-2xl">Contact</Heading>
        <div className="flex w-full flex-col justify-around gap-8 md:flex-row">
          <ContactForm />
          <div className="flex h-max flex-col gap-4 rounded-md border p-4">
            <Link
              href={`mailto:${siteConfig.links.email}`}
              className="flex items-center gap-2"
            >
              <MdOutlineEmail className="size-6" /> {siteConfig.links.email}
            </Link>
            <div className="flex items-center gap-2">
              <MdOutlinePhone className="size-6" /> {siteConfig.links.phone}
            </div>
            <Link
              href={siteConfig.links.website}
              className="flex items-center gap-2"
            >
              <IoGlobeOutline className="size-6" /> lucamezzavilla.dev
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
