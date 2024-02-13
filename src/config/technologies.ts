import { Technology } from "@/components/pages/home/technologies";

export interface Technologies {
  languages: Technology[];
  frameworks: Technology[];
  services: Technology[];
  applications: Technology[];
}

const technologies: Technologies = {
  languages: [
    {
      name: "JavaScript",
      icon: "logos:javascript",
      href: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "HTML5",
      icon: "devicon:html5",
      href: "https://en.wikipedia.org/wiki/HTML5",
    },
    {
      name: "CSS3",
      icon: "devicon:css3",
      href: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "Python",
      icon: "devicon:python",
      href: "https://www.python.org/",
    },
    {
      name: "Java",
      icon: "devicon:java",
      href: "https://www.java.com/",
    },
    {
      name: "Rust",
      icon: "simple-icons:rust",
      href: "https://www.rust-lang.org/",
    },
  ],
  frameworks: [
    {
      name: "Express.JS",
      icon: "simple-icons:express",
      href: "https://expressjs.com/",
    },
    {
      name: "React.JS",
      icon: "logos:react",
      href: "https://react.dev/",
    },
    {
      name: "Next.JS",
      icon: "logos:nextjs-icon",
      href: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      href: "https://tailwindcss.com/",
    },
    {
      name: "Chakra UI",
      icon: "simple-icons:chakraui",
      href: "https://chakraui.com/",
    },
  ],
  services: [
    {
      name: "Git",
      icon: "devicon:git",
      href: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: "mdi:github",
      href: "https://github.com/",
    },
  ],
  applications: [
    {
      name: "Figma",
      icon: "logos:figma",
      href: "https://www.figma.com/",
    },
    {
      name: "Webflow",
      icon: "skill-icons:webflow",
      href: "https://webflow.com/",
    },
    {
      name: "Visual Studio Code",
      icon: "devicon:vscode",
      href: "https://code.visualstudio.com/",
    },
    {
      name: "Linear",
      icon: "gg:linear",
      href: "https://linear.app/",
    },
  ],
};

export default technologies;
