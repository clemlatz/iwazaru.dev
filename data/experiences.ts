type JobTitleType = {
  en: string;
  fr: string;
};

export type ExperienceType = {
  jobTitle: JobTitleType;
  slug: string;
  startYear: number;
  endYear?: number;
  company: string;
  companyUrl?: string;
  tags?: string[];
};

const experiences: ExperienceType[] = [
  {
    jobTitle: {
      en: 'Fullstack web developer',
      fr: 'Développeur web fullstack',
    },
    slug: 'pix',
    company: 'Pix',
    companyUrl: 'https://www.pix.fr/',
    startYear: 2021,
    tags: ['node', 'ember'],
  },
  {
    jobTitle: {
      en: 'Freelance web developer',
      fr: 'Développeur web freelance',
    },
    slug: 'freelance',
    company: 'Biblys',
    companyUrl: 'https://www.biblys.fr/',
    startYear: 2008,
    tags: ['php', 'mysql', 'html', 'css', 'javascript', 'jquery'],
  },
  {
    jobTitle: {
      en: 'Front-end web developer',
      fr: 'Développeur front-end web',
    },
    slug: 'actialuna',
    company: 'Actialuna',
    companyUrl: 'https://www.actialuna.com',
    startYear: 2015,
    endYear: 2020,
    tags: ['react', 'typescript', 'es2015+', 'css', 'html', 'epub'],
  },
  {
    jobTitle: {
      en: 'Web & digital publishing manager',
      fr: 'Responsable web & édition numérique',
    },
    slug: 'belial',
    company: "Éditions Le Bélial'",
    companyUrl: 'https://www.belial.fr',
    startYear: 2009,
    endYear: 2019,
    tags: ['epub', 'onyx'],
  },
  {
    jobTitle: {
      en: 'Fullstack web developer',
      fr: 'Développeur web full-stack',
    },
    slug: 'draftquest',
    company: 'DraftQuest',
    companyUrl: 'https://www.draftquest.fr/',
    startYear: 2014,
    endYear: 2014,
    tags: ['symfony', 'php', 'mysql', 'html', 'css', 'javascript'],
  },
  {
    jobTitle: {
      en: 'Book industry degree Teacher',
      fr: 'Enseignant Master Métiers du livre',
    },
    slug: 'upn',
    company: 'Université Paris-Nanterre',
    companyUrl: 'https://polemlivre.parisnanterre.fr/',
    startYear: 2011,
    endYear: 2014,
    tags: ['html', 'css', 'wordpress', 'epub'],
  },
  {
    jobTitle: {
      en: 'Online bookshop manager',
      fr: 'Gérant de librairie en ligne',
    },
    slug: 'librys',
    company: 'Librairie Ys',
    startYear: 2008,
    endYear: 2013,
  },
  {
    jobTitle: {
      en: 'Comics & youth literature manager',
      fr: 'Responsable BD & jeunesse',
    },
    slug: 'contretemps',
    company: 'Librairie Contretemps',
    startYear: 2007,
    endYear: 2007,
  },
  {
    jobTitle: {
      en: 'Bookseller apprentice',
      fr: 'Apprenti-vendeur en librairie',
    },
    slug: 'fontaine',
    company: 'Librairies Fontaine',
    companyUrl: 'https://www.librairiesfontaine.com/',
    startYear: 2005,
    endYear: 2007,
  },
];

export default experiences;
