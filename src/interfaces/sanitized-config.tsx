export interface SanitizedGithub {
  username: string;
}

export interface SanitizedGitHubProjects {
  display: boolean;
  header: string;
  mode: string;
  automatic: {
    sortBy: string;
    limit: number;
    exclude: {
      forks: boolean;
      projects: Array<string>;
    };
  };
  manual: {
    projects: Array<string>;
  };
  links?: Record<string, string>;
}

export interface SanitizedExternalProject {
  title: string;
  description?: string;
  imageUrl?: string;
  link: string;
  subtitle?: string;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  techStack?: Array<string>;
}

export interface SanitizedExternalProjects {
  header: string;
  subtitle?: string;
  projects: SanitizedExternalProject[];
}

export interface SanitizedProjects {
  github: SanitizedGitHubProjects;
  external: SanitizedExternalProjects;
  apps?: SanitizedExternalProjects;
}

export interface SanitizedSEO {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export interface SanitizedSocial {
  linkedin?: string;
  x?: string;
  mastodon?: string;
  researchGate?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  threads?: string;
  youtube?: string;
  udemy?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  skype?: string;
  telegram?: string;
  phone?: string;
  email?: string;
}

export interface SanitizedResume {
  fileUrl?: string;
}

export interface SanitizedExperience {
  company?: string;
  position?: string;
  from: string;
  to: string;
  companyLink?: string;
}

export interface SanitizedCertification {
  body?: string;
  name?: string;
  year?: string;
  link?: string;
}

export interface SanitizedEducation {
  institution?: string;
  degree?: string;
  from: string;
  to: string;
}

export interface SanitizedPublication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}

export interface SanitizedGoogleAnalytics {
  id?: string;
}

export interface SanitizedHotjar {
  id?: string;
  snippetVersion: number;
}

export interface SanitizedBlog {
  display: boolean;
  source: string;
  username: string;
  limit: number;
}

export interface SanitizedContact {
  email: string;
}

export interface SanitizedCustomTheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  'base-100': string;
  '--rounded-box': string;
  '--rounded-btn': string;
}

export interface SanitizedThemeConfig {
  defaultTheme: string;
  disableSwitch: boolean;
  respectPrefersColorScheme: boolean;
  displayAvatarRing: boolean;
  themes: Array<string>;
  customTheme: SanitizedCustomTheme;
}

export interface SanitizedConfig {
  github: SanitizedGithub;
  projects: SanitizedProjects;
  seo: SanitizedSEO;
  social: SanitizedSocial;
  resume: SanitizedResume;
  skills: Array<string>;
  experiences: Array<SanitizedExperience>;
  educations: Array<SanitizedEducation>;
  certifications: Array<SanitizedCertification>;
  publications: Array<SanitizedPublication>;
  googleAnalytics: SanitizedGoogleAnalytics;
  hotjar: SanitizedHotjar;
  blog: SanitizedBlog;
  contact?: SanitizedContact;
  themeConfig: SanitizedThemeConfig;
  footer?: string;
  enablePWA: boolean;
}
