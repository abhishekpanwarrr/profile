interface Github {
  username: string;
}

interface GitHubProjects {
  display?: boolean;
  header?: string;
  mode?: string;
  automatic?: {
    sortBy?: string;
    limit?: number;
    exclude?: {
      forks?: boolean;
      projects?: Array<string>;
    };
  };
  manual?: {
    projects?: Array<string>;
  };
}

interface ExternalProjects {
  header?: string;
  projects?: {
    title: string;
    description?: string;
    imageUrl?: string;
    link: string;
  }[];
}

interface Projects {
  github?: GitHubProjects;
  external?: ExternalProjects;
}

interface SEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

interface Social {
  linkedin?: string;
  twitter?: string;
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

interface Resume {
  fileUrl?: string;
}

interface Experience {
  company?: string;
  position?: string;
  from: string;
  to: string;
  companyLink?: string;
}

interface Certification {
  body?: string;
  name?: string;
  year?: string;
  link?: string;
}

interface Education {
  institution?: string;
  degree?: string;
  from: string;
  to: string;
}

interface Publication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}

interface GoogleAnalytics {
  id?: string;
}

interface Hotjar {
  id?: string;
  snippetVersion?: number;
}

interface Blog {
  source?: string;
  username?: string;
  limit?: number;
}

interface CustomTheme {
  primary?: string;
  secondary?: string;
  accent?: string;
  neutral?: string;
  'base-100'?: string;
  '--rounded-box'?: string;
  '--rounded-btn'?: string;
}

interface ThemeConfig {
  defaultTheme?: string;
  disableSwitch?: boolean;
  respectPrefersColorScheme?: boolean;
  displayAvatarRing?: boolean;
  themes?: Array<string>;
  customTheme?: CustomTheme;
}

interface Config {
  github: Github;
  base?: string;
  projects?: Projects;
  seo?: SEO;
  social?: Social;
  skills?: Array<string>;
  experiences?: Array<Experience>;
  certifications?: Array<Certification>;
  educations?: Array<Education>;
  publications?: Array<Publication>;
  resume?: Resume;
  googleAnalytics?: GoogleAnalytics;
  hotjar?: Hotjar;
  blog?: Blog;
  themeConfig?: ThemeConfig;
  footer?: string;
  enablePWA?: boolean;
}

declare const CONFIG: Config;
