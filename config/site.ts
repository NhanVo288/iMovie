export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'iMovie',
  description: 'iMovie is a movie and tv show tracker built by NhanVo.',

  // Author and creator information
  author: {
    name: 'NhanVo',
    email: 'vnhan2808@gmail.com',
    website: 'https://github.com/NhanVo288/',
    twitter: 'https://github.com/NhanVo288',
  },

  // Theme and visual configuration
  theme: {
    colors: {
      light: '#ffffff',
      dark: '#000000',
      primary: '#000000',
      tile: '#000000',
    },
  },

  // SEO and metadata configuration
  seo: {
    locale: 'en_US',
    alternateLocales: ['en_GB', 'en_CA'],
    category: 'entertainment',
    generator: 'Next.js',
    applicationName: 'iMovie',
    publisher: 'iMovie',
    referrer: 'origin-when-cross-origin',
    colorScheme: 'dark light',
  },

  // Open Graph enhanced configuration
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'iMovie',
    ttl: 604800, // 7 days
  },

  // Twitter card configuration
  twitter: {
    card: 'summary_large_image',
    creator: 'https://github.com/NhanVo288',
    site: 'https://github.com/NhanVo288',
  },

  // Progressive Web App configuration
  pwa: {
    capable: true,
    statusBarStyle: 'black-translucent',
    manifestPath: '/site.webmanifest',
  },

  // Icons configuration
  icons: {
    browserConfig: '/browserconfig.xml',
  },

  // Performance optimization
  performance: {
    preconnectDomains: [
      'https://image.tmdb.org',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ],
    dnsPrefetchDomains: [
      '//www.googletagmanager.com',
      '//www.google-analytics.com',
    ],
  },

  // Security configuration
  security: {
    contentSecurityPolicy: "default-src 'self'",
    formatDetection: 'telephone=no',
  },

  // Structured data for JSON-LD
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    searchAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },

  mainNav: [
    {
      title: 'Home',
      href: '/',
      scroll: true,
    },
    {
      title: 'Movies',
      href: '/movies',
      scroll: true,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      scroll: true,
    },
    {
      title: 'Watchlist',
      href: '/watchlist',
      scroll: true,
    },
    {
      title: 'Watch History',
      href: '/watch-history',
      scroll: true,
    },
    {
      title: 'Disclaimer',
      href: '/disclaimer',
      scroll: false,
    },
  ],
  personalLogo:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',
  links: {
    twitter: 'https://github.com/NhanVo288',
    github: 'https://github.com/NhanVo288',
    website: 'https://github.com/NhanVo288/',
    buyMeACoffee: 'https://github.com/NhanVo288',
  },
  email: 'vnhan2808@gmail.com',
  websiteURL: 'https://imovie.dpdns.org/',
  twitterTag: 'https://github.com/NhanVo288',
  image:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',
  keywords: [
    'iMovie',
    'iMovie Tracker',
    'Movie Tracker',
    'TV Show Tracker',
    'iMovie Live',
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NhanVo',
    'React Developer',
    'React Engineer',
    'React.js',
    'ReactJS',
    'React Developer',
    'Next.js',
    'NextJS',
    'Next.js Developer',
    'Next.js Engineer',
  ],
}
