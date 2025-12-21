/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://arpon007.me',
  generateRobotsTxt: false, // We have our own robots.txt
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
    '/api/*', 
    '/admin/*', 
    '/auth/*', 
    '/dark007/*',
    '/_next/*',
    '/.well-known/*'
  ],
  transform: async (config, path) => {
    // Custom transform to set different priorities and change frequencies
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    if (path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://arpon007.me/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/auth/', '/dark007/', '/_next/', '/.well-known/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/auth/', '/dark007/', '/_next/', '/.well-known/'],
        crawlDelay: 1,
      },
    ],
  },
} 