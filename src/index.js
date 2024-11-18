import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  china,
  japan,
  southKorea,
  usa,
  taskMgrHome,
  taskMgrTasks,
  github,
  internet,
  twitter,
} from "./assets";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //     name: "TypeScript",
  //     icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //     name: "Redux Toolkit",
  //     icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //     name: "Three JS",
  //     icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //     name: "docker",
  //     icon: docker,
  // },
];

const languages = [
  {
    name: "English",
    icon: usa,
  },
  {
    name: "Korean",
    icon: southKorea,
  },
  {
    name: "Japanese",
    icon: japan,
  },
  {
    name: "Chinese",
    icon: china,
  },
];

const projects = [
  {
    name: "Task Master",
    link: {
      demo: {
        link: "https://task-mgr-1.onrender.com/",
        logo: internet
      },
      repo: {
        link: "https://github.com/omk963/task-mgr",
        logo: github
      },
    },
    img: [taskMgrHome, taskMgrTasks],
    desc: "A web app that lets users securely create, edit, and organize tasks by priority and deadline, helping streamline daily productivity.",
  },
];

const social = [
  {
    name: 'Github',
    logo: github,
    link: 'https://github.com/omk963'
  },
  {
    name: 'Twitter',
    logo: twitter,
    link: 'https://x.com/jinius114'
  }
]

export { technologies, languages, projects, social };
