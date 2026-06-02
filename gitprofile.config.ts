
const CONFIG = {
  github: {
    username: 'ogc16', // Your GitHub org/user name. (This is the only required config)
  },
 
  base: '/gitprofile/',
  projects: {
    github: {
      display: false,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [''],
      },
    },
    external: {
      header: 'Projects',
      projects: [
        {
          title: 'Simple Payroll',
          description:
            'Simple Payroll is a payroll calculator designed to help calculate taxes, and generate payslips without storing any data.Generates payslips that can be downloaded as PDFs.',
          imageUrl: 'sps.jpg',
          link: 'https://simplepayroll.netlify.app/',
        },
        {
          title: 'MiniBook',
          description:
            'MiniBook is a simple Web/Mobile application designed to enhance bookkeeping for tenants. Uses async storage to store data on the user device without the need for an account.Uses debouncing to optimize performance and reduce unnecessary re-renders during search.',
          imageUrl: 'MiniBook2.png',
          link: 'https://minibook.expo.app/',
        },
        {
          title: 'Booksy',
          description:
            'Booksy is a modern web application designed to enhance bookkeeping for a layered organization. Built with a fast,scalable and efficient tech stack, it offers a seamless and interactive interface as well as role based access control to ensure data security and integrity.',
          imageUrl: 'booksy.jpg',
          link: 'https://booksy-puce.vercel.app/',
        },
        {
          title: 'EasyBooks',
          description:
            'EasyBooks is a Next.js template designed to enhance bookkeeping. Built with a scalable and efficient tech stack, it offers a seamless and interactive interface.',
          imageUrl: 'acme.png',
          link: 'https://easybooks64.vercel.app/',
        },
        {
          title: 'Jobs Seeker',
          description:
            'Jobs Seeker is a job search engine powered by AI and provides personalized job recommendations based on user profiles and preferences.',
          imageUrl: 'jobseker.jpeg',
          link: 'https://jobseeker1.netlify.app/',
        },
        {
          title: 'DeliveryApp',
          description:
            'A powerful mobile app facilitating delivery,Track, manage, and send parcels seamlessly via our iOS and Android apps or directly from your browser. Simplified',
          imageUrl: 'ParcelFlow.png',
          link: 'https://parcelapp.expo.app/',
        },
        {
          title: 'Data Manipulation Tool',
          description:
            'Data Manipulation Tool is designed to simplify the process of file conversion, transformation, and analysis.',
          imageUrl: 'dmt.jpeg',
          link: 'https://manipulationtool.streamlit.app/',
        },
        {
          title: 'IntruderX',
          description:
            'Network Intrusion Detection System (NIDS) that monitors network traffic for suspicious activities and issues alerts when such activities are discovered.',
          imageUrl: 'intruderx.jpg',
          link: '',
        },
        {
          title: 'Paycy',
          description:
            'Comprehensive payroll system for small and medium-sized businesses.',
          imageUrl: 'Paycy.jpg',
          link: '',
        },
        {
          title: 'Ecoshop',
          description:
            'E-commerce platform for sustainable and eco-friendly products.',
          imageUrl: 'ecoshop.jpg',
          link: '',
        },
        {
          title: 'Sky Horizon Airways',
          description:
            'Sky Horizon Airways is a fictional airline company. This project is a part of my portfolio.',
          imageUrl: 'sky.jpg',
          link: '',
        },
        {
          title: 'News Aggregator',
          description:
            'Aggregates news articles from various sources and presents them in a user-friendly format.',
          imageUrl: 'aggregator.jpg',
          link: '',
        },
        
      ],
    },
  },
  seo: {
    title: "Caleb Ngeno's Portfolio",
    description: 'Full-stack developer & IT consultant specializing in React, Node.js, and cybersecurity. Explore my projects, skills, and experience.',
    imageUrl: '',
  },
  social: {
    linkedin: 'caleb-kibet-834020362',
    x: 'caleb_cnk',
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
    medium: '',
    dev: 'ogc16',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://www.techgaetano.com',
    phone: '+254 703 871 410',
    email: 'ngenokibetcaleb@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1a4KIF1wq8W_LCErHrnTuikTB74Ebuc5zmQmA-gIjbiI/edit?usp=sharing',
  },
  skills: [
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
    'CSS',
    'Tailwind',
    'Splunk',
    'Wireshark',
    'Nmap',
    'Metasploit',
    'Burp Suite',
    'Command Line',
    'Python',
    'Data Analysis',
    'Data Visualization',
    'Power BI',
    'Tableau',
    'AWS',
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

  certifications: [
    {
      name: 'ACCA Diploma in Accounting and Business',
      body: 'Association of Chartered Certified Accountants (ACCA)',
      year: '',
      link: '',
    },
    {
      name: 'Junior Cybersecurity Analyst',
      body: 'CISCO',
      year: 'April 2025',
      link: 'https://drive.google.com/file/d/1QpHOt85D0iGFI1kMPxuH4-FOYOcZo6vt/view?usp=sharing',
    },
    {
      name: 'Google Cybersecurity Certificate',
      body: 'Google',
      year: '',
      link: '',
    },
    // {
    //   name: 'Data Visualization',
    //   body: 'SoloLearn',
    //   year: 'July 2024',
    //   link: 'https://www.sololearn.com/certificates/CC-YBXTKRGO',
    // },
  ],
  educations: [
    {
      institution: 'Jomo Kenyatta University of Agriculture and Technology',
      degree: 'Bachelor of Science in Information Technology',
      from: '2015',
      to: '2019',
    },
  ],
  // Publications removed - all entries were empty. Add real ones here when available.
  publications: [],
  blog: {
    source: 'dev',
    username: 'ogc16',
    limit: 5,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'forest',
      'aqua',
      'black',
      'luxury',
      'dracula',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
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

  footer: `<div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
    <div style="margin-bottom: 0rem; text-align: center; width: 100%;">
      <ul style="list-style-type: none; padding: 0; margin: 0; display: inline-flex; gap: 1rem;">
        <li><a href="/about-us" style="text-decoration: none; color: inherit;">About</a></li>
        <li><a href="/contact" style="text-decoration: none; color: inherit;">Contact</a></li>
      </ul>
    </div>
    <div style="margin-top: 1rem; text-align: center; width: 100%;">
      <p style="margin: 0;">© ${new Date().getFullYear()} Caleb Ngeno. All rights reserved.</p>
    </div>
  </div>`,

  enablePWA: true,
};

export default CONFIG;
