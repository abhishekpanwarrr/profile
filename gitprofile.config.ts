const CONFIG = {
  github: {
    username: 'abhishekpanwarrr',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: []
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Amazon MERN App',
          description:
            'This is a clone of the Amazon website built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes user authentication, user profile, adding items in liked list and shopping cart functionality',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://amzone-clone-frontend.vercel.app/',
        },
        {
          title: 'Kanban Board',
          description:
            'A Kanban board application built with React, enabling users to manage tasks using the Kanban method. It supports creating tasks, moving them across different stages, and marking them as completed.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://kanban-boardd.netlify.app',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Abhishek Panwar',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'abhishekpanwarrr',
    twitter: 'webabhishekk',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'abhishekpanwarrr',
    dev: 'abhishekpanwarrr',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://abhishek.pro',
    phone: '+919991237576',
    email: 'abhishekpanwar1718@gmail.com',
  },
  resume: {
    fileUrl:
      '/resume/abhishek_cv.pdf',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Cypress',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Leadzen ai',
      position: 'Software developer engineer -1',
      from: 'July 2022',
      to: 'December 2023',
      companyLink: '',
    },
    {
      company: 'Hexus (Opensource project)',
      position: 'Frontend developer',
      from: 'November 2023',
      to: 'Jan 2024',
      companyLink: 'https://app.hexus.ai',
    },
  ],
  certifications: [
    {
      name: 'Web development bootcamp',
      body: 'Codekaro',
      year: 'June 2022',
      link: 'https://codekaro.in/workshop-certificate/71caf8aa9fe807ba',
    },
    {
      name: 'React Js bootcamp',
      body: 'Learncodeonline',
      year: 'May 2021',
      link: 'https://courses.learncodeonline.in/learn/certificate/601500-53635',
    },
  ],
  educations: [
    {
      institution: 'Kalinga University',
      degree: 'Bachelor of Computer Application',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'Amity University',
      degree: 'Bsc.IT',
      from: '2014',
      to: '2017',
    },
  ],
  publications: [
    {
      title: 'REST API and Its Architecture',
      conferenceName: '',
      journalName: 'Dev.to',
      authors: 'Abhishek Panwar',
      link: 'https://dev.to/abhishekpanwarrr/rest-api-and-its-architecture-3623',
      description:
        `In today's web development world, APIs (Application Programming Interfaces) play a crucial role in enabling communication between different software systems. One of the most widely used types of API is the REST API, which stands for Representational State Transfer. REST APIs have become the standard for building scalable, maintainable, and efficient web services. In this blog, we will dive deep into what REST APIs are, their principles, architecture, components, and how to design and implement them effectively.`,
    },
  ],
  blog: {
    source: 'medium',
    username: 'abhishekpanwarrr',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
