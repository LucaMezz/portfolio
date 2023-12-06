import React from "react";

import { cn } from "@/lib/utils";

export interface HistoryProps extends React.HTMLAttributes<HTMLElement> {}

const History = ({ className, ...props }: HistoryProps) => {
  return (
    <section
      id="history"
      className={cn(className, "bg-muted py-24")}
      {...props}
    >
      <div className="container grid grid-cols-2 gap-16">
        <div className="text-2xl">Education</div>
        <div className="text-2xl">Experience</div>
      </div>
    </section>
  );
};

export default History;
