// ====================================
// PORTFOLIO DATA
// ====================================
// This file contains all the mock data for your portfolio.
// Simply replace the values below with your own information.

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

// ====================================
// PERSONAL INFORMATION
// ====================================

export const personalInfo = {
  name: "Abdur Rahman Baig",
  title: "Full Stack Developer & UI/UX Enthusiast",
  tagline: "Building beautiful digital experiences",
  bio: "I'm a passionate full-stack developer with 3+ years of experience creating modern web applications. I specialize in React, Next.js, and Node.js, with a keen eye for design and user experience. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  email: "dev.abdulrehman6@gmail.com",
  location: "Lahore, Pakistan",
  availability: "Available for freelance work",
  resumeUrl: "/Muhammad Abdulrehman_Resume.pdf",
  social: [
    { name: "GitHub", url: "https://github.com/AbdulRehman028", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abdur-rehman-baig/", icon: "linkedin" },
    // { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
    { name: "Email", url: "mailto:dev.abdulrehman6@gmail.com", icon: "email" },
  ],
};

// ====================================
// SKILLS & TECHNOLOGIES
// ====================================

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Figma", "VS Code"]
  }
];

// ====================================
// FEATURED PROJECTS
// ====================================

export const projects: Project[] = [
  {
    id: 1,
    title: "Freelancing Platform",
    description: "A modern, full-featured freelancing platform with real-time chat, job management, and Bidding System",
    longDescription: "Built a complete freelancing platform with Next.js, Node.js, and MongoDB. Implemented real-time inventory updates using WebSockets.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Socket.io", "WebSockets"],
    image: "/moqa.webp",
    liveUrl: "https://moqa.vercel.app/",
    // githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and smart suggestions",
    longDescription: "Developed a real-time messaging application integrated with OpenAI API for intelligent responses. Features include user authentication, group chats, file sharing, and message reactions.",
    tags: ["React", "Socket.io", "OpenAI", "Node.js", "Redis"],
    image: "https://www.zdnet.com/a/img/resize/5e4939fed2bfd8d06200f4b5ff89bee6e4ca5dbe/2023/08/03/6465b332-9100-4836-b0d8-737809568679/gettyimages-1541246944.jpg?auto=webp&width=1280",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance and metrics",
    longDescription: "Created an interactive analytics dashboard with real-time data visualization, featuring customizable charts, KPI tracking, and automated reporting. Integrated with multiple data sources and APIs.",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    image: "https://www.smartsheet.com/sites/default/files/2024-11/IC-Financial-Project-Portfolio-Dashboard-Template.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 4,
    title: "Task Management Tool",
    description: "Collaborative project management and task tracking application",
    longDescription: "Built a comprehensive task management system with drag-and-drop functionality, team collaboration features, time tracking, and project analytics. Supports multiple views including kanban, list, and calendar.",
    tags: ["React", "Node.js", "MongoDB", "Material-UI"],
    image: "https://cdn-images.visual-paradigm.com/features/v14/2/built-in_task_manager.png",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
];

// ====================================
// WORK EXPERIENCE
// ====================================

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelance",
    position: "Web Developer",
    duration: "2018 - 2019",
    description: "Worked with various clients to deliver custom web solutions, from landing pages to complex web applications. Maintained 100% client satisfaction rating.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    company: "The Dev Corporate • Lahore, Punjab",
    position: "Senior Full Stack Developer",
    duration: "01/2025 – 05/2025",
    description: "Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions. Reduced page load times by 60% through optimization.",
    technologies: ["Next.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    id: 3,
    company: "Dofday Solutions • Lahore, Punjab",
    position: "Full Stack AI Engineer",
    duration: "02/2024 – 06/2024",
    description: "Developed and maintained multiple client projects, implemented CI/CD pipelines, and collaborated with design teams to create pixel-perfect interfaces.",
    technologies: ["Machine Learning", "LangChain", "PyTorch", "RAG", "OpenAI", "Docker", "AWS"],
  },

];

// ====================================
// STATS/HIGHLIGHTS
// ====================================

export const stats = [
  {
    label: "Years Experience",
    value: "3+",
  },
  {
    label: "Projects Completed",
    value: "50+",
  },
  {
    label: "Happy Clients",
    value: "20+",
  },
  {
    label: "Code Commits",
    value: "10K+",
  },
];
