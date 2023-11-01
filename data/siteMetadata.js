const siteMetadata = {
  title: 'Megherbi abdelkader111111',
  author: 'Megherbi abdelkader',
  headerTitle: 'kader',
  description: 'UI/UX Designer / Frontend Engineer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com/dlarroder/dalelarroder-blog',
  siteLogo: 'public/static/images/avatar.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'youssouf.kacemi@gmail.com',
  github: 'https://github.com/dr1tch',
  twitter: 'https://twitter.com/dr1tch',
  facebook: 'https://facebook.com/dlarroder',
  linkedin: 'https://www.linkedin.com/in/dr1tch/',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/id/dlarroder/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
