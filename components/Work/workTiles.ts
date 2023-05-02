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
    title: 'Evology.ai',
    image: {
      src: '/static/images/project/evology.png',
      width: 700,
      height: 754,
    },
    link: 'https://www.evology.ai',
    country: 'Slovenia 🇸🇮',
  },
  {
    description: `I maintained`,
    title: 'University Publications Office (OPU)',
    image: {
      src: '/static/images/project/opu.png',
      width: 600,
      height: 717,
    },
    link: 'https://st.iqraa.opu.dz/',
    country: 'Algeria 🇩🇿',
  },
  {
    description: `I designed and built`,
    title: 'Sellforms',
    image: {
      src: '/static/images/project/sellforms.png',
      width: 600,
      height: 717,
    },
    link: 'https://sellforms.com/',
    country: 'USA 🇺🇸',
  },
  {
    description: `I designed and built`,
    title: 'Coordate',
    image: {
      src: '/static/images/project/lbb-list.png',
      width: 600,
      height: 500,
    },
    link: 'https://coordate.com/',
    country: 'France 🇫🇷',
  },
  {
    description: `I maintained`,
    title: 'Primrecrut',
    image: {
      src: '/static/images/project/primrecrut.png',
      width: 700,
      height: 900,
    },
    link: 'https://primrecrut.com/',
    country: 'France 🇫🇷',
  },
  {
    description: `I build`,
    title: '&Arise',
    image: {
      src: '/static/images/project/and-arise.png',
      width: 700,
      height: 900,
    },
    link: 'https://and-arise.com/',
    country: 'USA 🇺🇸',
  },
  {
    description: `I designed and built`,
    title: 'Taskbox',
    image: {
      src: '/static/images/project/alert.png',
      width: 600,
      height: 500,
    },
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
    description: `I redesigned`,
    title: 'Lemsa Innovation official website',
    image: {
      src: '/static/images/project/LEMSA.png',
      width: 700,
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
    description: `I redesigned`,
    title: 'Data Master official website',
    image: {
      src: '/static/images/project/data-master.png',
      width: 900,
      height: 500,
    },
    country: 'Algeria 🇩🇿',
  },
];
