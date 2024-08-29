export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#Education" },
  { name: "Soft Skills", link: "#Soft-Skills" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize quality and efficiency in every project. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 flex flex-col justify-start lg:min-h-[30vh]",
    imgClassName: "",
    titleClassName: "mb-2",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a fullstack inflation predictor",
    description: "Sneak peak",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Get in touch",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 2,
    title: "Client portfolio website",
    des: "An architect's portfolio website highlighting his career's achievements",
    img: "/dad-portfolio.png",
    iconLists: [
      "/react.svg",
      "/next.svg",
      "/css.png",
      "/html.png",
      "/js.png",
      "/ts.png",
    ],
    link: "https://kelkafrawy-portfolio.vercel.app/",
  },
  {
    id: 1,
    title: "A Web-based bug tracker",
    des: "A gamified bug tracker with points and a weekly leaderboard of top project performers",
    img: "/bugtrackerhome.jpg",
    imgClassName: "",
    iconLists: [
      "/python-icon.svg",
      "/react.svg",
      "/sqlite-icon.jpg",
      "/django-icon.png",
    ],
    link: "https://github.com/Kafrawy31/Final-Bugtracker",
  },

  {
    id: 3,
    title: "Agent simulation and AI shoplifter detection",
    des: "Agent based simulation and AI approach to detecting shoplifters",
    img: "/agent-based-simulation.png",
    iconLists: [
      "/python-icon.svg",
      "/fastapi.svg",
      "/pytorch-icon.png",
      "/pandas-icon.png",
      "/matplotlib-icon.png",
    ],
    link: "https://github.com/uol-feps-soc-meng-gp",
  },
  {
    id: 4,
    title: "Music generating genetic algorithm",
    des: "Generating music (drums,chorus,melodies.. etc) using self-made genetic algorithms",
    img: "/music-generation.png",
    iconLists: ["/python-icon.svg"],
    link: "https://github.com/keeganA/bio-inspired-computing-cwk2",
  },
];

export const softSkills = [
  {
    id: 1,
    title: "Communication and people skills",
    desc: "Exceptional communication and interpersonal skills, fostering positive relationships and effective collaboration",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Adaptive and flexible",
    desc: "Demonstrates strong adaptability and flexibility, thriving in dynamic environments and effectively managing changing priorities",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Driven and eager to learn",
    desc: "Highly motivated and eager to learn, continually seeking opportunities for personal and professional growth",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Creative problem solver",
    desc: "Innovative thinker and adept problem solver, capable of devising creative solutions to complex challenges.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
