import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Duong Nguyen Huynh - Company Website',
    description:
      'A company website built with Next.js, TypeScript, Prisma, and Supabase to introduce the business, present products and services, support customer inquiries, and improve online visibility through SEO.',
    role: 'Full-stack Developer',
    problem:
      'A business website needs to communicate company information, showcase products and services, provide convenient contact channels, and establish a solid foundation for search engine visibility.',
    highlights: [
      'Developed the frontend using Next.js and TypeScript.',
      'Implemented backend functionality and application logic for the website.',
      'Integrated Prisma for database access and data management.',
      'Used Supabase to support database-related functionality.',
      'Built pages and user flows for company information, product presentation, and customer contact.',
      'Worked on SEO configuration and website structure to improve search engine discoverability.',
      'Handled the end-to-end development workflow, from frontend and backend implementation to deployment.',
    ],
    impact:
      'Delivered a deployed company website that combines business presentation, product information, customer contact, and SEO-focused implementation.',
    tags: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'Supabase',
      'Full-stack Development',
      'SEO',
      'Deployment',
    ],
    liveLink: 'https://duongnguyenhuynh.com/',
    githubLink: '',
    type: 'Full-stack Web Development',
  },
  {
    id: 2,
    title: 'Learning Management System (LMS)',
    description:
      'An online learning management system that provides a digital learning environment where users can access courses, study lessons, and complete interactive assessments throughout their learning journey.',
    role: 'Frontend Developer & UI/UX Designer',
    problem:
      'Online learning platforms need an intuitive interface for navigating courses, accessing lessons, and completing assessments with different question formats while maintaining a consistent learning experience.',
    highlights: [
      'Designed the user interface and user experience for the platform using Figma.',
      'Developed the frontend application using Next.js and TypeScript.',
      'Built user-facing interfaces for browsing courses and accessing online lessons.',
      'Implemented learning interfaces that organize course content and lesson navigation.',
      'Developed assessment interfaces supporting multiple question formats, including single-choice answers, text input, and checkboxes.',
      'Built interactive answer-selection and assessment components to support the learning process.',
      'Focused on responsive layouts, reusable UI components, and a consistent user experience across the platform.',
    ],
    impact:
      'Delivered the frontend experience for an online learning platform, combining Figma-based UI/UX design with course, lesson, and interactive assessment interfaces.',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Figma',
      'UI/UX Design',
      'Tailwind CSS',
      'Learning Management System',
    ],
    liveLink: 'https://lms-feweb-uit.vercel.app/vi',
    githubLink: '',
    type: 'Frontend & UI/UX Design',
  },
  {
    id: 3,
    title: 'Weather Forecast Analysis API',
    description:
      'A weather backend API that retrieves current weather conditions, historical weather data, and forecasts using geographic coordinates and external weather services.',
    role: 'Backend Developer',
    problem:
      'Weather applications need to transform external weather data into consistent API responses that frontend applications can consume efficiently.',
    highlights: [
      'Built asynchronous backend endpoints using Python and FastAPI.',
      'Integrated the Open-Meteo weather and geocoding APIs.',
      'Implemented city-based search by converting location names into geographic coordinates.',
      'Developed endpoints for current weather, historical data, and weather forecasts.',
      'Processed weather attributes such as temperature, humidity, and feels-like temperature.',
      'Structured API responses for integration with a frontend dashboard.',
    ],
    impact:
      'Provides a reusable weather API for displaying current conditions, historical observations, and upcoming forecasts.',
    tags: ['Python', 'FastAPI', 'HTTPX', 'Open-Meteo API', 'REST API', 'Async Programming'],
    liveLink: '',
    githubLink: 'https://github.com/DiTamed/weather-backend',
    type: 'Backend & API Integration',
  },
  {
    id: 4,
    title: 'Nha Khoa Vạn Thành Website',
    description:
      'A dental clinic website project focused on service presentation, appointment registration, customer inquiries, and integrations that support day-to-day business operations.',
    role: 'Web Developer',
    problem:
      'A multi-branch dental clinic needs a clear online presence where customers can explore services, find branch information, and submit appointment or consultation requests.',
    highlights: [
      'Customized website layouts and content using the Haravan platform and Liquid templates.',
      'Worked on service presentation, branch information, and responsive website components.',
      'Integrated appointment and consultation forms with Google Sheets through Google Apps Script.',
      'Connected workflow automation using n8n and Zalo OA for appointment notifications.',
      'Worked on website SEO configuration, redirects, metadata, and performance improvements.',
      'Improved customer contact flows with call and Zalo entry points.',
    ],
    impact:
      'Connects the clinic website with appointment collection and notification workflows, helping streamline customer inquiries across multiple branches.',
    tags: [
      'Haravan',
      'Liquid',
      'JavaScript',
      'HTML',
      'CSS',
      'Google Sheets API',
      'Google Apps Script',
      'n8n',
      'Zalo OA',
      'SEO',
    ],
    liveLink: 'https://nhakhoavanthanh.com.vn/',
    githubLink: '',
    type: 'Website & Business Integration',
  },
  {
    id: 5,
    title: 'Viet Adventures',
    description:
      'A self-guided travel mobile application built with React Native and JavaScript, designed to help users explore destinations across Vietnam through location-based features, interactive activities, and travel progress tracking.',
    role: 'Frontend Developer',
    problem: '',
    highlights: [
      'Developed mobile application interfaces and frontend features using React Native and JavaScript.',
      'Implemented user review and rating functionality for travel experiences and destinations.',
      'Integrated MoMo payment functionality into the application.',
      'Implemented GPS-based location features to support location-aware experiences.',
      'Built a Vietnam map feature for users to track provinces they have visited.',
      'Worked on text-to-speech functionality to support travel information playback.',
      'Contributed to mini-game features that make the travel experience more interactive.',
    ],
    impact:
      'Combines mobile development, location-based features, user reviews, and payment integration in a tourism application. The project won first prize in the Tourism Innovation and Startup Competition for Ho Chi Minh City and the Mekong Delta region.',
    tags: [
      'React Native',
      'JavaScript',
      'Mobile Development',
      'GPS',
      'MoMo Payment',
      'Text-to-Speech',
      'Maps',
      'User Reviews',
    ],
    liveLink:
      'https://caodang.fpt.edu.vn/tin-tuc-poly/sinh-vien-fpt-polytechnic-toa-sang-tai-cuoc-thi-khoi-nghiep-doi-moi-sang-tao-du-lich.html',
    githubLink: 'https://github.com/wander-Vietnam/wander_vietnam.git',
    type: 'Mobile Application',
  },
];
