
const CONFIG = {
  github: {
    username: 'ogc16', // Your GitHub org/user name. (This is the only required config)
  },
 
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Tools & Utilities',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'ogc16/password_generator',
          'ogc16/ChromeExtensionTool',
          'ogc16/data_manipulation_tool',
        ],
      },
      links: {
        password_generator:
          'https://chromewebstore.google.com/detail/jnaahcmbjoopklellmnmjhpgjineggan?utm_source=item-share-cb',
        data_manipulation_tool: 'https://dt.techgaetano.com/',
      },
    },
    external: {
      header: 'Projects',
      subtitle:
        'A curated selection of projects representing primary engineering focus across platform engineering, infrastructure automation, cybersecurity, networking, and security tooling.',
      projects: [
        {
          title: 'iaas-platform',
          subtitle: 'Infrastructure-as-a-Service Platform',
          description:
            'A Go-based infrastructure platform designed around multi-tenant organizations, resource management, programmable compute resources, and usage-aware infrastructure services. Maintains sub-15ms API gateway routing latency under a 1,000 req/sec load test using token-bucket middleware.',
          situation:
            'Organizations needed scalable, multi-tenant infrastructure with usage-based billing',
          task: 'Build a programmable IaaS platform with tenant isolation and resource management',
          action:
            'Designed multi-tenant architecture with API gateway, token bucket rate limiting, and tenant compute scheduler',
          result:
            'Production-ready platform supporting multi-organization resource management and usage-based billing',
          techStack: ['Go', 'REST APIs', 'Cloud Architecture', 'SaaS'],
          link: 'https://github.com/ogc16/iaas-platform',
        },
        {
          title: 'autorun',
          subtitle: 'Centralized IT Automation Platform',
          description:
            'A controlled automation platform for executing and scheduling operational workloads across IT environments with access control, auditing, and operational visibility. Executes asynchronous cross-platform jobs with sub-50ms queue delay and immutable log ingestion.',
          situation: 'IT teams needed centralized automation with governance and audit trails',
          task: 'Build a controlled execution platform with RBAC and operational visibility',
          action:
            'Implemented job scheduling, live execution logs, and audit trails with Spring Boot backend',
          result:
            'Streamlined IT operations with controlled automation and full audit compliance',
          techStack: ['Java 17', 'Spring Boot', 'PowerShell', 'Python', 'Bash'],
          link: 'https://github.com/ogc16/autorun',
        },
        {
          title: 'nids',
          subtitle: 'Network Security Monitoring & Detection Platform',
          description:
            'An open-source cybersecurity platform focused on network visibility, packet analysis, protocol inspection, and structured security operations workflows. Parses and evaluates live Tshark packet captures at up to 100 Mbps with zero dropped buffers.',
          situation: 'Networks lacked visibility into traffic patterns and security threats',
          task: 'Build a monitoring platform with packet analysis and security workflows',
          action:
            'Integrated Wireshark, Tshark, and Npcap for deep packet inspection with security playbooks',
          result:
            'Enhanced network visibility and structured security operations capabilities',
          techStack: ['TypeScript', 'Wireshark', 'Tshark', 'Npcap', 'Network Security'],
          link: 'https://github.com/ogc16/nids',
        },
        {
          title: 'cyber-shield-up',
          subtitle: 'AI-Assisted Security Tooling',
          description:
            'A security-focused browser extension exploring automated vulnerability analysis and AI-assisted security assessment.',
          situation: 'Security assessments required manual vulnerability scanning and analysis',
          task: 'Build a browser-based tool for automated vulnerability detection with AI assistance',
          action:
            'Developed a Chrome Extension implementing client-side AST analysis and parallel manifest schema generation',
          result:
            'Reduced automated extension manifest validation and store payload assembly from 12.4s to 7.4s',
          techStack: ['TypeScript', 'Chrome Extensions', 'AI', 'Security'],
          link: 'https://chromewebstore.google.com/detail/mlgjidmlbpmcphkaainofhkgjelmffnn?utm_source=item-share-cb',
        },
      ],
    },
    apps: {
      header: 'App Portfolio',
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
          title: 'IntruderX',
          description:
            'Network Intrusion Detection System (NIDS) that monitors network traffic for suspicious activities and issues alerts when such activities are discovered.',
          imageUrl: 'intruderx.jpg',
          link: 'https://github.com/ogc16/nids',
        },
        {
          title: 'Paycy',
          description:
            'Comprehensive payroll system for small and medium-sized businesses.',
          imageUrl: 'Paycy.jpg',
          link: 'https://github.com/ogc16/paycy',
        },
        {
          title: 'Ecoshop',
          description:
            'E-commerce platform for sustainable and eco-friendly products.',
          imageUrl: 'ecoshop.jpg',
          link: 'https://github.com/ogc16/EcoShop',
        },
        {
          title: 'Sky Horizon Airways',
          description:
            'Sky Horizon Airways is a fictional airline company. This project is a part of my portfolio.',
          imageUrl: 'sky.jpg',
          link: 'https://github.com/ogc16/SkyHorizon',
        },
        {
          title: 'News Aggregator',
          description:
            'Aggregates news articles from various sources and presents them in a user-friendly format.',
          imageUrl: 'aggregator.jpg',
          link: 'https://github.com/ogc16/aggregatorX',
        },
      ],
    },
    solutions: {
      header: 'Business Solutions',
      projects: [
        {
          title: 'NextCRM',
          description:
            'Open-source CRM built with Next.js 16, React 19, PostgreSQL, Prisma 7, and shadcn/ui. CRM, projects, invoicing, documents, email client & AI features.',
          icon: 'crm',
          link: 'https://demo.nextcrm.io',
        },
        {
          title: 'Simple Payroll',
          description:
            'Payroll calculator that helps calculate taxes and generate payslips without storing any data. Generates payslips that can be downloaded as PDFs.',
          icon: 'payroll',
          link: 'https://simplepayroll.netlify.app/',
        },
        {
          title: 'Paycy',
          description:
            'Comprehensive payroll system for small and medium-sized businesses.',
          icon: 'payroll',
          link: 'https://github.com/ogc16/paycy',
        },
        {
          title: 'MiniBook',
          description:
            'Rent collection companion for tenants. Track and manage rent payments with bookkeeping features, using async storage on the user device without the need for an account.',
          icon: 'rent',
          link: 'https://minibook.expo.app/',
        },
        {
          title: 'Booksy',
          description:
            'Bookkeeping for a layered organization. Fast, scalable and efficient tech stack with a seamless interface and role-based access control for data security and integrity.',
          icon: 'bookkeeping',
          link: 'https://booksy-puce.vercel.app/',
        },
        {
          title: 'EasyBooks',
          description:
            'Next.js bookkeeping solution built with a scalable and efficient tech stack for a seamless and interactive interface.',
          icon: 'bookkeeping',
          link: 'https://easybooks64.vercel.app/',
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
    {
      title: 'Languages & Frameworks',
      skills: [
        'JavaScript',
        'TypeScript',
        'Go',
        'Python',
        'Java',
        'React.js',
        'Node.js',
        'Next.js',
        'CSS',
        'Tailwind',
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Git', 'REST APIs'],
    },
    {
      title: 'Security & Tools',
      skills: [
        'Splunk',
        'Wireshark',
        'Nmap',
        'Metasploit',
        'Burp Suite',
        'Command Line',
      ],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'ORM'],
    },
    {
      title: 'Data & Analytics',
      skills: [
        'Data Analysis',
        'Data Visualization',
        'Power BI',
        'Tableau',
      ],
    },
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
    limit: 3,
  },
  contact: {
    email: 'ngenokibetcaleb@gmail.com',
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'aqua',
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
