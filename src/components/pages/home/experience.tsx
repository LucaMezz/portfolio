import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";

export interface WorkExperience {
  role: string;
  employer: string;
  employerUrl?: string;
  logoUrl: string;
  start: string;
  end: string;
  location: string;
  description: string[];
}

export interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {
  experience: WorkExperience[];
}

const Experience = ({ className, ...props }: ExperienceProps) => {
  return (
    <div className={cn(className, "py-8")} {...props}>
      <div className="flex flex-col items-start gap-y-4">
        <Heading className="text-xl lg:text-2xl">Experience</Heading>
        {props.experience.map((experience, index) => (
          <div
            key={`${index}:${experience.employer}`}
            className="w-full rounded-md border p-4"
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Image
                    src={experience.logoUrl}
                    width={32}
                    height={32}
                    alt={`${experience.employer} Logo`}
                    className="size-8"
                  />
                  <div>
                    <h1 className="font-semibold">{experience.role}</h1>
                    <div className="flex gap-1">
                      {experience.employerUrl ? (
                        <Link
                          href={experience.employerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.employer}
                        </Link>
                      ) : (
                        <h1>{experience.employer}</h1>
                      )}
                      <p className="text-muted-foreground">•</p>
                      <h1 className="text-muted-foreground">
                        {experience.location}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex-column ml-9 flex gap-1">
                  <div>
                    {experience.description.map((point, index) => (
                      <div key={`point-${index}`} className="flex gap-1">
                        <p>•</p>
                        <h2>{point}</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h2 className="text-nowrap text-muted-foreground">{`${experience.start} - ${experience.end}`}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
