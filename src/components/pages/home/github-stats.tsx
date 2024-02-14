import React, { ReactElement } from "react";

import { cn } from "@/lib/utils";

import { IoStar } from "react-icons/io5";
import { GoRepo } from "react-icons/go";
import { GoGitCommit } from "react-icons/go";
import { GoGitPullRequest } from "react-icons/go";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { GoRepoPush } from "react-icons/go";
import { IconType } from "react-icons";

interface GithubStat {
  name: string,
  icon: IconType,
}

const stats: GithubStat[] = [
  {
    name: "Stars",
    icon: IoStar,
  },
  {
    name: "Repos",
    icon: GoRepo,
  },
  {
    name: "Commits",
    icon: GoGitCommit,
  },
  {
    name: "Pull Requests",
    icon: GoGitPullRequest,
  },
  {
    name: "Issues",
    icon: AiOutlineIssuesClose,
  },
  {
    name: "Contributions",
    icon: GoRepoPush,
  }
];

export interface GithubStatsProps extends React.HTMLAttributes<HTMLElement> {}

const GithubStats = ({ className, ...props }: GithubStatsProps) => {
  return <div className={cn(className, "flex size-max gap-4 rounded-md border bg-background p-4")} {...props}>
    <div className="flex flex-col gap-2">
      {
        stats.map(stat => (
          <div className="flex items-center gap-4">
            <stat.icon />
            <h2>{stat.name}</h2>
          </div>
        ))
      }
    </div>
    <div className="flex flex-col gap-2">
      {
        stats.map(stat => (
          <h2>0</h2>
        ))
      }
    </div>
  </div>
};

export default GithubStats;