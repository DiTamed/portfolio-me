import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { skills } from '@/app/config/skills';
import { projects } from '@/app/config/projects';

/**
 * Default portfolio configuration
 * Edit this file to customize your portfolio
 */
export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Ditamed',
    description: 'Portfolio website by Ditamed',
    author: 'Ditamed',
  },

  navigation: {
    logo: {
      text: 'NDT',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Ditamed NDT',
      typingTexts: ['Front-end & Full-stack Development', 'Solving complex problems'],
      description:
        'Full-stack developer focused on building user-friendly web applications, robust backend systems, and practical software solutions that turn ideas into reality.',
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',

      bio: [
        "Hi, I'm Nguyễn Duy Tâm, a software developer from Vietnam who enjoys building practical applications and turning ideas into functional digital solutions.",

        'My development experience spans frontend and backend technologies, including ReactJS, JavaScript, Python, and FastAPI. I enjoy building user-friendly interfaces, developing APIs, and working with data to solve real-world problems.',

        "Through personal projects and practical development experience, I've continued to strengthen my problem-solving skills, improve my code quality, and learn how to design and structure maintainable applications. I'm always eager to explore new technologies and grow as a Full-stack Developer.",
      ],

      details: [
        { label: 'Location', value: 'Vietnam' },
        { label: 'Focus', value: 'Full-stack Development' },
      ],

      qualities: [
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I enjoy analyzing requirements, breaking down complex problems, and developing practical solutions that address real-world needs.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Frontend Developer',
          description:
            'I build responsive and user-friendly web interfaces using ReactJS, Next.JS, JavaScript, Typescript, and modern frontend development practices.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Backend Developer',
          description:
            'I develop backend APIs and application logic using Python, FastAPI, Node.js, and JavaScript, focusing on clean code structure, reliable data processing, and maintainable backend solutions.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'Practical Solution Builder',
          description:
            'I enjoy building useful software solutions, from weather data APIs to Excel reporting and reconciliation systems that help streamline workflows.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/DiTamed',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()}. All rights reserved.`,
    tagline: 'Designed and built with ❤️',
  },
};

export default portfolioConfig;
