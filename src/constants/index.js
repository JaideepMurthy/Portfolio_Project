import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `I am a passionate Computer Science and Engineering graduate with a strong academic background and a zest for innovation. Join me as I share my projects and experiences, showcasing my dedication to creating impactful solutions and pushing the boundaries of what's possible in the tech world.`;

export const ABOUT_TEXT = `Hello, I'm Jaideep Murthy, a driven senior pursuing a degree in Computer Science and Engineering at NIT, Allahabad. With a keen interest in artificial intelligence and blockchain technology, I'm passionate about exploring the intersections of technology, entrepreneurship, and sustainable development.

My journey began with a strong foundation in computer science, leading me to various enriching experiences. I honed my technical skills and gained practical knowledge during my summer internship at Telepresenz, where I contributed to real-world projects in JavaScript web application development. Additionally, my role as a Cisco tQb Student Body Member has further fueled my passion for fostering innovation and entrepreneurship among students and startups.

As a student-athlete, playing college-level basketball has taught me invaluable lessons in teamwork, leadership, and discipline. These experiences have shaped my ability to balance rigorous academic pursuits with athletic commitments, enhancing my overall personal and professional development.

Throughout these experiences, I've developed strong communication skills, design thinking, and expertise in Java, which I continually apply to drive growth and innovation. My involvement as a PR coordinator for multiple college events has refined my ability to engage and collaborate effectively.

Looking forward, I aim to leverage my skills and interests to build a career in the tech industry, focusing on emerging technologies like AI and blockchain. I'm eager to connect with like-minded professionals and explore opportunities that align with my goal of contributing to a sustainable and innovative future.`;

export const EXPERIENCES = [
  {
    year: "June - July 2024",
    role: "Machine Learning Intern",
    company: "ApnaGuide",
    description: `I developed machine learning models to predict Customer Churn and Chance of Rainfall. Additionally, I analyzed disaster data to assess the likelihood of events and worked on predictive maintenance models to enhance operational efficiency. This experience enhanced my proficiency in data analysis and model building.`,
    technologies: ["Anaconda", "Jupyter", "Pandas"],
  },
  {
    year: "Jan - April 2024",
    role: "Software Development Extern",
    company: "AlgoUniversity",
    description: `I contributed to the development of a website-based platform designed to help developers enhance their skills through coding challenges. I worked on both the back-end and front-end of the platform, ensuring secure profiles, real-time feedback, and a responsive design. I have completed the back-end and am currently working on the front-end.`,
    technologies: ["MERN Stack", "Postman", "AWS", "GitHub"],
  },
  {
    year: "May - July 2023",
    role: "Summer Tech Intern",
    company: "Telepresenz, Inc.",
    description: `I collaborated with the Quality Assurance team to enhance the Telepresenz platform, contributing by developing two JavaScript components for the platform's Visualization module. I was an active participant in daily stand-up meetings, offering insights and fostering progress within the team.`,
    technologies: ["JavaScript", "Web Development"],
  },
];


export const EDUCATION = [
  {
    degree: "Bachelors of Technology in Computer Science and Engineering",
    institution: "NIT Allahabad",
    duration: "Nov 2021 - June 2025",
    description:
      "Graduated with a deep understanding of core computer science fundamentals. Explored a wide range of topics including coding, app development, web development, and machine learning. Lived away from home in a hostel, where I made lasting friendships and created wonderful memories.",
  },
  {
    degree: "11th to 12th",
    institution: "Indus International School - Bangalore, IB",
    duration: "June 2019 - May 2021",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science with a focus on Java. Developed a growing interest in programming, enjoyed memorable trips with friends, and cherished the final moments of school life.",
  },
  {
    degree: "8th to 10th",
    institution: "Vibgyor High School, ICSE",
    duration: "April 2017 - May 2019",
    description:
      "Gained a solid foundation across all subjects while growing from a curious child into a motivated young adult. Embraced a wide range of activities, including quizzes, Taekwondo, and other extracurriculars, which enriched my learning experience and personal development.",
  },
];

export const PROJECTS = [
  {
    title: "LogiCraft",
    image: project5,
    description:
      "LogiCraft is a platform where users can create accounts, work on coding questions, and check mistakes. It serves as a coding practice hub for developers to enhance their problem-solving skills.",
    technologies: ["React", "NodeJs", "MongoDB", "ExpressJs", "Vercel", "Renderer"],
    //github: "https://github.com/your-github/Logicraft",
    //live: "https://your-live-site.com/",
  },
  {
    title: "Vertus",
    image: project1,
    description:
      "Vertus is a platform for students to exchange or sell their items on campus. The aim is to foster sustainability and promote a sense of community among students by providing an easy and effective way to connect with one another.",
    technologies: ["React", "NodeJs", "MongoDB", "ExpressJs"],
    //github: "https://github.com/your-github/CampusCycle",
    //live: "https://your-live-site.com/",
  },
  {
    title: "Scheduality - Simple Task Manager",
    image: project2, 
    description: 
      "Scheduality is a Task Management Application built with TypeScript and React, designed to help users efficiently create, organize, and manage tasks. Key features include task categorization by status (Upcoming, Overdue, Completed), task prioritization, overdue alerts, search and filter functionality, and persistent task storage using localStorage. The app provides a modern, user-friendly interface for seamless task management.",
    technologies: ["TypeScript", "React", "localStorage"],
    github: "https://github.com/JaideepMurthy/Scheduality",
    //live: "#",
  },
  {
    title: "Votereum: Blockchain-based Voting System",
    image: project3,
    description: 
      "Votereum is a secure and transparent blockchain-based voting system designed to modernize elections. Built on the Ethereum blockchain network, it allows users to cast votes and view voting results without intermediaries. The system uses Smart Contracts for enhanced transparency and security. This academic project was developed in collaboration with a team under the mentorship of Dr. Amit Biswas.",
    technologies: ["Metamask", "Ganache", "Truffle", "Remix IDE"],
    //github: "https://github.com/your-github/Votereum",
    //live: "#",
  },  
  {
    title: "AI-based Portfolio Website",
    image: project4,
    description:
      "An AI-powered portfolio website that showcases my projects, experience, and achievements. It includes dynamic content generated by AI based on the user's interactions.",
    technologies: ["React", "Tailwind CSS", "Machine Learning"],
    github: "https://github.com/JaideepMurthy/Portfolio_Project",
    live: "https://warm-semifreddo-60a5ba.netlify.app/",
  },
];

export const CONTACT = {
  address: "Bangalore, Karnataka, India",
  phoneNo: "+91 9676363695",
  email: "jaideepmurthy3@gmail.com",
};
