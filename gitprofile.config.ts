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
        {
          title: 'News Aggregator',
          description:
            'Aggregates news articles from various sources and presents them in a user-friendly format.',
          imageUrl:
            'aggregator.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Simple Payroll',
          description:
            ' Simple Payroll is payroll calculator designed to help calculate taxes, and generate payslips without storing any data.',
          imageUrl:
            'sps.jpg',
          link: 'https://simplepayroll.netlify.app/',
        },
        {
        title: 'EasyBooks',
          description:
            ' EasyBooks is a nextjs template designed to enhance the book keeping. Built with a scalable and efficient tech stack, it offers a seamless and interactive interface.',
          imageUrl:
            'acme.jpg',
          link: 'https://nextjs-dashboard-git-second-ogc16s-projects.vercel.app/',
        }
    
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
      'https://docs.google.com/document/d/1a4KIF1wq8W_LCErHrnTuikTB74Ebuc5zmQmA-gIjbiI/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
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
      from: 'Dec 2023',
      to: 'Present',
      companyLink: 'https://techgaetano.com',
    },
    {
      company: 'Parse Consulting',
      position: 'IT Consultant',
      from: 'Jan 2022',
      to: 'Oct 2023',
      companyLink: 'https://parseconsulting.co.ke',
    },
  ],
  virtualExperiences: [
    {
      title: 'Mastercard Cybersecurity Virtual Experience Program on Forage - June 2024',
      description: `Completed a job simulation where I served as an analyst on Mastercard’s Security Awareness Team.
Helped identify and report security threats such as phishing.
Analyzed and identified which areas of the business needed more robust security training and implemented training courses and procedures for those teams.`,
      skills: [
        "Cybersecurity",
        "Technical Security Awareness",
        "Problem Solving",
        "Design Thinking",
        "Communication",
        "Security Awareness Training",
        "Data Analysis",
        "Data Presentation",
        "Strategy"
      ]
    },
    { 
      title: 'Verizon Cloud Platform Job Simulation on Forage - June 2024',
      description: `Completed a job simulation focused on developing a new VPN product for Verizon's Cloud Computing team.
Utilized command line Python to test and ensure that the VPN met essential cloud-native traits, including redundancy, resiliency, and least-privilege.
Researched and implemented several security measures and presented the findings in a detailed PowerPoint presentation.`,
      skills: [
        "Agile Environment",
        "Coding",
        "Concept Demonstration",
        "Internal Communication",
        "Meeting your team",
        "Reflection",
        "Research",
        "Understanding the brief"
      ]
    },
  ],
  certifications: [
    {
      name: 'Junior Cybersecurity Analyst',
      body: 'CISCO',
      year: 'April 2025',
      link: 'https://drive.google.com/file/d/1QpHOt85D0iGFI1kMPxuH4-FOYOcZo6vt/view?usp=sharing',
      imageUrl: ""
      },
    {
      name: 'Data Protection',
      body: 'Strathmore University',
      year: 'May 2024',
      link: 'https://drive.google.com/file/d/1x_jsJAMIfkOulIG9fBu6jIpYrc-eIYoa/view?usp=sharing',
    },
    {
      name: 'Diploma in Data Analysis',
      body: 'KUBICLE',
      year: 'May 2023',
      link: '',
    },

  /*{  {
      name: 'Certified Ethical Hacker (CEH)',
      body: 'EC-Council',
      year: 'March 2022',
      link: '',
    },
    {
      name: 'Certified Information Systems Security Professional (CISSP)',
      body: 'ISC2',
      year: 'March 2022',
      link: '',
    },
   */
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
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        ' '
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],

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
    defaultTheme: 'synthwave', // Default theme, 'system' or 'dark' or 'light'

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
  footer: `<div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
    <!-- Navigation Links Section -->
    <div style="margin-bottom: 1rem; text-align: center; width: 100%;">
      <ul style="list-style-type: none; padding: 0; margin: 0; display: inline-flex; gap: 1rem;">
        <li><a href="/about-us" style="text-decoration: none; color: inherit;">About</a></li>
        <li><a href="/services" style="text-decoration: none; color: inherit;">Services</a></li>
        <li><a href="/privacy-policy" style="text-decoration: none; color: inherit;">Privacy Policy</a></li>
        <li><a href="/terms-of-service" style="text-decoration: none; color: inherit;">Terms of Service</a></li>
        <li><a href="/contact" style="text-decoration: none; color: inherit;">Contact</a></li>
      </ul>
    </div>

    <!-- Copyright Section -->
    <div style="margin-top: 1rem; text-align: center; width: 100%;">
      <p style="margin: 0;">© ${new Date().getFullYear()} Caleb Ngeno. All rights reserved.</p>
    </div>
  </div>`,

  enablePWA: true,
};

export default CONFIG;
