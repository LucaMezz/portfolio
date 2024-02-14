import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Heading from "@/components/ui/heading";

export interface Education {
  institution: string;
  institutionUrl?: string;
  logoUrl?: string;
  name: string;
  start: string;
  end: string;
  grade: string;
  description: string[];
}

export interface EducationProps extends React.HTMLAttributes<HTMLElement> {
  education: Education[];
}

const Education = ({ className, ...props }: EducationProps) => {
  return (
    <div className={cn(className, "")} {...props}>
      <div className={cn(className, "py-8")} {...props}>
        <div className="flex flex-col items-start gap-y-4">
          <Heading className="text-xl lg:text-2xl">Education</Heading>
          {props.education.map((education) => (
            <div key={education.name} className="w-full rounded-md border p-4">
              <div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    {education.logoUrl ? (
                      <Image
                        src={education.logoUrl}
                        width={32}
                        height={32}
                        alt={`${education.institution} Logo`}
                        className="size-8"
                      />
                    ) : (
                      <div className="size-8"></div>
                    )}
                    <div>
                      <h1 className="font-semibold">{education.name}</h1>
                      {education.institutionUrl ? (
                        <Link
                          href={education.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {education.institution}
                        </Link>
                      ) : (
                        <h1>{education.institution}</h1>
                      )}
                      <h1 className="text-muted-foreground">
                        {education.grade}
                      </h1>
                    </div>
                  </div>
                  <div className="flex-column flex gap-1 md:ml-9">
                    <div>
                      {education.description.map((point) => (
                        <div className="flex gap-1">
                          <p>•</p>
                          <h2>{point}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h2 className="text-nowrap text-muted-foreground">{`${education.start} - ${education.end}`}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
