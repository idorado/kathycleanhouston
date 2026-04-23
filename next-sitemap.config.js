/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://kathycleanhouston.com',
  generateRobotsTxt: true,

  // No listar en el sitemap rutas que no queremos posicionar
  exclude: [
    '/sitemap',
    '/robots.txt',
    '/api/*',
    '/admin/*',
    '/404',
    '/500',
  ],

  // Políticas del robots.txt (mantiene Allow / y bloquea /api y /admin)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
  },

  // Normaliza URLs: sin barra final salvo la home; señales por defecto
  transform: async (_config, path) => {
    const loc = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
    const priority = loc === '/' ? 1.0 : 0.7;
    return {
      loc,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
