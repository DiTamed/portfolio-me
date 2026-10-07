import type { ResumeContent } from '@/app/types/resume';

export const resumeContent: ResumeContent = {
  header: {
    firstName: 'NGUYỄN DUY',
    lastName: 'TÂM',
    title: 'Full-stack Development ',
    tagline: '// Web & Mobile Applications',
    contacts: [
      { kind: 'plain', text: 'Ho Chi Minh City, Vietnam' },
      { kind: 'plain', text: '0369231746' },
      {
        kind: 'link',
        text: 'ndtam04@gmail.com',
        href: 'mailto:ndtam04@gmail.com',
      },
      {
        kind: 'link',
        text: 'github.com/DiTamed',
        href: 'https://github.com/DiTamed',
      },
    ],
  },

  sectionTitles: {
    careerPath: 'Career Objective',
    experience: 'Work Experience',
    projects: 'Projects',
    education: 'Education',
    skills: 'Technical Skills',
    languages: 'Languages',
    awards: 'Awards',
  },

  careerPath: {
    lines: [
      [
        { kind: 'text', text: 'I am a ' },
        { kind: 'strong', text: 'Full-stack Developer' },
        {
          kind: 'text',
          text: ' with hands-on experience in frontend development, backend API development, and application integration. I enjoy building practical web and mobile applications that address real user and business needs.',
        },
      ],
      [
        { kind: 'text', text: 'My technical experience includes ' },
        {
          kind: 'strong',
          text: 'React, React Native, Next.js, TypeScript, JavaScript, Python, and FastAPI',
        },
        {
          kind: 'text',
          text: ', along with database integration, third-party services, and deployment workflows.',
        },
      ],
      [
        { kind: 'text', text: 'I aim to keep improving my ' },
        { kind: 'strong', text: 'full-stack engineering skills' },
        {
          kind: 'text',
          text: ' by writing maintainable code, collaborating effectively, and delivering reliable, user-focused software.',
        },
      ],
    ],
  },

  experience: [
    {
      company: 'Van Thanh Medical Investment Joint Stock Company',
      dateRange: 'Dec 2025 — May 2026',
      role: 'Front-end Developer',
      summary:
        'Worked on digital transformation initiatives for the healthcare sector, including clinic website customization and patient-facing digital services.',
      bullets: [
        [
          { kind: 'text', text: 'Customized and maintained clinic websites on the ' },
          { kind: 'strong', text: 'Haravan platform' },
          { kind: 'text', text: ' using HTML, CSS, JavaScript, and Liquid.' },
        ],
        [
          {
            kind: 'text',
            text: 'Developed and maintained website components and pages for clinic services, branch information, and customer contact.',
          },
        ],
        [
          { kind: 'text', text: 'Contributed to an independently developed ' },
          { kind: 'strong', text: 'Zalo Mini App' },
          { kind: 'text', text: ' to improve patient engagement and access to clinic services.' },
        ],
        [
          {
            kind: 'text',
            text: 'Integrated appointment and consultation forms with Google Sheets and automated notifications through workflow tools.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Worked on website SEO configuration, redirects, metadata, and performance improvements.',
          },
        ],
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Liquid', 'Haravan', 'Zalo Mini App', 'SEO'],
    },
    {
      company: 'Theta Business Solution Co., Ltd.',
      dateRange: 'June 2025 — Nov 2025',
      role: 'Front-end Developer',
      summary:
        'Delivered frontend solutions for client projects, including interactive web applications and custom Zalo Mini Apps.',
      bullets: [
        [
          { kind: 'text', text: 'Developed interactive web application interfaces using ' },
          { kind: 'strong', text: 'ReactJS' },
          { kind: 'text', text: ' and related frontend technologies.' },
        ],
        [
          { kind: 'text', text: 'Built and customized ' },
          { kind: 'strong', text: 'Zalo Mini Apps' },
          { kind: 'text', text: ' to support client and business requirements.' },
        ],
        [
          {
            kind: 'text',
            text: 'Improved user experience and interface behavior to align with functional requirements and business goals.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Worked on tailored software solutions for different clients and use cases.',
          },
        ],
      ],
      tags: ['ReactJS', 'JavaScript', 'Frontend Development', 'Zalo Mini Apps'],
    },
  ],

  projects: [
    {
      title: 'Duong Nguyen Huynh — Company Website',
      subtitle: [
        { kind: 'text', text: 'Company website · ' },
        { kind: 'em', text: 'Full-stack development' },
      ],
      linkLabel: 'duongnguyenhuynh.com',
      linkHref: 'https://duongnguyenhuynh.com/',
      bullets: [
        [
          { kind: 'text', text: 'Developed the website frontend using ' },
          { kind: 'strong', text: 'Next.js and TypeScript' },
          { kind: 'text', text: '.' },
        ],
        [
          { kind: 'text', text: 'Implemented backend functionality and database access using ' },
          { kind: 'strong', text: 'Prisma and Supabase' },
          { kind: 'text', text: '.' },
        ],
        [
          {
            kind: 'text',
            text: 'Built pages for company information, product and service presentation, and customer contact.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Handled SEO-related configuration and the end-to-end workflow from frontend and backend development to deployment.',
          },
        ],
      ],
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'SEO', 'Deployment'],
    },
    {
      title: 'Learning Management System (LMS)',
      subtitle: [
        { kind: 'text', text: 'Online learning platform · ' },
        { kind: 'em', text: 'Frontend & UI/UX design' },
      ],
      linkLabel: 'lms-feweb-uit.vercel.app/vi',
      linkHref: 'https://lms-feweb-uit.vercel.app/vi',
      bullets: [
        [
          { kind: 'text', text: 'Designed the platform UI/UX in ' },
          { kind: 'strong', text: 'Figma' },
          { kind: 'text', text: ' and implemented the frontend using Next.js and TypeScript.' },
        ],
        [
          {
            kind: 'text',
            text: 'Built interfaces for course browsing, lesson access, and online learning flows.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Implemented assessment interfaces with answer selection, text input, and checkbox question formats.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Focused on reusable components, clear navigation, and a consistent learning experience.',
          },
        ],
      ],
      tags: ['Next.js', 'TypeScript', 'React', 'Figma', 'UI/UX', 'Tailwind CSS'],
    },
    {
      title: 'Viet Adventures — Travel App',
      subtitle: [
        { kind: 'text', text: 'Tourism mobile application · ' },
        { kind: 'em', text: 'Frontend Developer' },
      ],
      linkLabel: 'FPT Polytechnic project feature',
      linkHref:
        'https://caodang.fpt.edu.vn/tin-tuc-poly/sinh-vien-fpt-polytechnic-toa-sang-tai-cuoc-thi-khoi-nghiep-doi-moi-sang-tao-du-lich.html',
      bullets: [
        [
          { kind: 'text', text: 'Developed mobile application interfaces using ' },
          { kind: 'strong', text: 'React Native and JavaScript' },
          { kind: 'text', text: '.' },
        ],
        [
          {
            kind: 'text',
            text: 'Implemented user rating and review features for travel destinations and experiences.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Integrated MoMo and other e-wallet payment options into the app payment flow.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Implemented GPS-based features and a Vietnam map for tracking provinces visited by users.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Integrated text-to-speech features for audio travel information and contributed to interactive mini-games.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'The project received first prize in a tourism innovation and startup competition for Ho Chi Minh City and the Mekong Delta region.',
          },
        ],
      ],
      tags: ['React Native', 'JavaScript', 'GPS', 'Maps', 'MoMo', 'Text-to-Speech'],
    },
    {
      title: 'Weather Forecast Analysis API',
      subtitle: [
        { kind: 'text', text: 'Weather data service · ' },
        { kind: 'em', text: 'Backend Developer' },
      ],
      linkLabel: 'Weather API documentation',
      linkHref: 'https://weather-backend-0n6d.onrender.com/docs',
      bullets: [
        [
          { kind: 'text', text: 'Built RESTful API endpoints using ' },
          { kind: 'strong', text: 'Python and FastAPI' },
          { kind: 'text', text: ' to serve current, historical, and forecast weather data.' },
        ],
        [
          {
            kind: 'text',
            text: 'Integrated Open-Meteo weather and geocoding APIs to support location-based queries.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Processed weather data including temperature, humidity, and feels-like temperature for frontend consumption.',
          },
        ],
        [
          {
            kind: 'text',
            text: 'Published interactive API documentation with Swagger/OpenAPI and deployed the backend on Render.',
          },
        ],
      ],
      tags: ['Python', 'FastAPI', 'HTTPX', 'REST API', 'Open-Meteo', 'Swagger', 'Render'],
    },
  ],

  education: [
    {
      degree: 'B.Sc. Information Technology',
      school: 'University of Information Technology (UIT) — VNU-HCM',
      date: '2025 — 2027',
      specialization: 'Information Technology',
      thesisTitle: 'LMS — Online Learning Management System',
    },
    {
      degree: 'Applied B.Sc. Software Engineering',
      school: 'FPT Polytechnic College',
      date: '2022 — 2024',
      specialization: 'Mobile Application Development',
      thesisTitle: 'Viet Adventures — Self-Guided Travel Mobile Application',
    },
  ],

  skillGroups: [
    {
      label: 'Frontend & Mobile',
      highlight: true,
      items: [
        'JavaScript',
        'TypeScript',
        'ReactJS',
        'Next.js',
        'React Native',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
      ],
    },
    {
      label: 'Backend & APIs',
      highlight: false,
      items: ['Python', 'FastAPI', 'Node.js', 'RESTful APIs', 'Google Apps Script'],
    },
    {
      label: 'Database & Integrations',
      highlight: false,
      items: [
        'Prisma',
        'Supabase',
        'Firebase',
        'Firestore',
        'Google Sheets API',
        'Cloudinary',
        'MoMo Integration',
      ],
    },
    {
      label: 'Tools & Workflow',
      highlight: false,
      items: ['Git', 'GitHub', 'Figma', 'Swagger/OpenAPI', 'Render', 'Vercel', 'n8n'],
    },
  ],

  languages: [
    { name: 'Vietnamese', level: 'Native', pct: 100 },
    { name: 'English', level: 'Technical Reading & Comprehension', pct: 50 },
  ],

  awards: [
    'First Prize — Tourism Innovation and Startup Competition for Ho Chi Minh City and the Mekong Delta region (Viet Adventures project)',
  ],

  footer: {
    fullName: 'NGUYỄN DUY TÂM',
    roleLabel: 'Software Engineer',
    locationDate: 'HO CHI MINH CITY · 2026',
  },
};
