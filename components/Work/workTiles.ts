export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  link?: string;
  country?: string;
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/project/all.png',
      width: 700,
      height: 770,
    },
  },
  {
    description: 'I designed and built',
    title: 'International Plant Protection Symposium (1st SIPV - ENSA - 2023)    ',
    image: {
      src: '/static/images/project/ENSA-BANNER.png',
      width: 900,
      height: 900,
    },
    link: 'https://www.ensa-sipv-2023.com/',
    country: 'Algeria 🇩🇿',
  },
  {
    description: 'I designed and built',
    title: 'Agence bin',
    image: {
      src: '/static/images/project/1.png',
      width: 700,
      height: 754,
    },
    link: 'https://agencebin.com/',
    country: 'Algeria 🇩🇿',
  },
  {
    description: `I designed`,
    title: 'E-SHOPOS',
    image: {
      src: '/static/images/project/caisse.png',
      width: 600,
      height: 500,
    },
    country: 'Algeria 🇩🇿',
  },
  {
    description: `I designed`,
    title: 'E-Commerce App (Personal Project)',
    image: {
      src: '/static/images/project/habitual-landing.png',
      width: 500,
      height: 500,
    },
    country: 'Algeria 🇩🇿',
  },

  {
    description: `I designed`,
    title: 'Store stock Management App',
    image: {
      src: '/static/images/project/e-shop.png',
      width: 700,
      height: 500,
    },
    country: 'Algeria 🇩🇿',
  },
  {
    description: `I designed and built`,
    title: 'kotibook',
    image: {
      src: '/static/images/project/2.png',
      width: 800,
      height: 500,
    },
    country: 'Algeria 🇩🇿',
  },
];
