import { Clone } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  Java,
  reactjs,
  redux,
  tailwind,
  nodejs,
  Springboot,
  git,
  figma,
  MySQL,
  kunal,
  rajveer,
  Shubham,
  RockPaper,
  Vlight,
  AppScript,
  TicToe,
  clone,
  WhatsappForm,
  bulb,
  shopping,
  whatsapp,
  xo,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Springboot",
    icon: Springboot,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Full Stack  Development",
    company_name: "Vishal Light House",
    icon: bulb,
     iconBg: "#383E56",
    date: "March 2025 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Nextjs Development",
    company_name: "AppScript",
    icon: shopping,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Game Developer",
    company_name: "Shopify",
    icon: xo,
    iconBg: "#383E56",
    date: "March 2025 - March 2025",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: whatsapp,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - feb 2025",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ritvik proved me wrong.",
    name: "kunal Singh",
    designation: "CFO",
    company: "Vishal Light House",
    image: kunal,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ritvik does.",
    name: "Shubham Rawat",
    designation: "COO",
    company: "DEF Corp",
    image: rajveer,
  },
  {
    testimonial: 
      "After Ritvik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rajveer Gharu",
    designation: "CTO",
    company: "456 Enterprises",
    image: Shubham,
  },
];

const projects = [
  {
    name: "Rock Paper Scissor Game",
    description:
      "Rock Paper Scissors is a simple hand game played between two participants — in this version, the player competes against the computer. Each side chooses one of three options: rock, paper, or scissors.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: RockPaper,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vishal Light House",
    description:
      "Vishal Light House is a modern, user-friendly website designed to streamline the booking and management of decorative lighting services for events such as weddings, parties, cultural programs, and corporate functions. It serves as the digital front for an event lighting business, helping customers explore services, view past projects, and book lighting setups effortlessly.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Vlight,
    source_code_link: "https://github.com/",
  },
  {
    name: "AppScript Project",
    description:
      "Appscript Shopping Cart is a dynamic web application built using Google Apps Script that simulates a fully functional online shopping cart system. It allows users to browse products, add items to a cart, and place orders.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
       {
        name: "HTML",
        color: "pink-text-gradient",
      },
       {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: AppScript,
    source_code_link: "https://github.com/",
  },
  {
    name: "WhatsApp Info",
    description:
      "WhatsApp Info Form is a lightweight and efficient web application that allows users to fill out a form and instantly send the submitted details to a predefined WhatsApp number. This project eliminates the need for backend storage or email, using WhatsApp as the primary channel for communication and lead collection.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: WhatsappForm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Amazon Clone Page",
    description:
      "Amazon Clone is a front-end practice project that replicates the look and feel of Amazon’s homepage. It was built to strengthen skills in modern web development, focusing on layout structuring, responsive design, and UI/UX principles. This project showcases how complex e-commerce interfaces can be recreated using fundamental frontend technologies.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      
    ],
    image: clone,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tic Toe Game",
    description:
      "Tic Tac Toe Game is a classic two-player strategy game implemented as a web-based application. Designed for fun and learning, this project showcases basic game logic, user interactions, and dynamic UI updates. It allows two users to take turns marking X and O on a 3x3 grid, aiming to get three in a row horizontally, vertically, or diagonally.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: TicToe,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
