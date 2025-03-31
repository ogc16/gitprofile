// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ogc16', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Booksy',
          description:
            'Booksy is a modern web application designed to enhance the book keeping. Built with a scalable and efficient tech stack, it offers a seamless and interactive interface.',
          imageUrl:
            'booksy.jpg',
          link: 'https://example.com',
        },
        {
          title: 'IntruderX',
          description:
            'Network Intrusion Detection System (NIDS) is a system that monitors the network traffic for suspicious activities and issues alerts when such activities are discovered.',
          imageUrl:
            'IntruderX (3).jpg',
          link: 'https://example.com',
        },
        {
          title: 'Paycy',
          description:
            'Comprehensive payroll system for small and medium-sized businesses.',
          imageUrl:
            'Paycy.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Ecoshop',
          description:
            'E-commerce platform for sustainable and eco-friendly products.',
          imageUrl:
            'ecoshop.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Sky Horizon Airways',
          description:
            'Sky Horizon Airways is a fictional airline company. This project is a part of my portfolio.',
          imageUrl:
            'sky.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: "Caleb Ngeno's Portfolio", // SEO title
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'ogc16',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.techgaetano.com',
    phone: '+254 703 871 410',
    email: 'ngenokibetcaleb@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1gzy3pQF69jxRTpGrpf8hiZoHhigXELwM/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    //'PHP',
    //'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'ORM',
    'Git',
    'Docker',
    //'PHPUnit',
    'CSS',
   // 'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Tech Gaetano',
      position: 'Software Engineer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://techgaetano.com',
    },
    {
      company: 'Parse Consulting',
      position: 'IT Consultant',
      from: 'July 2020',
      to: 'August 2024',
      companyLink: 'https://parseconsulting.co.ke',
    },
  ],
  certifications: [
    {
      name: 'Data Protection and Privacy',
      body: 'Strathmore University',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Jomo Kenyatta University of Agriculture and Technology',
      degree: 'Bachelor of Science in Information Technology',
      from: '2015',
      to: '2019',
    },
    /*
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
    */
  ],
  /*publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  */
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ogc16', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'system', // Default theme, 'system' or 'dark' or 'light'

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'system',
     // 'cupcake',
     // 'bumblebee',
     // 'emerald',
     // 'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      //'garden',
      'forest',
      'aqua',
      //'lofi',
     // 'pastel',
    //  'fantasy',
    //  'wireframe',
      'black',
      'luxury',
      'dracula',
     // 'cmyk',
      //'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      //'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
