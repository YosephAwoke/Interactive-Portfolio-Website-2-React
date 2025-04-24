import project1 from "../assets/projects/productstore.png";
import project2 from "../assets/projects/personalportfolio.jpg";
import project3 from "../assets/projects/movieapp.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer and Graphic Designer with expertise in MERN stack, UI/UX, and AI-driven applications. With experience in web and mobile app development, branding, and deep learning, I build innovative digital solutions. I am always eager to create, innovate, and deliver impactful technology solutions.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a strong focus on building efficient and scalable web applications using the MERN stack. With over 5 years of professional experience, I have honed my expertise in React, Node.js, and MongoDB, complemented by delivering impactful deep learning projects using Python and TensorFlow. My journey in tech has been driven by a passion for blending creativity and technical skill, allowing me to craft innovative solutions that meet both user and business needs. In addition to web development, I excel in graphic design, leveraging tools like Adobe Creative Suite to bring ideas to life. I thrive in collaborative environments and enjoy exploring emerging technologies to deliver high-quality, cutting-edge solutions`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Ethiopian Traditional Medicinal Plants Classification System",
    image: project3,
    description:
      "An AI-powered web application for classifying Ethiopian traditional medicinal plants and providing detailed information about their uses.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React.js", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce platform featuring product listings, a shopping cart, secure user authentication, and seamless checkout.",
    technologies: [ "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "Personal Portfolio Website",
    image: project2,
    description:
      "A sleek and responsive personal portfolio showcasing projects, skills, and contact information with modern design aesthetics.",
    technologies: [ "React", "Tailwind CSS", "Firebase", "HTML", "CSS"],
  },
  
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A dynamic platform for creating and publishing blogs, featuring rich text editing, user profiles, and a commenting system.",
    technologies: [ "React", "Express", "MongoDB", "HTML", "CSS",],
  },
  {
    title: "Movie App",
    image: project3,
    description:
      "An engaging movie application that allows users to search for movies, fetch updated movie lists via API, and manage personalized watchlists.",
    technologies: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
